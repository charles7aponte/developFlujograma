function DiagramaF1 (){

	return{

			$pagina:null
			,$c1:null
			,$c2:null
			,$c3:null
			,$c4:null

			,estadoFocus:0// indica si esta en edicion de texto interno	0 para no tiene el foco y 1 para si
	 	

			,$elemento:null // elmeen JQuery
			,listasSVG:[]

			//lineas conexion
			,linea1:{$linea : null , $punto:null}
			,linea2:{$linea : null , $punto:null}
			,linea3:{$linea : null , $punto:null}
			,linea4:{$linea : null , $punto:null}



			//eventos externo ... 
			,ext_getLineaActual:function(){ return null;} // se obtiene la linea actual
			,$$padre:null // objeto padre o contendor



			,enlazarPuntoCruz:function(c1,c2,c3,c4){
				var _self=this;
				_self.$c1=c1;
				_self.$c2=c2;
				_self.$c3=c3;
				_self.$c4=c4;
			

				_self.eventoDeCruz(_self.$c1);
				_self.eventoDeCruz(_self.$c2);
				_self.eventoDeCruz(_self.$c3);
				_self.eventoDeCruz(_self.$c4);
			}













			,eventoDeCruz:function($punto1){
				
				var _self = this;
				
				if(!$punto1)
					return true;


				_self.$$padre.creacionLineasMouse($punto1,"punto")

				$punto1.on('mousedown',function(e){
					
					console.log("mousedown de punto");

								var $punto = _self.$pagina.find(".punto_movibleinicio");
								
								var tipoPuntoCirculo = $punto1.data("punto");
								//var lineaActual =_self.ext_getLineaActual();
								var lineaActual =_self.$$padre.$lineaActual;


								switch(tipoPuntoCirculo){
									case "punto1": 
										_self.linea1.$linea= lineaActual;
										_self.linea1.$punto= $punto;
										console.log(1)
									
									break;

									case "punto2": 
										_self.linea2.$linea= lineaActual;
										_self.linea2.$punto= $punto;
										console.log(2)
									break;

									case "punto3": 
										_self.linea3.$linea= lineaActual;
										_self.linea3.$punto= $punto;
										console.log(3)
									break;

									case "punto4": 
										_self.linea4.$linea= lineaActual;
										_self.linea4.$punto= $punto;



										console.log(4)
									break;
								}



							$punto1.removeClass("puntos_conexion_resaltados");
							console.log("drop1.. satisfaccion");
					
						e.stopPropagation();

				});












				//dar propiedades de over
					$punto1.droppable({
						drop:function(event, ui) {
							if(ui.draggable && ui.draggable.length>0)
							{
								
								var $punto = _self.$pagina.find(ui.draggable[0])
								$punto.find("img").hide();
								

								var tipoPuntoCirculo = $punto1.data("punto");
								//var lineaActual =_self.ext_getLineaActual();
								var lineaActual =_self.$$padre.$lineaActual;

								switch(tipoPuntoCirculo){
									case "punto1": 
										_self.linea1.$linea= lineaActual;
										_self.linea1.$punto= $punto;
										console.log(1)
									
									break;

									case "punto2": 
										_self.linea2.$linea= lineaActual;
										_self.linea2.$punto= $punto;
										console.log(2)
									break;

									case "punto3": 
										_self.linea3.$linea= lineaActual;
										_self.linea3.$punto= $punto;
										console.log(3)
									break;

									case "punto4": 
										_self.linea4.$linea= lineaActual;
										_self.linea4.$punto= $punto;
										console.log(4)
									break;
								}



								console.log("se inserto-...");
							}

							$punto1.removeClass("puntos_conexion_resaltados");
							console.log("drop1.. satisfaccion");
						},
						out:function(event, ui) {

							var $elementos = [
							  _self.$c1, 
						      _self.$c2,
						      _self.$c3,
						      _self.$c4];


							if(ui.draggable && ui.draggable.length>0)
							{
							
								var $punto = _self.$pagina.find(ui.draggable[0]);
								$punto.find("img").hide();
								

								var tipoPuntoCirculo = $punto1.data("punto");
								//var lineaActual =_self.ext_getLineaActual();
								var lineaActual =_self.$$padre.$lineaActual;
								

								switch(tipoPuntoCirculo){
									case "punto1": 
										if(_self.linea1.$linea &&  _self.linea1.$linea[0]== _self.$$padre.$lineaActual[0]
											&&  	_self.linea1.$punto[0]==$punto)
										{
											_self.linea1.$linea=null;
											_self.linea1.$punto=null;

										}
									
									break;

									case "punto2": 
										if(_self.linea2.$linea &&  _self.linea2.$linea[0]== _self.$$padre.$lineaActual[0]
												&&  	_self.linea2.$punto[0]==$punto)
											{
											_self.linea2.$linea= null;
											_self.linea2.$punto= null;
											}
									break;

									case "punto3": 
										if(_self.linea3.$linea && _self.linea3.$linea[0]== _self.$$padre.$lineaActual[0]
												&&  	_self.linea3.$punto[0]==$punto)
											{
											_self.linea3.$linea= null;
											_self.linea3.$punto= null;
											}
									break;

									case "punto4":
										if(_self.linea4.$linea &&  _self.linea4.$linea[0]== _self.$$padre.$lineaActual[0]
												&&  	_self.linea4.$punto[0]==$punto)
											{ 
											_self.linea4.$linea= null;
											_self.linea4.$punto= null;
										}
									break;
								}

							}

							$punto1.removeClass("puntos_conexion_resaltados");
							//console.log(ui);


							//mostra leementos 
							for(var i=0; i<$elementos.length ; i++)
							{
								if($elementos[i])
								{
									$elementos[i].fadeTo(2000,0.3);
								}
							}
						},
						over:function(event, ui)
						{
							var $elementos = [
							  _self.$c1, 
						      _self.$c2,
						      _self.$c3,
						      _self.$c4];
							
							if(ui.draggable && ui.draggable.length>0)
							{
								
								var $punto = _self.$pagina.find(ui.draggable[0]);
								var $padreCruz = $punto1.offsetParent();
								var miTop =$padreCruz[0].offsetTop + $punto1[0].offsetTop;
								var miLeft =$padreCruz[0].offsetLeft + $punto1[0].offsetLeft;

								//console.log("mi left "+$padreCruz[0].offsetLeft +" - " +$punto1[0].offsetLeft)
								$punto.css(
									{	top: miTop -5,
										left: miLeft
								      });
								$punto.find("img").show();
							}

							$punto1.addClass("puntos_conexion_resaltados");
							//console.log("over1");

							//mostra leementos 
							for(var i=0; i<$elementos.length ; i++)
							{
								if($elementos[i])
								{
									$elementos[i].fadeTo(1,1);
								}
							}
						}
					});		         
			        
			}// fin de la funcion





			/***************
			al diagrama lo prepara para  recibir elemento dentro del el , como son las conexiones .
			@parama {$} $diagrama elemento de DOM tipo Jquery, el cual representa El elemento del diagrama
			*/ 
			,setDiagrama:function($diagrama){

				var _self = this;
				var $elementos = [
					  _self.$c1, 
				      _self.$c2,
				      _self.$c3,
				      _self.$c4];

				$diagrama.draggable({
					accept: ".punto_circle"
					,over:function(event, ui)
						{
							if(ui.draggable && ui.draggable.length>0)
							{
								for(var i=0; i<$elementos.length ; i++)
								{
									if($elementos[i])
									{
										$elementos[i].fadeTo(1,1);
									}
								}
							}
						}

				});     

				$diagrama.mouseout(function(e){
						
					for(var i=0; i<$elementos.length ; i++)
					{
						if($elementos[i])
						{
							//console.log($elementos[i].css("opacity"));
							$elementos[i].fadeTo(2000,0.3);
						}
					}

				});	// fin de mouseout

				$diagrama.mouseover(function(e){

					for(var i=0; i<$elementos.length ; i++)
					{
						if($elementos[i])
						{
							$elementos[i].fadeTo(1,1);
						}
					}
				});	// fin de over 				




			$diagrama.mousemove(function(e){

					for(var i=0; i<$elementos.length ; i++)
					{
						if($elementos[i])
						{
							$elementos[i].fadeTo(1,1);
						}
					}
				});	// fin de over 	


				// sobre
				/*for(var ii=0; ii< $elementos.length ; ii++)
				{
					$elementos[ii].mouseover(function(e){

						for(var i=0; i<$elementos.length ; i++)
						{
							if($elementos[i])
							{
								$elementos[i].fadeTo(1,1);
							}
						}
					});	// fin de over 				

				}*/

			}// fin de la funcion -->setDiagrama








			/// *************
	 		// function --> 
	 		,eventosTexto:function($t){
	 			var _self= this;
	 			_self.$text = $t;



	 			_self.$text.on('focus',function(e){

	 				_self.estadoFocus= 1;

	 			});// fi



	 			_self.$text.on('blur',function(e){

	 				_self.estadoFocus= 0;

	 			});// fi

	 		}// fin de la fuciton ->eventosTexto






	 		// elimina el elemenot 
	 		// returna true o false si se puede eliminar si o no 
	 		,sePuedeDelte:function(){

	 			var _self =this;
	 			if(_self.$$padre.estado==1 && _self.estadoFocus ==0 )
	 			{
	 				return true;
	 			}

	 			return false;

	 			
	 		}


	 		// *************
	 		// elmina el elemento
	 		//
	 		, eliminarElemento:function(){
	 			var _self=this;
	 			_self.$elemento.effect( "explode", {}, 600, function(e){

	 			
	 				_self.$elemento.remove();
					var posicion =_self.$$padre.listaElementos.indexOf(_self);
					if(posicion!=-1)
					{

						_self.$$padre.listaElementos.splice(posicion,1);
						_self.$$padre.$elementoSeleccionado=null;

					}
					else{
						console.error("la posicion en lista ");
					}

	 			

	 			} );
	 		}




			/******************************
			        ****convierto el nuevo elemento resize
			        ********************/ 
			 ,elemetoToResize: function($diagramaNuevo){ 		

			  	var _self= this;
			  	_self.$elemento= $diagramaNuevo;

			  		_self.$elemento.resizable({
			        // autoHide: true 
			          handles: "bton_edicion,bton_ver_personal,n, e, s, w, ne, se, sw, nw, all" 
			          ,resize:function(event, ui)
			           {
			           	  _self.actualizaLineaAgrupada(_self.$c1, _self.linea1);
			              _self.actualizaLineaAgrupada(_self.$c2, _self.linea2);
			              _self.actualizaLineaAgrupada(_self.$c3, _self.linea3);
			              _self.actualizaLineaAgrupada(_self.$c4, _self.linea4);
			       
			           	
			           }
			        });


			  	_self.$elemento.find(".ui-resizable-handle").attr("style","z-index:90");



		        _self.$elemento.resizable( "option", { disabled: true } );
		        _self.$elemento.css({overflow:'visible'});
		        _self.$elemento.addClass('padre_elemento');
		        _self.$elemento.removeClass('ui-state-disabled');
		        var $boton = _self.$elemento.find(".ui-resizable-bton_edicion");


		        // maneja el aparecer la ventanan
		        if($boton.length>0)
		        {
		        	$boton.html("<a onclick='return false' class='fi-background-color' title='editar' alt='editar'> </a>");
		        	//abrir el cuadro de dialog
		        	$boton.click(function(){
		        		_self.$$padre.mostrarDialogoEdicion();

		 
		        	});


		        }




			  }		


			  // *****************************
			  // convertir draggable un elemento diagrama de flujo 
			  //
			  ,elementoToDraggable:function($diagramaNuevo){
			  	
			  	var _self= this;

			  	_self.$elemento= $diagramaNuevo;


			  	//convierto el nuevo elemento draggable
			        $diagramaNuevo.draggable({
			            cursor:"move"
			            //,scroll:true
			            ,iframeFix: true
			            ,containment: "parent"
			            ,delay:1
			            ,opacity: 0.6
			            ,"zIndex": 100
			           

			            ,drag:function( event, ui ){


			              _self.actualizaLineaAgrupada(_self.$c1, _self.linea1);
			              _self.actualizaLineaAgrupada(_self.$c2, _self.linea2);
			              _self.actualizaLineaAgrupada(_self.$c3, _self.linea3);
			              _self.actualizaLineaAgrupada(_self.$c4, _self.linea4);
			       
			            }



			            ,stop:function( event, ui ){


			              _self.actualizaLineaAgrupada(_self.$c1, _self.linea1);
			              _self.actualizaLineaAgrupada(_self.$c2, _self.linea2);
			              _self.actualizaLineaAgrupada(_self.$c3, _self.linea3);
			              _self.actualizaLineaAgrupada(_self.$c4, _self.linea4);
			       
			            }
			            
			            //,revert:""
			            ,scroll: false  
			          });


				if(_self.$$padre.estado!=1)
				{
					$diagramaNuevo.draggable('disable');
				}
				
				

			  }// fin --> elementoToDraggable







			  // ************
			  // actualiza la alinea cuando se mueve el elemento se llama la funcion 
			  //
		      // @param $lina {$linea : null , $punto:null}
			  // ***********
			  ,actualizaLineaAgrupada:function ($c, $$linea)
			  {

				var _self=this;
	
			  	if($c!=null &&  $$linea!=null
			  	  && $$linea.$linea!=null 
			  	  &&  $$linea.$punto!=null)
			  	{
  
					var x = $c.offset().left - _self.$$padre.$paginaActual.offset().left;			  		
					var y = $c.offset().top - _self.$$padre.$paginaActual.offset().top;

					//colo los puntos en su ubiccaion y seleecion el objet
					_self.$$padre.seleccionLineaActulaDOM($$linea.$linea);


					var $punto = $$linea.$punto;
					//$punto.show();

					$punto.css({
						top:y +"px",
						left: x +"px"

					});

					//actualiza la linea
					_self.$$padre.actualizacionBolasLinea(_self.$$padre,_self.$$padre.$lineaActual,null, null);


			  	}


			  }// fin de actualizaLineaAgrupada



			   // ******************
          // ***
          //
          ,cambiarColorDeFondo:function(color){

          	var _seft =this;

          	for(var i=0; i< _seft.listasSVG.length ; i++ )
	          	{
	          		_seft.listasSVG[i].attr({
			          fill: color			         
			     	 });


	          	}	

            var svg =_seft.$elemento.find("path");
            if(svg.length>0)
            {
             svg.css({fill: color});
            }

         }
	};
};