function CuadradoAgrupacion (){
	return {

		$$padre:null  // guarda ob padre Flujo.js
		,$$pagina:null
		,$elementoInicioAgrupacion:null
		,listaDiagramasSelecccionados:[]/// ej Jquery ...


		,estado:0// 0 incio, 1 se esta en proceso de seleccion, 2 -> se selecciono , 3 se desagrupo , 
		,$agrupador:null

		,dibujar:function(){

			var _self= this;

			var html="  <div  class='agrupador_inicial_seleccionados' ";
					html+="	style='top:1px; left:1px;' ";
					html+="	                 > "
					html+="	                  <div style='position:absolute; z-index:1000;width:100%; background: rgba(81, 160, 18, 0.24); " ;
							                   

					html+="	                  height:100%;'></div> ";
					html+="	                 </div> ";

					var $divAgrupador =$(html);	

					_self.$elementoInicioAgrupacion=$divAgrupador;	
					_self.$$pagina.append($divAgrupador);	


					_self.$agrupador = _self.$$pagina.find(".seleccionados_grupos");
					_self.estado= 1;


					_self.$$padre.deseleccionarElemento();

		}// fin funci dibujar





		//funcion de colision indica is dos div han colisiconasdo 
		,actualizaSeleccinados:function()
		{
			var _self=this;
			
			var lista = _self.$$padre.getDiagramasPaginaActual();
			var listaSeleccionados=[];


			// deselecciona los elementos (diagmraml )
			_self.$$pagina.find(".elementos_seleccionado").removeClass("elementos_seleccionado");

			for(var i=0; i< lista.length ; i++)
			{
				var $diagramaPagina  = $(lista[i]); 
				if( _self.$$padre.estaDentroSegundo($diagramaPagina,_self.$elementoInicioAgrupacion))
				{
					listaSeleccionados.push($diagramaPagina);
					$diagramaPagina.addClass("elementos_seleccionado");

				}

			}// fin de for

			_self.listaDiagramasSelecccionados = listaSeleccionados;


		}// fin function -->actualizaSeleccinados





		// *************
		//
		,agrupar:function(){

			var _self=this;

			if(_self.$elementoInicioAgrupacion==null)
				return ;


			_self.$elementoInicioAgrupacion.remove();
			_self.$elementoInicioAgrupacion= null;


			$listaElementos =_self.listaDiagramasSelecccionados;
			$agrupador =_self.$agrupador;
			
			///valida si selecciona un elemento por lo menos
			if($listaElementos.length>0){

				$agrupador.show();
			
				_self.ajustaTam($agrupador,$listaElementos);

				$agrupador.append($listaElementos);

				//desface es ..
				var x= parseInt($agrupador.css("left"));
					if(isNaN(x))
					{
						x=0;
					}
					
				var y= parseInt($agrupador.css("top"));
					if(isNaN(y))
					{
						y=0;
					}
					
						// COLOCANDO LA NUEVA POSICION PARA NO SENTIR CAMBIOS VISUALES
					for (var index = 0; index < $listaElementos.length; index++) 
					{

						var elemento = $listaElementos[index];

	 					var $obj= $(elemento);
						var o_x= parseInt($obj.css("left"));
						if(isNaN(o_x))
							{
								o_x=0;
							}
							
						var o_y= parseInt($obj.css("top"));
							if(isNaN(o_y))
							{
								o_y=0;
							}
							
						o_x-=x;			
						o_y-=y;
						
						$obj.css({"left":o_x+"px" ,
						      "top":o_y+"px"});
						
					}

				_self.$$padre.mostrarAlineacionElementosAgrupados(true);
			}// endif validcion 
			else {// el caso donde no seleccion un elemento
					$agrupador.hide();
					_self.$$padre.mostrarAlineacionElementosAgrupados(false);
			}

				_self.estado= 2;
				_self.$$pagina.find(".punto_cuadrado").hide();
				

			}// fin funcion 






		// ajusta el tamaño y la posicion del elelemnto a grupar .. 
		// los elemento div .. 
		,ajustaTam:function($agrupador,$listaElementos)
		{

			var x1=-1;//extremo inferior
			var y1=-1;//extremo inferior
			var x2=0;// extremo super
			var y2=0;// extremo super

			for (var index = 0; index < $listaElementos.length; index++) 
			{
					var elemento =$listaElementos[index];

					var $obj= $(elemento);
					var mix=parseInt($(elemento).css("left"));
						mix= isNaN(mix)? 0:mix;

					var miy=parseInt($(elemento).css("top"));
						miy= isNaN(miy)? 0:miy;	

					var miAl=$(elemento).height();
					var miAn=$(elemento).width();

					var mix2= mix+miAn;
					var miy2= miy+miAl;

					if(index==0)
					{
						x1 = mix;
						y1 = miy;

						x2= mix2;
						y2= miy2;
					}

					if(mix<x1)
						x1=mix;

					if(miy<y1)
						y1=miy;


					if(mix2>x2)
						x2=mix2;


					if(miy2>y2)
						y2= miy2;

			}



			$agrupador.css({
				"left":x1,
				"top" :y1,
				"width":(x2-x1),
				"height":(y2-y1),
			});

		}// fin function -->ajustaTam






		//fuction de centrar en modo horizontal
		,centrarModoHorizontal:function()
		{


			var _self=this;

			$listaElementos =_self.listaDiagramasSelecccionados;
			$agrupador =_self.$agrupador;

			var mix=parseInt($agrupador.css("left"));
				mix= isNaN(mix)? 0:mix;

			var miy= parseInt($agrupador.css("top"));
				miy= isNaN(miy)? 0:miy;	

			var miAl=$agrupador.height();
			var miAn=$agrupador.width();

			var mix2= mix+miAn;
			var miy2= miy+miAl;


			var puntoX =parseInt(miAn/2);


			for(var i=0; i<$listaElementos.length ; i++)
			{
				var $elementoDiagrama = $( $listaElementos[i]);
				var mileft=parseInt(puntoX - $elementoDiagrama.width()/2);


				$elementoDiagrama.css({"left":mileft});


			}



		}// function ...>centrarModoHorizontal





		//fuction de centrar en modo horizontal
		,centrarModoVertical:function()
		{


			var _self=this;

			$listaElementos =_self.listaDiagramasSelecccionados;
			$agrupador =_self.$agrupador;

			var mix=parseInt($agrupador.css("left"));
				mix= isNaN(mix)? 0:mix;

			var miy= parseInt($agrupador.css("top"));
				miy= isNaN(miy)? 0:miy;	

			var miAl=$agrupador.height();
			var miAn=$agrupador.width();

			var mix2= mix+miAn;
			var miy2= miy+miAl;


			var puntoY =parseInt(miAl/2);


			for(var i=0; i<$listaElementos.length ; i++)
			{
				var $elementoDiagrama = $( $listaElementos[i]);
				var miTop=parseInt(puntoY - $elementoDiagrama.height()/2);


				$elementoDiagrama.css({"top":miTop});


			}



		}// function ...>centrarModoHorizontal





		//******************
		// desagrupa los elemntos seleccioandos 
		,desagrupar:function(){

	
	
			var _self=this;

			var $listaElementos =_self.listaDiagramasSelecccionados;
			var $agrupador =_self.$agrupador;
			var $pagina=_self.$$pagina;




			//deseleccioan el utlim elemto seleccionado
			_self.$$padre.deseleccionarElemento();

			if(_self.estado!=3)
			{

			//$pagina.append($listaElementos);
			//desface es ..
			var x= parseInt($agrupador.css("left"));
				if(isNaN(x))
				{
					x=0;
				}
				
			var y= parseInt($agrupador.css("top"));
				if(isNaN(y))
				{
					y=0;
				}
		

					// COLOCANDO LA NUEVA POSICION PARA NO SENTIR CAMBIOS VISUALES
				for (var index = 0; index < $listaElementos.length; index++) 
				{
					

					var elemento = $listaElementos[index];
					var $obj= $(elemento);
					var o_x= parseInt($obj.css("left"));
					
					$pagina.append($obj);


					if(isNaN(o_x))
						{
							o_x=0;
						}
						
					var o_y= parseInt($obj.css("top"));
						if(isNaN(o_y))
						{
							o_y=0;
						}
						
					o_x+=x;			
					o_y+=y;
					
					$obj.css({"left":o_x+"px" ,
					      "top":o_y+"px"});
				

				}
			}// fin de if de estado ==3
			
			_self.estado=3;

			_self.$$pagina.find(".elementos_seleccionado").removeClass("elementos_seleccionado");
			_self.$$padre.mostrarAlineacionElementosAgrupados(false);

			//$agrupador.hide();

		    _self.$agrupador.css("display","none");
		}///functon --> desagrupar


	};
};