function Flujo (idDOM){
		
	 return {
	 		numeroPagina: 0  // se basa en el arrray
	 		,$paginaActual : $("#contenedor_principal_pag_1")
	 		,listaPaginas:[ $("#contenedor_principal_pag_1")]
	 		,estado:1/// qu se seleccion punte, lineas de conexion
	 		,$text :null

	 		,$lineaActual:null // linea hecha
	 		,listaLineaConexion:[]
	 		,listaElementos:[]

	 		,ban_escribir:0// bandera maneja las conexiones en orde

	 		,$elementoSeleccionado:null // elmento selecccionado actualmente
	 		,elementoN5:null // elmeenot de conexion entre paginas .. este se carga
			,elementoN6:null // elmeenot de conexion entre paginas .. este se carga
			,elementoN7:null // elmeenot de conexion entre paginas .. este se carga
			,elementoN8:null // elmeenot de conexion entre paginas .. este se carga
			,lineaConexionSeleccionada:null // linea de conexion seleecciona
	 		/// **************************
	 		// FUNCIONES ............
	 		// ************************** 

	 		,inicializarEventosPrincipales:function(){
	 			this.dibujarSVGMenuIz();// dibuja los elementos svg del menu izq
  				this.convertiMenuIzDragg();
	 			

	 		}// fin --> inicializarEventosPrincipales







	 		// ****************
	 		// funcion -> dibuja los elementos de svg ..
	 		,dibujarSVGMenuIz:function(){
	 			
	 			var _self= this;
	 			// conector 1 en la misma pagina
			      var sEleConector1= Snap("#ele_menu_izq_conector1");
			      var sEleConector1_c= sEleConector1.circle(33,33,30);
			      sEleConector1_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });


			      // terminador  - ele_menu_izq_conector2
			      var sEleConector2= Snap("#ele_menu_izq_conector2");
			      var sEleConector2_c= sEleConector2.rect(2,12,60,40,20,20);
			      sEleConector2_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });



			      // proceso (actividad)  - ele_menu_izq_conector3
			      var sEleConector3= Snap("#ele_menu_izq_conector3");
			      var sEleConector3_c= sEleConector3.rect(2,2,60,60);
			      sEleConector3_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });


			      // llama del proceso   - ele_menu_izq_conector4
			      var sEleConector4= Snap("#ele_menu_izq_conector4");
			      var sEleConector4_c= sEleConector4.rect(2,5,60,50);
			      sEleConector4_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });
			      var sEleConector4_c1= sEleConector4.rect(2,5,10,50);
			      sEleConector4_c1.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });
			      var sEleConector4_c2= sEleConector4.rect(52,5,10,50);
			      sEleConector4_c2.attr({
			         fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 2
			      });



			      // // llama del proceso   - ele_menu_izq_conector4
			      var sEleConector5=   Snap("#ele_menu_izq_conector5")
			       Snap.load("img/n5.svg", function(f){
			       	
			       	_self.elementoN5= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});			        
			        sEleConector5.append(f);
			      });


			   
			      // decison    - ele_menu_izq_conector 6 
			      var sEleConector6=   Snap("#ele_menu_izq_conector6")
			       Snap.load("img/n6.svg", function(f){
				       	_self.elementoN6= f;
				        var g= f.select("g");
				        g.attr({fill: "#bada55"});			        
				        sEleConector6.append(f);
			      });
			   


			      // documento    - ele_menu_izq_conector 7 
			      var sEleConector7=   Snap("#ele_menu_izq_conector7");
			      Snap.load("img/documente.svg", function(f){

			      	_self.elementoN7= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});
			        sEleConector7.append(f);
			      });
			  


			      // documento    - ele_menu_izq_conector 7 
			      var sEleConector8=   Snap("#ele_menu_izq_conector8");
			      Snap.load("img/muldocumento.svg", function(f){

			      	_self.elementoN8= f;
			        var g= f.select("g");
			       // g.attr({fill: "#bada55"});
			        sEleConector8.append(f);
			      });
			  
	 		}// funcion -> dibuja los elementos de svg ..



	 		// ****************************
	 		// 
	 		// ingresa la opcion del elemento n1 ..nn
		    ,generarSVG:  function (seleccion,elemento){
		      
		          var _self=this;
		          var listasSVG=[];

		         var ss= Snap(elemento);
		         var op1={
		              fill: "#FDFEFA",
		              stroke: "#000",
		              strokeWidth: 2
		            };
		        var op2={
		              fill: "#FDFEFA",
		              stroke: "#000",
		              strokeWidth: 2
		            };
		        
		        var op3={
		              fill: "#FDFEFA",
		              stroke: "#000",
		              strokeWidth: 2
		            };    
		         var sc1=null;




		         switch(seleccion){
		            case "n1":
		            sc1= ss.circle('50%','50%','49%').attr(op1);
		           	listasSVG.push(sc1);
		            break;
		            
		            case "n2":
		            sc1= ss.rect('1%','15%','99%','72%','30%','30%').attr(op1);
		            listasSVG.push(sc1);
		            break;
		            
		            case "n3":
		            sc1= ss.rect('1%','1%','99%','99%').attr(op1);
		            listasSVG.push(sc1);
		            break;
		            
		            case "n4":
		            sc1= ss.rect('1%','5%','99%','75%').attr(op1);
		           	listasSVG.push(sc1);
		            sc1= ss.rect('1%','5%','15%','75%').attr(op1);
		            listasSVG.push(sc1);
		            sc1= ss.rect('85%','5%','15%','75%').attr(op1);
		            listasSVG.push(sc1);
		            break;
		           
		           
		            case "n5":
		           // sc1= ss.polygon(['1%','1%', '99%','1%', '99%' ,'51%', '51%','99%','1%','51%','1%','1%']).attr(op1);
		            	if( _self.elementoN5)
		            	{
		            		var n5Axiliar = _self.elementoN5.paper.clone();
			            	listasSVG.push(n5Axiliar);
			            	ss.append(n5Axiliar);		
		            	}

		            break;
		            
		            case "n6":
			            if( _self.elementoN6)
			            	{
			            		var n6Axiliar = _self.elementoN6.paper.clone();
			            		listasSVG.push(n6Axiliar);
				            	ss.append(n6Axiliar);		
			            	}
		            break;
		            
		            case "n7":
		                 if( _self.elementoN7)
			            	{
			            		var n7Axiliar = _self.elementoN7.paper.clone();
			            		listasSVG.push(n7Axiliar);
				            	ss.append(n7Axiliar);		
			            	}
		            break;
		          
		          
		            case "n8":
		               if( _self.elementoN8)
			            	{
			            		var n8Axiliar = _self.elementoN8.paper.clone();
			            		listasSVG.push(n8Axiliar);
				            	ss.append(n8Axiliar);		
			            	}
		            break;

		         }

		         return listasSVG;

		      }// fin funcion --> generar SVG






		      // *********************
		      // convertira dragg el menu izq
		      //
		      ,convertiMenuIzDragg:function(){
		      	_self=this;

				// manejo para drag and drop 
				 $( ".elemente_menu_izq" ).draggable(
				    {cursor:"move"
				    //, cursorAt: { left:25,top:25 }
				    ,delay:1
				    /*,"helper": function(){
				      var $self=$(this);
				      var representacion= $self.data("elemento"))[0];
				      return representacion;
				    }*/
				    , revert:function(event, ui){
				      console.log(event);

				      if(event)
				        return false;

				      return true;
				    }
				    ,helper: "clone" 
				    ,opacity: 0.8
				    ,"zIndex": 100
				    ,scroll: false
				    ,drag:function( event, ui ){

				     // console.info(ui);
				    }
				  });

		      }// function -->convertiMenuIzDragg



		      /**************************
			  ****
			  *
			  *  el elemento drop 
			  *  el elemento es ingresado a una pagina o arrastrado a la
			  *  pagina
			  **/
			 ,dropElementoEvent: function  (elemento, event, ui){
			 		var _self=this;// la pseuda clase
			 		var $selft=$(elemento);
			        var miposition = ui.position;
			        var mioffset = ui.offset;

			       var tipoElemento =ui.draggable.data("elemento")+"";

			       var $nuevoElemento = $("<div ' data-mielemento='"+tipoElemento+"' "+
			       	+" data-descripcion='' data-registro=''  data-observacion=''  "
			         +" data-personal='' data-resumen=''  data-ver_personal='S' "
			       //	+" data-colortexto='#000' data-background='transparent'   data-font-size='12'  "
			      // 	+" data-text-align='left'  data-svg-fondo='#ffffff' "
			       	+"  style='overflow:visible;cursor:pointer'>");

			       var $textResumen  = $("<div onfocus='return false' contentEditable='true' class='descripcion_observada'></div>" );
			       var $textPersonaje  = $("<div class='descripcion_personaje'></div>" );
			       var $nuevoSVG =  $("<svg width='100%' height='100%' style='width:100%;height:100%; overflow:visible'>");  
			      

			      console.log("este es valor ::: "+tipoElemento);

			       var $punto1=$("<div class='puntos_conexion punto1' data-punto='punto1'>");
			       var $punto2=$("<div class='puntos_conexion punto2' data-punto='punto2'>");
			       var $punto3=$("<div class='puntos_conexion punto3' data-punto='punto3'>");
			       var $punto4=$("<div class='puntos_conexion punto4' data-punto='punto4'>");
			       
			       $nuevoElemento.append($nuevoSVG);
   			       $nuevoElemento.append($textResumen);
   			        $nuevoElemento.append($textPersonaje);


			        
			        $selft.append($nuevoElemento);
			        $nuevoElemento.append($punto1);
			        $nuevoElemento.append($punto2);
			        $nuevoElemento.append($punto3);
			        $nuevoElemento.append($punto4);


			        //$nuevoElemento.data("idpagina",manejadorPaginas.$paginaActual.attr("id"));
			        var listasSVG = _self.generarSVG(tipoElemento,$nuevoSVG[0]);/// -->seleccionar elementos para la funcion 




			       



			        //	console.log(event.pageY-($nuevoElemento.height()/2)-$selft.offset().top)
			        //propiedades al elemento nuevo
			        $nuevoElemento.css({
			              position:'absolute'
			            ,top: event.pageY-($nuevoElemento.height()/2)-$selft.offset().top+5
			            ,left: event.pageX-($nuevoElemento.width()/2)-$selft.offset().left
			            ,zIndex:10
			        });


			        
			        



			        var $$diagramaF1 = DiagramaF1();
			        $$diagramaF1.$$padre= _self;


			        // convierte el nuevo elemento de diagrama en draggable
			        
			        $$diagramaF1.elementoToDraggable($nuevoElemento);

			        
			        $$diagramaF1.listasSVG =listasSVG;
			        $$diagramaF1.$text = $textResumen  ;

			        $$diagramaF1.elemetoToResize($nuevoElemento);

			        $$diagramaF1.ext_getLineaActual = _self.getLineaAcutal;

			        $$diagramaF1.$pagina=_self.$paginaActual;
			        $$diagramaF1.enlazarPuntoCruz(
			        							$punto1,
												$punto2,
												$punto3,
												$punto4);
			        $$diagramaF1.setDiagrama($nuevoElemento);




			        //evento al dar click y sin soltar
			        _self.elementoToMousedown($nuevoElemento);

			        _self.listaElementos.push($$diagramaF1);

				       // listaElementos.push($nuevoElemento[0]);

			  }// fin - function dropElementoEvent



			  , getLineaAcutal:function(){

			  	var _self=this;

			  	console.log("sellamo ")
			  	console.log(_self.$lineaActual)
			  	return _self.$lineaActual;

			  }


			  // *********************
			  // convierte el nuevo elemento de diagrama de flujo on el eventos cuando den click sobre el 
			  //
			  ,elementoToMousedown  :function($diagramaNuevo){
			  		
			  		var _self= this;

			  		
			  		//evento para seleccionar el eleemnto y activar la edicion del elemento seleccionado
			        $diagramaNuevo.mousedown(function(e){
			        
				          $nuevoElemento_seleccionado =$(this);// nuevo elemento seleccionado


				          if(_self.$elementoSeleccionado)
				          {
				          //deseleccciona el elemento 
				          _self.$elementoSeleccionado.resizable( "option", { disabled: true } );
				          _self.$elementoSeleccionado.removeClass( "elemento_seleccionado" );
				          _self.$elementoSeleccionado.removeClass('ui-state-disabled');
				          //_self.$elementoSeleccionado=null;                   


				          }

				          //muestra la caja de herramientas
				          _self.$elementoSeleccionado= $nuevoElemento_seleccionado;
				          
				          _self.$elementoSeleccionado.resizable( "option", { disabled: false } );
				          _self.$elementoSeleccionado.addClass( "elemento_seleccionado" );

				          /*$herramientaBotones.css({
				          	 top: _self.$elementoSeleccionado.position().top
				          	,left: _self.$elementoSeleccionado.position().left
				          })
				          $herramientaBotones.show();

				          	try{

				             actualizarColorTexto(manejoFlujo.$elementoSeleccionado.data("colortexto"));
							 actualizarColorFondo(manejoFlujo.$elementoSeleccionado.data("background"))
							 actualizarAlinecionEnPanel();
							 actualizarColorFOndoSVG(manejoFlujo.$elementoSeleccionado.data("svg-fondo"))
				          	}
				          	catch(e){}
				          	*/

				        // e.stopPropagation();
			        });
			      


			      // el doble click 
			       $diagramaNuevo.dblclick(function(e){
			       

			       	switch(_self.estado)
			       	{

			       		case 1:
			       			$diagramaNuevo.find(".descripcion_observada").focus();
			       		break;


			       		case 2:
			       			_self.cambioEstado(1);
			       			$diagramaNuevo.find(".descripcion_observada").focus();
			       		break;
			       	}	
			       
			       	
			       

			       	//_self.mostrarDialogoEdicion();

			       });// fom del evento doble click


			       // perdica de foco en el resumen
			       	$diagramaNuevo.find(".descripcion_observada").blur(function(e){
			       		$diagramaNuevo.data("resumen",$diagramaNuevo.find(".descripcion_observada").html() );
			       });// fom del evento doble click


			  }// fin -->elementoToMousedown()


			  // *********************
			  // cerrra diaglo de edicion
			  //
			  ,
			  cerrarDialogEdicion:function(){

			  	if($( "#dialog_diagrama" ).css("display")!="none")
				  	{
				  		$( "#dialog_diagrama" ).dialog('close');
				  		
				  	}	

			  }



			  // *************************
			  // llama e diagolog de eidcion 
			  // 
			  ,mostrarDialogoEdicion:function(){

					$( "#dialog_diagrama" ).show();

				       		var descripcion = _self.$elementoSeleccionado.data("descripcion");	
				       		var registro = _self.$elementoSeleccionado.data("registro");
				       		var observacion = _self.$elementoSeleccionado.data("observacion");
				       		var personal = _self.$elementoSeleccionado.data("personal");


				       		$("#dialogo_descripcion").val(descripcion);
							$("#dialogo_registro").val(registro);
							$("#dialogo_observacion").val(observacion);
							$("#dialogo_personal").val(personal);

							// manejo de dialog para guardad los datos
				       		$( "#dialog_diagrama" ).dialog(
								{ 

									width: 250
									, position: { my: "left top", at: "left bottom" }	
									,buttons: [ 
										{ text: "Aceptar",
										click: function()
											{ 

												descripcion =$("#dialogo_descripcion").val();
												registro = $("#dialogo_registro").val();
												observacion = $("#dialogo_observacion").val();
												personal = $("#dialogo_personal").val();


										       	_self.$elementoSeleccionado.data("descripcion", descripcion);	
									       		_self.$elementoSeleccionado.data("registro", registro);
									       		_self.$elementoSeleccionado.data("observacion", observacion);
									       		_self.$elementoSeleccionado.data("personal", personal);

									       		if(_self.$elementoSeleccionado.data("mielemento")=="n3")
									       		{
									       			_self.$elementoSeleccionado.find(".descripcion_personaje").html(personal);
									       		}

												$( this ).dialog( "close" ); 
											} 
										}
										,
										{ text: "Cancelar",
										click: function()
											{ $( this ).dialog( "close" ); 
											} 
										}			
									] 
								
								,show: {
							        effect: "blind",
							        duration: 500
							      }

							    ,hide: {
							        effect: "clip",
							        duration: 200
							      }
							
							});// fin del creciona popup


			  }// fin funciton--> mostrarDialogoEdicion



			 // **********************
		      //  convertir elemento de paginas a dropp
		      , convertirPaginaToDrop:function(){

		      	var _self= this;

		      	$( ".paginas" ).droppable({
				    accept:".elemente_menu_izq , #punto_moviblefin"
				    //,activeClass: "ui-state-highlight"
				    //,greedy: true
				   // , hoverClass: "drop-hover" 
				    
				    ,tolerance: "fit"
				    ,activate: function( event, ui ){
				      //console.log("ga");
				    }
				    ,deactivate:function ( event, ui ){
				      //console.log(ui);
				    }
				    , drop: function( event, ui ) {
				        var $midragg = $(ui.draggable);
				        //var $elemento = $(ui.draggable.data("elemento"));

				        //console.error(event);
				        console.log("dropp");
				        //console.info(ui);
				         var tipoElementoDragg =ui.draggable.data("mitipo")+"";

				         if(tipoElementoDragg=="diagrama")
				         {

				        	_self.dropElementoEvent(_self.$paginaActual[0],event, ui);
				         }
				    }
				  });

		      }// fin function -->convertirPaginaToDrop






		      /*************************

				eventos de mouse dentro de la pagina actual
		      */
		      ,eventosMousePaginaActual:function(){
		      
		      	this.creacionLineasMouse(this.$paginaActual);

		      }



		      ,creacionLineasMouse:function($elementos){

		      	var _self= this;
				var posicionesInicio={top:null, left:null};		      			

		      	$(".punto_circle").hide(); /// de prueba


				_self.$paginaActual.on('click',function(e){
					
					console.log(" click en pagina");
					});



		      	//_self.$paginaActual.mouseup(function(e){
				$elementos.on('mousedown',function(e){

				
					if(_self.estado!=2)
						{
							_self.ban_escribir=0;
							return true;
						}

							var $elementoEvent= $(e.target);

							//ban_escribir=0;
							if(_self.ban_escribir!=0)
								{
					      		   	
					      		   	return true;
					      		   }



							if(!$elementoEvent.hasClass("punto_circle"))
							{
								_self.deseleccionaLineaConexion();
								
								console.log("mousedown -->")

								_self.ban_escribir=1;
								var x = e.clientX - _self.$paginaActual.offset().left-7;
					        	var y = e.clientY - _self.$paginaActual.offset().top-5;

						        	posicionesInicio={
						        		left:x,
						        		top:y
						        	}
								 		
							 		_self.$paginaActual.find(".punto_movibleinicio").css(
					      				posicionesInicio
					      				);	
					 				_self.$paginaActual.find(".punto_movibleinicio").show();



									_self.deseleccionaLineaConexion();


					 				var lineaSVG = LineaConexion();
							
										lineaSVG.$$padre = _self;

							      		lineaSVG.$pagina = _self.$paginaActual;

							      		lineaSVG.dibujar();
										

										_self.$lineaActual = lineaSVG.$elementoDOM;
										_self.lineaConexionSeleccionada=lineaSVG;

										_self.$lineaActual.hide();

										_self.seleccionaLineaConexion(lineaSVG);

										
										_self.listaLineaConexion.push(lineaSVG);
			
						 		//	console.info("_mousedown");

						 		setTimeout(function()
						 			{

							
										
						      	
						 			_self.ban_escribir=2;
						      	

						      		var x = e.clientX - _self.$paginaActual.offset().left-7;
						        	var y = e.clientY - _self.$paginaActual.offset().top-5;
							
						        	_self.$paginaActual.find(".punto_movibleinicio").show();
						 			_self.$paginaActual.find(".punto_moviblefin").show();

						 			_self.$paginaActual.find(".punto_movibleinicio").css(
					      				posicionesInicio
					      				);	
						 			
						 			_self.$paginaActual.find(".punto_moviblefin").css({
						      				top: y,
								      		left: x
								      		});	

						 			

						 				var coords = {
									        clientX: e.clientX,
									        clientY: e.clientY
									    };

									 _self.$paginaActual.find(".punto_moviblefin").simulate("mousedown", e);
									
									// _self.$paginaActual.find(".punto_moviblefin").simulate("mousedown", coords);
            						
						 			_self.actualizacionBolasLinea(_self,_self.$lineaActual,e, null);
						 			
						 			_self.$lineaActual.show();
						 			_self.$lineaActual.click();//actuliza la animacion


						 			}
						 				
						 			,100);


								//e.stopPropagation();
								//false;
								
							}
							/*else{
								//deselecciona el elemento

							}*/

							//e.stopPropagation();

		      	});



				//evento de mover
				$elementos.mousemove(function(e){

 					
						//e.stopPropagation();

				});



				// evento de manejo soltar	
		      	$elementos.on('mouseup',function(e){

		      		console.log("mouse up -->"+_self.ban_escribir);
		      		   if(_self.estado!=2)
		      		   {
		      		   	_self.ban_escribir=0;
		      		   	return true;
		      		   }
						
		      		
		      		 	if(_self.ban_escribir==1)
		      		 	{
		      		 		_self.ban_escribir=2;
		      		 	}
		      		 	// segunda vez que se suelta la segunda esfera
		      		 	else if(_self.ban_escribir==2)
		      		 	{
		      		 		console.log("mouse up 2");

		      		 		// se evalua si es muy pequeño 
		      		 		if(_self.$lineaActual && _self.$lineaActual.width()<=12
		      		 			&& _self.$lineaActual.height()<=12)
		      		 		{
		      		 			$(".punto_circle").hide();
		      		 			_self.$lineaActual.hide();
		      		 			_self.lineaConexionSeleccionada.eliminarLinea();
		      		 			
		      		 			console.log("se elimio la linea..");
		      		 		}
		      		 		_self.ban_escribir=0;
		      		 	}
		      		 	else{
		      		 		_self.ban_escribir=0;
		      		 	}
		      		 	//console.log("un elemento . up.");
		      			//console.log(e);
		      			
		      	});


		      }//FIN  de la funcion ..




		      /*****************
		      *
		       function publica. para actualizar la linea de conexion seleccionada
		      ** prepara la parte grafica . .. 
		      @param tipo_lineaConexion {LineaConexion} la linea de conexion seleeccionada 
		      */
		      ,seleccionaLineaConexion:function(tipo_lineaConexion)
		      {
		      	var _self = this;
		      		_self.lineaConexionSeleccionada=tipo_lineaConexion;
		      		if(tipo_lineaConexion)
		      		{
		      			_self.$lineaActual = tipo_lineaConexion.$elementoDOM;
		      			_self.seleccionLineaActulaDOM(tipo_lineaConexion.$elementoDOM);
		      		}


		      }// fin  fucion -->seleccionaLineaConexion


		      //seleccioan Query de la linea actual
		      ,seleccionLineaActulaDOM:function($lineaA){
		      	var _self= this;
		      	
		      		_self.$lineaActual = $lineaA;
					
					console.log("modificaicon ->seleccionaLineaConexion")
					console.log(_self.$lineaActual)
						
	
						var arrayPuntoFin = _self.$lineaActual.attr("data-puntos_punto_moviblefin");
						var arrayPuntoInicio = _self.$lineaActual.attr("data-puntos_movibleinicio");

 
					
						if(arrayPuntoFin!=null && 
 							arrayPuntoInicio!=null)
						{


							arrayPuntoFin = arrayPuntoFin.split(";");
							arrayPuntoInicio = arrayPuntoInicio.split(";");


							_self.$paginaActual.find(".punto_moviblefin").css({
			      				top: arrayPuntoFin[1]+"px" ,
			      				left: arrayPuntoFin[0]+"px"} );

							_self.$paginaActual.find(".punto_movibleinicio").css({
		      				top: arrayPuntoInicio[1]+"px",
		      				left: arrayPuntoInicio[0]+"px"
		      				});

						}


		      }// fin de la funcion -> seleccion$lineaActula


		      /****************
		      * funciton externa .. deselecciona la linea de conexion actaul
		      */
		      ,deseleccionaLineaConexion:function(){
		      		if(_self.lineaConexionSeleccionada)
		      		{

		      			_self.lineaConexionSeleccionada
		      				.eliminarSeleccionado();


		      		}

		      }



		      // *****************************
		      // dar click por fuera del la pagina
		      ,eventosFueraPagina: function(){
		      	var _self= this;


		     // *************
		      	//evento eleminar 
		      	//
		      $(document).keyup(function(e){



				    if(e.keyCode == 46)
				    {


				    	// por estados 

				    	switch(_self.estado)
				    	{
				    		//ediction de elementos
				    		case 1:
				    			var diagramaF1 = _self.getDiagramaF1();
						    	if(diagramaF1!=null
						    		&& diagramaF1.sePuedeDelte())
							    	{

						    		$('#myModal_eliminacion').foundation('reveal', 'open',{
						    			close_on_background_click: false


						    		});

							    	}	
				    		break;



				    		// edicion de lineas de conexion
				    		case 2:
				    			if(_self.lineaConexionSeleccionada &&
				    				_self.lineaConexionSeleccionada.sePuedeEliminar())
				    				{
				    					_self.lineaConexionSeleccionada.eliminarLinea();
				    				}	
				    		break;

				    	}
				    	

				    }
				}) ;

		  }// fin de la function->eventosFueraPagina





		      // ************************
		      // cre todos los eventos de click en botons de modalse
		      //
		      ,eventosDeBtonModal:function(){

		      	var _self =this;
		      	// btones el modal elmina un diagrama
		      	$("#myModal_eliminacion_modbutton0").on('click',function(e){


		      		switch(_self.estado)
		      		{

		      			// edicion de diagramas 
		      			case 1:
				      		var diagramaF1 = _self.getDiagramaF1();
				      		if(diagramaF1!=null)
				      		{
				      			_self.cerrarDialogEdicion();
								diagramaF1.eliminarElemento();
								$('#myModal_eliminacion').foundation('reveal', 'close');
				      		}
		      			break;


		      			// edicon de lineas
		      			case 2:

		      				if(_self.lineaConexionSeleccionada )
		      				{
		      					_self.lineaConexionSeleccionada.eliminarLinea();

		      				}
		      			break;
		      		}


		      	});


		      	$("#myModal_eliminacion_button1").on('click',function(e){

						$('#myModal_eliminacion').foundation('reveal', 'close');
		      	});

		      	$("#dialogo_descripcion, #dialogo_registro ,#dialogo_observacion, #dialogo_personal")
		      		.keyup(function(e){
		      			e.stopPropagation();
		      		});



		      	
		      	// btones de elminancion de pagina
		      	$("#myModal_eliminacion_pagina_button0").on('click',function(e){
		      			if(_self.listaPaginas.length>1)
							{

								_self.listaPaginas.splice(_self.numeroPagina,1);

								if(_self.numeroPagina>= _self.listaPaginas.length)
								{
									_self.numeroPagina--;
								}

								_self.$paginaActual = _self.listaPaginas[_self.numeroPagina];
								_self.actualizaHtmlPagina();
								}
							else{

								alert("Debe existir almenos una página!!");
							}

					$('#myModal_eliminacion_pagina').foundation('reveal', 'close');		
		      	});	


		      	$("#myModal_eliminacion_pagina_button1").on('click',function(e){
		      		$('#myModal_eliminacion_pagina').foundation('reveal', 'close');
		      	});		


		      	/*********************************
				*  evento para dar salida 
				*  al dar click por fuera
				*******************************
				$(document).mousedown(function(event) {
					//console.info(_self.$elementoSeleccionado);
					if(_self.$elementoSeleccionado)	
					{

						_self.$elementoSeleccionado.resizable( "option", { disabled: true } );
						_self.$elementoSeleccionado.removeClass( "elemento_seleccionado" );
						_self.$elementoSeleccionado.removeClass('ui-state-disabled');
						
						_self.$elementoSeleccionado=null;

						//oculta la caja de herramientas
						//$("#herramientas_grupo_botones").hide(200);
						//$("#panel_tipo_color").spectrum("hide");
						
					}

					

				});*/
		      } // fin --> eventosFueraPagina()




		      /// *******************
		      // al dar click sobre la hoja
		      ,clickOnPagina:function(){
		      	var _self= this;

		      	_self.$paginaActual.click(function(e){
		      		// seleccion de conectores
		      		$mipagina= $(this);
		      		if(_self.estado==1)
		      		{
		      			var $svgConector=  $("<svg>");


		      		}
		      	});


		      }// function --> clickOnPagina()



		      // *******************
		      // dar movientos a los puntos movibles
		      ,eventosPuntoMoble:function(){
		      	var _self= this;

		      

		      	var $puntos = $(".punto_moviblefin ,.punto_movibleinicio");
  		      //	var ancho=_self.$lineaActual.width();
	           // var alto= _self.$lineaActual.height();



		      	$puntos.draggable({
			            cursor:"move"
			           // ,revert:"invalid"
			            //,scroll:true
			           // ,iframeFix: true
			            ,containment: "parent"
			            ,delay:1
			            ,opacity: 0.6
			            //,"zIndex": 100
			            ,drag:function( event, ui ){
			            		if(_self.$lineaActual==null)
		      						return;
			            	 _self.actualizacionBolasLinea(_self,_self.$lineaActual,event, ui);
			            }
			            ,stop:function( event, ui ){
			            		if(_self.$lineaActual==null)
		      						return;


			            	_self.actualizacionBolasLinea(_self,_self.$lineaActual,event, ui);
			            }
			            //,revert:""
			            ,scroll: false  
			          });
			              
		      }// fin funcion movientos movibles




		      // **************************
		      // funcion --> actualizacionBolasLinea() 
		      // 
		     , actualizacionBolasLinea:function(_self,$lineaActual,event, ui ){


	             var xFin = parseInt( _self.$paginaActual.find(".punto_moviblefin").css("left"))+5;
	             var xInicio = parseInt( _self.$paginaActual.find(".punto_movibleinicio").css("left"))+5;	
	             var mileft=0; 
	             var miAncho=0;
	             var escalaX=1;
	             
	             var yFin = parseInt( _self.$paginaActual.find(".punto_moviblefin").css("top"))+5;
	             var yInicio = parseInt( _self.$paginaActual.find(".punto_movibleinicio").css("top"))+5;	
	             var mitop=0; 
	             var miAlto=0;
	             
	             var escalaY=1; 

	             /// guarda las posiciones de esferas de conexion
	             _self.$lineaActual.attr("data-puntos_punto_moviblefin",""+(xFin-5)+";"+(yFin-5)); 
	             _self.$lineaActual.attr("data-puntos_movibleinicio",""+(xInicio-5)+";"+(yInicio-5)); 

	              //manejo en el X
	              if(xFin>xInicio)
	              {
		              	mileft=xInicio;
		              	miAncho =xFin- xInicio;
		              	escalaX=1;
	              }
	              else {

		              	mileft=xFin;
		              	miAncho = xInicio-xFin;
		              	escalaX=-1;
	              }



	              // manejo en el Y
	              if(yFin>yInicio)
	              {
	              	mitop = yInicio;
	              	miAlto = yFin - yInicio;
	              	escalaY=1;
	              }
	              else {

	              	mitop=yFin;
	              	miAlto = yInicio-yFin;
	              	escalaY=-1;
	              }


	              var mitransform='matrix('+escalaX+', 0, 0, '+escalaY+', 0, 0)';
		           //  console.log(" "+mileft +"-> " +miAncho);
		           if(miAncho<2)
		           		miAncho=2;

		           if(miAlto<2)
		           		miAlto =2;
		           	

	              $lineaActual.css(
	              			{left: mileft, 
	              			 width: miAncho,
	              			 transform: mitransform , 
	              			 top:mitop ,
	              			 height:miAlto});

	              if(_self.lineaConexionSeleccionada)
	              {
	              	_self.lineaConexionSeleccionada.actualizoPosicionTexto();
	              }

		     }// fin --> actualizacionBolasLinea()



		     //********************
		     // crear una nueva pagina 
		     // *******************
		     ,crearPaginaNueva:function(){
		     	var _self=this;
		     	var html ="  <div  class='paginas' >    "
				        +"       <div class='punto_moviblefin punto_circle' >  "
				        +"         <img src='./img/conexion_p.gif'  class='imagen_punto_mobil'>   "
				        +"       </div>  "
				               
				        +"        <div class='punto_movibleinicio punto_circle' >  "
				        +"          <img src='./img/conexion_p.gif'  class='imagen_punto_mobil'>   "
				        +"        </div>  "
				        +"   </div>";

				 $pagina = $(html);

				 _self.$paginaActual = $pagina;

				 _self.listaPaginas.push(_self.$paginaActual);
				 $("#contenedor_principal_pag").append(_self.$paginaActual);

				 _self.eventosAllPaginaActual();
				 _self.numeroPagina++;

				
				 _self.actualizaHtmlPagina();


		     }// fin funcion -> crearPaginaNueva


		     // ************************
		     // ******* eventos all pagina ...
		     // 
		     ,eventosAllPaginaActual:function(){
		     	this.eventosPuntoMoble();	
		     	this.convertirPaginaToDrop();
				this.eventosMousePaginaActual();
				this.eventosPuntoMoble();
		     }// fin funcion -->eventosAllPaginaActual


		     // **********************
		     // ******* actualiza la parte visual de las paginas
		     // 
		     ,actualizaHtmlPagina:function(){
		     	var _self=this;
		     	var html="";


		     	 for(var i=0; i< _self.listaPaginas.length; i++)
				 {
				 	_self.listaPaginas[i].hide();

				 	if(i!= _self.numeroPagina)
				 	{
				 		html+="  <li><a href='#' onclick='manejoFlujo.cambiaPagina("+i+")' >"+(i+1)+"</a></li> ";
				 	}
				 	else{

				 		html+="<li class='current'><a href='#' onclick='manejoFlujo.cambiaPagina("+i+")'>"+(i+1)+"</a></li>";
				 	}
				 }


				 console.log(html);
				 $("#el_numero_pagina").html(html);
				 $("#nombre_pagina").html("pag. "+(_self.numeroPagina+1));
				 _self.$paginaActual.show();

		     }// fin funcion -->actualizaHtmlPagina


		     /// *****************
		     // cambia de pagina ***
		     //***************+
		     ,cambiaPagina:function(nPg)
		     {
		     	var _self=this;

		     	_self.numeroPagina = nPg;
		     	_self.$paginaActual = _self.listaPaginas[nPg];

		     	_self.actualizaHtmlPagina();
		     	return false;
		     }// fin funciton -->cambiaPagina



		     // ********************
		     // elimina la pagiana
		     //
		     ,eliminarPaginaActual:function(){
				var _self=this;
		     
		    	$('#myModal_eliminacion_pagina').foundation('reveal', 'open',{close_on_background_click: false});

		     	 		
		     }// fin function -->


		     ,deseleccionarTodosLineas:function(){
		     	var _self= this;

		     	for(var i=0; i< _self.listaLineaConexion.length ; i++)
		     	{
		     		_self.listaLineaConexion[i].eliminarSeleccionado();


		     	}
		     	
		     }/// funcion --s>


		     // ******************
		     // elinnia la conexiones  actual..
		     //
		     ,eliminarLinea:function()
		     {
		     	var _self= this;
		     	if(_self.lineaConexionSeleccionada)
		     	{
		     		for(var i=0; i< _self.listaLineaConexion.length ; i++)
		     		{
		     			if(_self.listaLineaConexion[i]== _self.lineaConexionSeleccionada )
		     			{
		     				_self.lineaConexionSeleccionada.borrar();
		     				_self.listaLineaConexion.splice(i,1);

		     				_self.lineaConexionSeleccionada=null;
		     				_self.$lineaActual=null;

		     			}
		     		}// fin de for

		     	}

		     }// fin function -->eliminarLinea



		     /// *********************
		     //  eliminar elemento diagrama 
		     // ***********
		     ,eliminarDiagramaF1:function(){
		     	var _self=this;

		     	for(var i = 0; i< _self.listaElementos.length ; i++ )
		     	{

		     		if(_self.$elementoSeleccionado && 
		     			_self.$elementoSeleccionado[0] == _self.listaElementos[i].$elemento[0] )
		     		{

		     			_self.listaElementos[i].$elemento.remove();
		     			_self.listaElementos.splice(i,1);
		     			_self.$elementoSeleccionado=null;
		     			$herramientaBotones.hide();
		     		}

		     	}

		     }// function -->eliminarDiagramaF1 


		   // ********************
		   // buscar LIneaAconexion
		   // 
		   ,getDiagramaF1:function()
		   {

		     
		     	var _self=this;

		     	for(var i = 0; i< _self.listaElementos.length ; i++ )
		     	{

		     		if(_self.$elementoSeleccionado && 
		     			_self.$elementoSeleccionado[0] == _self.listaElementos[i].$elemento[0] )
		     		{
		     			return  _self.listaElementos[i];
		     		}

		     	}

		     	return null;
		     

		   } // fin de la funcion --->



		  // *************************
		  // llama e diagolog de eidcion 
		  // 
		  ,mostrarDialogoLinea:function(){

					$( "#dialog_configuracion_linea" ).show();

				       	
							// manejo de dialog para guardad los datos
				       		$( "#dialog_configuracion_linea" ).dialog(
								{ buttons: [ 
										{ text: "Aceptar",
										click: function()
											{ 

											
												$( this ).dialog( "close" ); 
											} 
										}
										,
										{ text: "Cancelar",
										click: function()
											{ $( this ).dialog( "close" ); 
											} 
										}			
									] 
								
								,show: {
							        effect: "blind",
							        duration: 500
							      }

							    ,hide: {
							        effect: "clip",
							        duration: 200
							      }
							
							});// fin del creciona popup


			  }// fin funciton--> mostrarDialogoEdicion

 	


 		/// function maneja el cambio de estado
 		//
 		,cambioEstado:function(estado){
 			var _self= this;

 			_self.estado= estado;


 			switch(estado)
 			{

 				case 1:
 					$("#bton_estado1").addClass("miActivo");
					$("#bton_estado2").removeClass("miActivo");
					$(".punto_circle").hide();
					$("body").attr("data-estado","1");
					_self.enbledDragDiagrama(true);

 				break;


 				case 2:

 					_self.cerrarDialogEdicion();
 					  $("#bton_estado2").addClass("miActivo");
					  $("#bton_estado1").removeClass("miActivo");
					  $("body").attr("data-estado","2");
					  _self.enbledDragDiagrama(false);

 				break;
 			}



 		}//fin de la funcion 




	    ///*****************
          // habliakta o desabilida el dragg de los diagramas 
          ,enbledDragDiagrama: function(bool){
          	var _self= this;
          	for(var i=0; i< _self.listaElementos.length ; i++)
          	{
          		if(bool)
          		{
          			_self.listaElementos[i].$elemento.draggable('enable');
          		}
          		else{
          			_self.listaElementos[i].$elemento.draggable('disable');
          		}

				          //deseleccciona el elemento 
		          _self.listaElementos[i].$elemento.resizable( "option", { disabled: true } );
		          _self.listaElementos[i].$elemento.removeClass( "elemento_seleccionado" );
		          _self.listaElementos[i].$elemento.removeClass('ui-state-disabled');
          	
          	}


          	// ELEMENTO SELECCIONADO
          	if(_self.$elementoSeleccionado!=null && _self.$elementoSeleccionado)
          	{


				_self.$elementoSeleccionado.resizable( "option", { disabled: false } );
				_self.$elementoSeleccionado.addClass( "elemento_seleccionado" );
          	}

          }// fin el funcion ->enbledDragDiagrama






          /******************************
          **** habilitar el modo de solo lectura
          **** 
          *****************************/
          ,modoOnlyRead:function(){

	          	var _self=this;
	          	// elmina cion de botones
	          	$("#botones_panel_superior").hide();
	          	//$("#bton_toogle_menu_iz").hide();
	          	$(".left-small").hide();

	            $("body").attr("data-estado","3");
	            _self.estado=3;

	            estadoMenuAbierto=true;
	            miToogleMenuIzquierdo(null);

	            _self.deseleccionaLineaConexion();


	            //desactiva la edicion en div
	            $(".descripcion_observada").attr("contenteditable",false);
	            $(".descripcion_linea").attr("contenteditable",false);



            	//generar los elementos 
	            for (var i = 0; i<_self.listaElementos.length; i++) {
	            	

	            	if(_self.listaElementos[i] !=null && _self.listaElementos[i].alertaMensaje==null)
		            	{
							var diagramaF1 =  _self.listaElementos[i]
							var mensajeDetalle = MensajeDetalle();
			          		diagramaF1.alertaMensaje= mensajeDetalle;
			          		//mensajeDetalle.$$padre=$(document);
			          		mensajeDetalle.$diagrama= diagramaF1.$elemento;
			          		mensajeDetalle.$diagrama.addClass("diagrama_modoread");

			          		mensajeDetalle.dibujar();
			          		mensajeDetalle.eventosEnlace();
			          		mensajeDetalle.actualizarContenidos();

		            	}


	            }

          }// fin funcion--> modoOnlyRead




          /******************
          ** verfic
          **/
          ,verficaciondeMensajeDetalle:function(){

          	var _self=this;
          	var diagramaF1= _self.getDiagramaF1();

          	if(diagramaF1)
          	{

          		var mensajeDetalle = MensajeDetalle();
          		diagramaF1.alertaMensaje= mensajeDetalle;
          		//mensajeDetalle.$$padre=$(document);
          		mensajeDetalle.$diagrama= diagramaF1.$elemento;
          		mensajeDetalle.$diagrama.addClass("diagrama_modoread");

          		mensajeDetalle.dibujar();
          		mensajeDetalle.eventosEnlace();
          		mensajeDetalle.actualizarContenidos();

          	}

          }// function -->verficaciondeMensajeDetalle

	 };

};

