function LineaConexion{

	return {
		$pagina:null
		,svgElemento:null

		,banderaSeleccionado:false
		,lineaRecta1:null
		,lineaRecta:null
		/*	
		dibuja la linea de conexion..
		*/	
		,dibujar:function(){
			
			var _seft= this;
			var $elemento = $("<svg style='width:20px; height:20px;'>")
			_seft.$pagina.append($elemento);

			_seft.svgElemento = Snap($elemento[0]);
	      	_seft.banderaSeleccionado =false;
	      	_seft.lineaRecta1= mis.line('0%','0%','100%','100%');
	      	_seft.lineaRecta= mis.line('0%','0%','100%','100%');
      
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



		}// fin de la function->dibujar


		/*
		evento de click dentro de la conexion
		*/
		,eventoClick:function(){

		var _seft=this;

          _seft.svgElemento.click(function (e) {
           
	              if(Snap(e.target).id !=mis.id)
	              {
	              
	                console.log("si funciono ");
	                _seft.banderaSeleccionado=true;
	                _seft.cambiarColorAnimacion(false);
	                $puntos.show();
	              return true;
	              }
	              
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
	              return false;
	          });
		}// fin funcion->eventoClick


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




	};
};