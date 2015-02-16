function LineaPartes(){
	return {
		$pagina:null
		,tipo:"linea_partes"
		/// padre
		, $$padre:null

		,$p1:null
		,$p2:null
		,$p3:null
		,tipoMoviento:0// incioo 0 , 1 movientos vertical , 2 moviento 	horizontal
		,$textoP:null
		,mi_snap:null
		,linea1:null
		,linea2:null
		,linea3:null
		,linea4:null
		,seleccionado:true


		,$elemento:null
		, dibujar:function(id_nuevo){

			var _seft= this;
			var $elemento = $("<svg class='linea_partes' data-puntos_movible1='' "+
								"data-puntos_movible2=''  data-puntos_movible3='' "
								+" style='z-index:5;width:20px; height:20px;position:absolute; overflow: visible;' "
								+" data-label='' >");

			_seft.$elemento = $elemento;

			_seft.$textoP = $("<div  contenteditable='true' class='descripcion_linea'></div>") ;


			//carga los elementos 
			_seft.$p1= _seft.$pagina.find(".linea_partes_punto_movible1");
			_seft.$p2= _seft.$pagina.find(".linea_partes_punto_movible2");
			_seft.$p3= _seft.$pagina.find(".linea_partes_punto_movible3");

			_seft.$pagina.append(_seft.$elemento);
			_seft.$pagina.append(_seft.$textoP);



			//añnade las nuevas lineas  

			_seft.mi_snap= Snap($elemento[0]);
			_seft.linea1 = _seft.mi_snap.line(0,0,0,10);
			_seft.linea1.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });

			_seft.linea2 = _seft.mi_snap.line(0,10,10,10);
			_seft.linea2.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });
			_seft.linea3 = _seft.mi_snap.line(10,10,20,10);
			_seft.linea3.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });

			_seft.linea4 = _seft.mi_snap.line(20,10,20,20);
			_seft.linea4.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });

			_seft.tipoMoviento=0;





            if(id_nuevo)
            {
              var partes= (id_nuevo+"").split("id_linea_pares");
              var id_linea = parseInt(partes[1]);

	              if(id_linea>_seft.$$padre.contadorLineasPartes)
	              {
	              	_seft.$$padre.contadorLineasPartes= id_linea;
	              }

	              _seft.$elemento.attr("id","id_linea_pares"+id_linea);
            }
            else{

		       _seft.$$padre.contadorLineasPartes++;
		       _seft.$elemento.attr("id","id_linea_pares"+_seft.$$padre.contadorLineasPartes);
		       _seft.$textoP.hide();
            }  



            _seft.eventoClick()
		}// fin function dibujar



		,borrar:function(){
			if(_seft.$textoP)
			{
				_seft.$textoP.remove();	
			}

			 if(_seft.$elementoDOM )
			 {
			 	_seft.$elementoDOM.remove();

			 }
			
		}



			// ****************************
			// eliminar el elemento
			// **************************
			,eliminarLinea:function(){

				var _seft= this;

				_seft.$elemento.effect( "explode", {},100, function(e){
					

					$(".linea_partes_punto_movible1,.linea_partes_punto_movible2,.linea_partes_punto_movible3").hide();



					_seft.$$padre.objLineaPartes=null;
					
					/*var posicion = _seft.$$padre.listaLineaConexion.indexOf(_seft);

					if(posicion!=-1)
					{
						_seft.$$padre.listaLineaConexion.splice(posicion,1);
						_seft.$elemento.remove();
						_seft.$textoP.remove();

					}
					else{
						console.error("no existe la linea en listado listaLineaConexion");
					}
					*/

				});

			}




			// ************************
		// actulizo la posicion del texto
		//
		,actualizoPosicionTexto: function(){
			var _seft=this;



			var x =_seft.$p2.css("left");
			var y =_seft.$p2.css("top");

			x= parseFloat(x) + 20;
			


			y= parseFloat(y) + 20;
			

			_seft.$textoP.css({'left':x, 
								'top':y});


			var letrasLabel= _seft.$textoP.html()+"";

			if(letrasLabel.length>0)
			{
				_seft.$textoP.show();				
			}
			else{
				_seft.$textoP.hide();
			}
		}






			/*
		evento de click dentro de la conexion
		*/
		,eventoClick:function(){


		var _seft=this;

		   _seft.$elemento.on('mousedown',function (e) {



		   	_seft.activarIndicacionSelecccionada(true);
		   	e.stopPropagation();
		   });



		 _seft.$elemento.on('dblclick',function(e){
		 	console.log("dblclick");
		 	_seft.actualizoPosicionTexto();
		 	_seft.$textoP.show();
		 	_seft.$textoP.focus();
			
		 	e.stopPropagation();
		 	return false;
		 });


		 // la etiqueta
		 _seft.$textoP.mousedown(function(e){
		 	e.stopPropagation();
	
		 });

		 _seft.$textoP.keyup(function(e){
		    if(e.keyCode == 46)
				{
				
					e.stopPropagation();
				}
			});



		 //
		 _seft.$textoP.on('blur',function(e){

		 	_seft.$elemento.data('label', _seft.$textoP.html()); 
		 	_seft.actualizoPosicionTexto();
		 });



		
		 //
         _seft.$elemento.on('click',function (e) {
      		
         	_seft.cargarPosicionesPuntosData();

      		if(_seft.$$padre.objLineaPartes)
      		{
      		_seft.$$padre.objLineaPartes.activarIndicacionSelecccionada(false);
      		_seft.$$padre.objLineaPartes =null;
      		}	


         	switch(_seft.$$padre.estado){

        

         		case 10:
         			//_seft.activarIndicacionSelecccionada(true);             
	             	_seft.activarIndicacionSelecccionada(true); 
	             	e.stopPropagation();
         		break;

         		 default:
         			_seft.$$padre.cambioEstado(10); 
					_seft.activarIndicacionSelecccionada(true); 
				break;

         	}


         	_seft.$$padre.objLineaPartes=_seft;

	//return false;
        });



       
         // evento teclado 
        _seft.$elemento.on('keyup',function(){

        	console.info(e);

        });



		}// fin funcion->eventoClick







		/// ************** 
		//  cads p1 es de la forma {x,y}
		,actualizarPosicionXY:function(p1, p2,p3,p4,p5)
		{	
			var _seft=this;

			_seft.linea1.attr({x1:p1.x ,y1:p1.y,  x2:p2.x ,y2:p2.y });
			_seft.linea2.attr({x1:p2.x ,y1:p2.y,  x2:p3.x ,y2:p3.y });
			_seft.linea3.attr({x1:p3.x ,y1:p3.y,  x2:p4.x ,y2:p4.y });
			_seft.linea4.attr({x1:p4.x ,y1:p4.y,  x2:p5.x ,y2:p5.y });

		}// function --> actualizarPosicionXY



		// centralizacdos 
		,actualizarPoscionCentralizado:function(){

			var _seft=this;
			var  salida=true;

			var desFaseX =parseInt(_seft.$elemento.css("left"));
				desFaseX= isNaN(desFaseX)? 0: desFaseX; 


			var desFaseY =parseInt(_seft.$elemento.css("top"));
				desFaseY= isNaN(desFaseY)? 0: desFaseY;

			var medioY= desFaseY+_seft.$elemento.height()/2;  
			var medioX= desFaseX+_seft.$elemento.width()/2;  
			


			//toma los coordenadas del los puntos p1,p2, y p3 
     		var p1= _seft.conversionTopToy(_seft.$p1, desFaseX,desFaseY);
     		var p2= _seft.conversionTopToy(_seft.$p2, desFaseX,desFaseY);
     		var p3= _seft.conversionTopToy(_seft.$p3, desFaseX,desFaseY);

     		var listaPuntosFinal=[];// debe contenr 5 obj de la forma {x,y}


				//centra el punto2 si es necesario 
			 if(_seft.$elemento.width()<_seft.$elemento.height())
			 {
			 	// se debe centra en los dos sentidos ya q viene de ser creada o cambio de lugar
			 	if(_seft.tipoMoviento==0 ||  _seft.tipoMoviento==2)
			 	{
			 		_seft.$p2.css({
			 			'left':medioX+5
			 			,'top': medioY
			 		});

			 		salida=false;
			 	}

			 	_seft.$p2.css({'left':medioX });

			 	p1= _seft.conversionTopToy(_seft.$p1, desFaseX,desFaseY);
	     		p2= _seft.conversionTopToy(_seft.$p2, desFaseX,desFaseY);
	     		p3= _seft.conversionTopToy(_seft.$p3, desFaseX,desFaseY);
			 	listaPuntosFinal=_seft.elecciondeTipoLinea1(p1,p2,p3);

			 	_seft.tipoMoviento=1;
			 }
			 else {

			 	// se debe centra en los dos sentidos ya q viene de ser creada o cambio de lugar
			 	if(_seft.tipoMoviento==0 ||  _seft.tipoMoviento==1)
			 	{
			 		_seft.$p2.css({
			 			'left':medioX+5
			 			,'top': medioY
			 		});

			 		salida=false;
			 	}

			 	_seft.$p2.css({'top':medioY });
			 	
			 	p1= _seft.conversionTopToy(_seft.$p1, desFaseX,desFaseY);
	     		p2= _seft.conversionTopToy(_seft.$p2, desFaseX,desFaseY);
	     		p3= _seft.conversionTopToy(_seft.$p3, desFaseX,desFaseY);
			 	listaPuntosFinal=_seft.elecciondeTipoLinea2(p1,p2,p3);
			 	_seft.tipoMoviento=2;

			 }


     		_seft.actualizarPosicionXY(listaPuntosFinal[0], listaPuntosFinal[1],listaPuntosFinal[2],listaPuntosFinal[3],listaPuntosFinal[4]);
     		_seft.actualizoPosicionTexto();

     		//guarda las posiciones de las esferas .. 

     		_seft.guardarLosDatosPuntosData();

     		return salida;

		}// functiona -->actualizarPoscionCentralizado




		,guardarLosDatosPuntosData:function(){
			var _seft =this;

			var p1Y= parseInt(_seft.$p1.css("top"));
			var p1X= parseInt(_seft.$p1.css("left"));

			
			var p2Y= parseInt(_seft.$p2.css("top"));
			var p2X= parseInt(_seft.$p2.css("left"));


			var p3Y= parseInt(_seft.$p3.css("top"));
			var p3X= parseInt(_seft.$p3.css("left"));


			_seft.$elemento.attr("data-puntos_movible1",p1X+";"+p1Y);
			_seft.$elemento.attr("data-puntos_movible2",p2X+";"+p2Y);
			_seft.$elemento.attr("data-puntos_movible3",p3X+";"+p3Y);



		}// function  guardarLosDatosPuntosData



		//carga loas posicion .. .
		// guardardas .. {p1:{x,y},p2:{x,y},p3:{x,y} }
		,cargarPosicionesPuntosData:function(){

			var _seft = this;

			var l1= _seft.$elemento.attr("data-puntos_movible1").split(";");
			var l2= _seft.$elemento.attr("data-puntos_movible2").split(";");
			var l3= _seft.$elemento.attr("data-puntos_movible3").split(";");


			_seft.$p1.css({
				top: l1[1]+"px",
				left: l1[0]+"px"
				});


			_seft.$p2.css({
				top: l2[1]+"px",
				left: l2[0]+"px"
				});

			_seft.$p3.css({
				top: l3[1]+"px",
				left: l3[0]+"px"
				});


		}// function cargarPosicionesPuntosData


		//converson de left --> x  y de top -->y
		// @param desX, 
		// @param desY
 		//
		,conversionTopToy:function($elem,desX, desY )
		{
			var punto ={x:0, y:0};

			var x= parseInt($elem.css("left"));
			  x=isNaN(x)? 0:x;
			  x=x-desX+5;

			var y= parseInt($elem.css("top"));
			  y=isNaN(y)? 0:y;
			  y=y-desY+ 5;

			  return {x:x, y:y};

		}// function -->conversionTopToy


		// retorna un {pp1:{x,y},...pp5:{x,y}}
		//con los puntos seleccionados . 
		,elecciondeTipoLinea1:function(p1, p2, p3){
			
			var _seft= this;
			var pp1={x:p1.x ,y:p1.y};
			var pp2={x:p1.x ,y:p2.y};
			var pp3={x:p2.x ,y:p2.y};
			var pp4={x:p3.x ,y:p2.y};
			var pp5={x:p3.x ,y:p3.y};


			 _seft.$p2.draggable({axis:"y" });
			 _seft.$p2.css({'cursor':'n-resize'});
		

			return [pp1, pp2,pp3,pp4, pp5];

		}// function --> elecciondeTipoLinea



		// retorna un {pp1:{x,y},...pp5:{x,y}}
		//con los puntos seleccionados . 
		,elecciondeTipoLinea2:function(p1, p2, p3){
			var _seft= this;

			var pp1={x:p1.x ,y:p1.y};
			var pp2={x:p2.x ,y:p1.y};
			var pp3={x:p2.x ,y:p2.y};
			var pp4={x:p2.x ,y:p3.y};
			var pp5={x:p3.x ,y:p3.y};

			  _seft.$p2.draggable({axis:"x" });
			  _seft.$p2.css({'cursor':'e-resize '});


			return [pp1, pp2,pp3,pp4, pp5];

		}// function --> elecciondeTipoLinea



			// cambia la apariencia indicando que se ha seleccionado
		//	  
		,activarIndicacionSelecccionada:function(activo){
			var _self=this;
			_self.seleccionado=activo;

			if(activo)
			{
				_self.$p1.show();
				_self.$p2.show();
				_self.$p3.show();

				_self.linea1.attr({ stroke: "#425EC8"});
				_self.linea2.attr({ stroke: "#425EC8"});
				_self.linea3.attr({ stroke: "#425EC8"});
				_self.linea4.attr({ stroke: "#425EC8"});
							

			}
			else{
				_self.$p1.hide();
				_self.$p2.hide();
				_self.$p3.hide();

				_self.linea1.attr({ stroke: "#000000"});
				_self.linea2.attr({ stroke: "#000000"});
				_self.linea3.attr({ stroke: "#000000"});
				_self.linea4.attr({ stroke: "#000000"});
			}

		}// function activarIndicacionSelecccionada








	};
};