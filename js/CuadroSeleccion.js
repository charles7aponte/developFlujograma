function CuadroSeleccion (){
	
	return {
		 $$padre:null
		,$pagina:null


		,$elemento:null
		/// dibujoar 
		// 
		//
		,dibujar : function(){
			var _seft= this;
			_seft.$elemento= $("<div class='caudro_lineal' >");

			var $top =   $("<div class='caudro_lineal_top'>");
			var $left =  $("<div class='caudro_lineal_left'>");
			var $right = $("<div class='caudro_lineal_right'>");
			var $bottom =$("<div class='caudro_lineal_bottom'>");
			
			_seft.$elemento.append($top);
			_seft.$elemento.append($left);
			_seft.$elemento.append($right);
			_seft.$elemento.append($bottom);
	

			_seft.$pagina.append(_seft.$elemento);


			//eventos ...
			_seft.elemetoToResize();
			_seft.eventoClick();
			_seft.eventoDraggable();

			console.info(_seft.$$padre);

		}// fin fucnion dibujar




		// ****************
		// evento draggable
		//
		,eventoDraggable: function(){
			 var _seft=this;




			 _seft.$elemento.draggable({
	           	cursor:"default"
	            //,scroll:true
	            ,iframeFix: true
	            ,containment: "parent"
	            ,delay:1
	            ,opacity: 0.6
	            ,"zIndex": 100
	            //,handle:".caudro_lineal_top ,.caudro_lineal_left,.caudro_lineal_right, .caudro_lineal_bottom"
	       		
	       		  ,start:function(event, ui)
			           {

			           if(_seft.$$padre.estado==4)
			           	{
			           		_seft.$$padre.ban_escCuadro=-1;
			           	//console.info("start")
			           	}
			           	
			           }
						,stop:function(event, ui)
			           {
			           	_seft.$$padre.ban_escCuadro=0;
			           	//console.info("stop")
			           }

	        });


		}// eventoDraggable	






		////*****************
		// colocar la poisicon 
		,posicionXY:function(left,top)
		{
			var _seft=this;

			_seft.$elemento.css({
				top:top,
				left:left
			});

		}// fin fucnion posicionXY





		// ***********************
		// deseleccionar
		//
		,deselecciona:function(){
			var _seft=this;


			if(_seft.$elemento )
			{

		     _seft.$elemento.resizable( "option", { disabled: true } );
	         _seft.$elemento.removeClass( "elemento_seleccionado" );
	         _seft.$elemento.removeClass('ui-state-disabled');
	     	 
			}
	     	 _seft.$$padre.cuadroSeleccionado=null;



		}//fin funcion -> deselecciona






		// ********************
		// selecciona elemento 
		//
		,selecciona:function(){

			var _seft=this;
			 _seft.$elemento.resizable( "option", { disabled: false } );
	         _seft.$elemento.addClass( "elemento_seleccionado" );
	         
	         _seft.$$padre.cuadroSeleccionado=_seft;


		}// fin funcion seleccion
		

		// ***************
		// EVENTO CLICK
		//
		,eventoClick:function(){
			var _seft=this;

			_seft.$elemento.on('click',function(e){

				if(_seft.$$padre.estado==4)
				{
					_seft.$$padre.deseleccionCuadroSeleccion();
					_seft.selecciona();
					
				}

			});



			//evita edicon 




		}// fin funcion ->eventoClick


		////*****************
		// dimensicona el elemento 
		,anchoAlto:function(ancho,alto)
		{
			var _seft=this;

			_seft.$elemento.width(ancho);
			_seft.$elemento.height(alto);

		}// fin fucnion anchoAlto



		,elemetoToResize: function($diagramaNuevo){ 		

			  	var _seft= this;
			  		_seft.$elemento.resizable({
			        // autoHide: true 
			          handles: " ne, se, sw, nw, all" 
			          ,resize:function(event, ui)
			           {
			           	
			           	
			           }
			           ,start:function(event, ui)
			           {
			           	if(_seft.$$padre.estado==4)
			           		_seft.$$padre.ban_escCuadro=-1;
			           	else
			           		return false;
			           	//console.info("start")
			           }
						,stop:function(event, ui)
			           {
			           	_seft.$$padre.ban_escCuadro=0;
			           	//console.info("stop")
			           }
			        });


			  	_seft.$elemento.find(".ui-resizable-handle").attr("style","z-index:90");

			  	/*

		        _self.$elemento.resizable( "option", { disabled: true } );
		        _self.$elemento.css({overflow:'visible'});
		        _self.$elemento.addClass('padre_elemento');
		        _self.$elemento.removeClass('ui-state-disabled');

				*/
		        //creacion del bton de edicion detallada
		       
		     }//fin de funcion --_>resize



		     	 		// elimina el elemenot 
	 		// returna true o false si se puede eliminar si o no 
	 		,sePuedeDelte:function(){



	 			var _self =this;
	 			if(_self.$$padre.estado==4 )
	 			{
	 				return true;
	 			}

	 			return false;

	 			
	 		}//fin de funcion se puedeDelel





	 		// *************
	 		// elmina el elemento
	 		//
	 		, eliminarElemento:function(){
	 			var _self=this;


	 			_self.$elemento.effect( "explode", {}, 600, function(e){

	 			
	 				_self.$elemento.remove();
					var posicion =_self.$$padre.listaCuadroSeleccion.indexOf(_self);
					if(posicion!=-1)
					{

						_self.$$padre.listaCuadroSeleccion.splice(posicion,1);
						_self.$$padre.cuadroSeleccionado=null;

					}
					else{
						console.error("la posicion en lista ");
					}

	 			

	 			} );
	 		}//fin funcin eleminar

	}
}