function LineaConexion(){

	return {
		$pagina:null
		,tipo:"linea"
		//, functExFlujo_deseleccion:function(){}
		//, functExFlujo_lineaConexionSeleccionada:function(tipo_LineaConexion){}// se enlaza con el principal para indicar el elemento o linea seleccionada
		,svgElemento:null
		, $elementoDOM:null

		,banderaSeleccionado:true
		,lineaRecta1:null
		,lineaRecta:null


		,$textoP:null

		/// padrea
		, $$padre:null


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




		/*	
		//dibuja la linea de conexion..
		*/	
		,dibujar:function(id_nuevo){
			
			
			var _seft= this;


			
			var $elemento = $("<svg class='linea_' data-puntos_punto_moviblefin='' "+
								"data-puntos_movibleinicio='' style='z-index:5;width:20px; height:20px;position:absolute; overflow: visible;' "
								+" data-label='' >");
			_seft.$textoP = $("<div  contenteditable='true' class='descripcion_linea'></div>") ;

			_seft.$pagina.append($elemento);
			_seft.$pagina.append(_seft.$textoP);
			_seft.svgElemento = Snap($elemento[0]);
	      	_seft.banderaSeleccionado =false;
	      	_seft.lineaRecta1= _seft.svgElemento.line('0%','0%','100%','100%');
	      	_seft.lineaRecta= _seft.svgElemento.line('0%','0%','100%','100%');

      		 _seft.$elementoDOM = $elemento;
            

                _seft.lineaRecta.attr({
                      fill: "#FDFEFA",
                      stroke: "#000",
                      strokeWidth: 3
                });



                _seft.lineaRecta1.attr({
                      fill: "#FDFEFA",
                      stroke: "#7088DE",
                      strokeWidth: 5
                });


            //se ingresan elementos 

            if(id_nuevo)
            {
              var partes= (id_nuevo+"").split("id_linea_");
              var id_linea = parseInt(partes[1]);

	              if(id_linea>_seft.$$padre.contadorLineas)
	              {
	              	_seft.$$padre.contadorLineas= id_linea;
	              }

	              _seft.$elementoDOM.attr("id","id_linea_"+id_linea);
            }
            else{

		       _seft.$$padre.contadorLineas++;
		       _seft.$elementoDOM.attr("id","id_linea_"+_seft.$$padre.contadorLineas);
            }  


            //eventos a la linea
           _seft.eventoClick();
           _seft.actualizoPosicionTexto();


		}// fin de la function->dibujar






			// *************
			// retorna sise puede eliminar o no 
			// @return boolean true si se puede , o false si no .
			//
			, sePuedeEliminar:function(){
				
				/*if($(".punto_circle").css("display")=="none")
				{
					return false;
				}*/
				return true;

			}// function -->sePuedeEliminar	





			// ****************************
			// eliminar el elemento
			// **************************
			,eliminarLinea:function(){

				var _seft= this;

				_seft.$elementoDOM.effect( "explode", {},100, function(e){
					

					$(".punto_circle").hide();



					_seft.$$padre.lineaConexionSeleccionada=null;
					_seft.$$padre.$lineaActual=null;

					var posicion = _seft.$$padre.listaLineaConexion.indexOf(_seft);

					if(posicion!=-1)
					{
						_seft.$$padre.listaLineaConexion.splice(posicion,1);
						_seft.$elementoDOM.remove();
						_seft.$textoP.remove();

					}
					else{
						console.error("no existe la linea en listado listaLineaConexion");
					}

				});

			}






		// ************************
		// actulizo la posicion del texto
		//
		,actualizoPosicionTexto: function(){
			var _seft=this;

			var x =_seft.$elementoDOM.css("left");
			var y =_seft.$elementoDOM.css("top");

			x= parseFloat(x) + _seft.$elementoDOM.width()/2;
			


			y= parseFloat(y) + _seft.$elementoDOM.height()/2;
			

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

		   _seft.$elementoDOM.on('mousedown',function (e) {
		   	e.stopPropagation();
		   });



		 _seft.$elementoDOM.on('dblclick',function(e){
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
					console.log("lo detuve "+e.keyCode);
					e.stopPropagation();
				}
			});




		 _seft.$textoP.on('blur',function(e){

		 	_seft.$elementoDOM.data('label', _seft.$textoP.html()); 
		 	_seft.actualizoPosicionTexto();
		 });



         _seft.$elementoDOM.on('click',function (e) {


        
         	switch(_seft.$$padre.estado){

         		case 4:
         		case 10:
         		case 1:
         			_seft.$$padre.cambioEstado(2); 
					_seft.seleccionaLineaObj(); 
				break;

         		case 2:
         			_seft.seleccionaLineaObj();             
	             	e.stopPropagation();
         		break;

         	}
	//return false;
        });



       
         // evento teclado 
        _seft.$elementoDOM.on('keyup',function(){

        	console.info(e);

        });



		}// fin funcion->eventoClick






  
         //****************
         //selecciona la linea
         //
         ,seleccionaLineaObj:function(){

         	var _seft = this;

          		_seft.$$padre.deseleccionaLineaConexion();
          		_seft.$$padre.seleccionaLineaConexion(_seft);

                _seft.banderaSeleccionado=true;
                _seft.cambiarColorAnimacion(false);
                _seft.$$padre.$paginaActual.find(".punto_circle").show();



         }// fin seleccionLinea







		/****************
		** cambia la seleccion del la linea cambiando el resalte
		*/
		,eliminarSeleccionado:function(){

			var _seft= this;

	 	 _seft.banderaSeleccionado=false;
		               _seft.lineaRecta.attr({
		                      fill: "#FDFEFA",
		                      stroke: "#000",
		                      strokeWidth: 3
		                  });

		               _seft.lineaRecta1.attr({
		                      strokeWidth: 1
		                  });

		              $puntos.hide();


		}




          // 
          // @param cambioValores es un boolena que cambia sus valores false o true para dar la senscacion de animacion
          ,cambiarColorAnimacion :function(cambioValores){
          	var _seft= this;

            if(_seft.banderaSeleccionado)
            {

            		
               _seft.lineaRecta1.attr({
                      strokeWidth: 5
                  });

              var valores= { stroke: "#000", strokeWidth:3 };

                if(cambioValores)
                {
                   valores= { stroke: "#4DD261", strokeWidth:3 };
                }
                else{
                   valores= { stroke: "#414DD8", strokeWidth:3 };
                }

                  	_seft.lineaRecta.animate(valores, 600, function(){
                    _seft.cambiarColorAnimacion(!cambioValores);
                });

            }
            else{
              _seft.lineaRecta.attr({
                      fill: "#FDFEFA",
                      stroke: "#000",
                      strokeWidth: 3
                  });

              _seft.lineaRecta1.attr({
                      strokeWidth: 1
                  });


            }
          }// fin function ->cambiarColorAnimacion






      

         


	};
};