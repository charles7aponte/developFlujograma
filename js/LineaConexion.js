function LineaConexion(){

	return {
		$pagina:null
		//, functExFlujo_deseleccion:function(){}
		//, functExFlujo_lineaConexionSeleccionada:function(tipo_LineaConexion){}// se enlaza con el principal para indicar el elemento o linea seleccionada
		,svgElemento:null
		, $elementoDOM:null

		,banderaSeleccionado:false
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
		dibuja la linea de conexion..
		*/	
		,dibujar:function(){
			
			var _seft= this;
			var $elemento = $("<svg class='linea_' id='uno' style='z-index:4;width:20px; height:20px;position:absolute; overflow: visible;'>");
			_seft.$textoP = $("<p>gato</p>") ;

			 _seft.$elementoDOM = $elemento;
			_seft.$pagina.append($elemento);
			_seft.$pagina.append(_seft.$textoP);

			_seft.svgElemento = Snap($elemento[0]);
	      	_seft.banderaSeleccionado =false;
	      	_seft.lineaRecta1= _seft.svgElemento.line('0%','0%','100%','100%');
	      	_seft.lineaRecta= _seft.svgElemento.line('0%','0%','100%','100%');
      		
            

                _seft.lineaRecta.attr({
                      fill: "#FDFEFA",
                      stroke: "#000",
                      strokeWidth: 3
                });





                _seft.lineaRecta1.attr({
                      fill: "#FDFEFA",
                      stroke: "#7088DE",
                      strokeWidth: 1
                });



            //eventos a la linea
           _seft.eventoClick();

		}// fin de la function->dibujar


		/*
		evento de click dentro de la conexion
		*/
		,eventoClick:function(){



		var _seft=this;

          //_seft.$elementoDOM.on('mouseup',function (e) {
		  //$(document).on('mouseup',function (e) {
         _seft.svgElemento.click(function (e) {

         	if(_seft.$$padre.estado!=2)
         		return true;

		 ///console.log("click sobre la linea")
          		
          		_seft.$$padre.deseleccionaLineaConexion();

          		_seft.$$padre.seleccionaLineaConexion(_seft);

	                _seft.banderaSeleccionado=true;
	                _seft.cambiarColorAnimacion(false);
	                $puntos.show();
	             
	             
	          });





		}// fin funcion->eventoClick


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
                  // valores= { stroke: "#4DD261", strokeWidth:3 };
                }
                else{
                   //valores= { stroke: "#414DD8", strokeWidth:3 };
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




          // ********************
          // actualiza la posicion del  texto elemento 
          , actualizaPosicionTexto: function(){
             	if(_seft.$textoP)
             	{

             		
             	}


          }



      

         


	};
};