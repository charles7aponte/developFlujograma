function Flujo (idDOM){
		
	 return {

	 		idPagina: idDOM
	 		,$paginaActual : $("#contenedor_principal_pag_1")
	 		,listaPaginas:[]
	 		,estado:1/// qu se seleccion punte, lineas de conexion
	 		,$lineaActual:null // linea hecha
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
	 			this.eventosPuntoMoble();

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
		           
		            break;
		            
		            case "n2":
		            sc1= ss.rect('1%','15%','99%','72%','30%','30%').attr(op1);
		            break;
		            
		            case "n3":
		            sc1= ss.rect('1%','1%','99%','99%').attr(op1);
		            break;
		            
		            case "n4":
		            sc1= ss.rect('1%','5%','99%','75%').attr(op1);
		            sc1= ss.rect('1%','5%','15%','75%').attr(op1);
		            sc1= ss.rect('85%','5%','15%','75%').attr(op1);
		            break;
		           
		           
		            case "n5":
		           // sc1= ss.polygon(['1%','1%', '99%','1%', '99%' ,'51%', '51%','99%','1%','51%','1%','1%']).attr(op1);
		            	if( _self.elementoN5)
		            	{
		            		var n5Axiliar = _self.elementoN5.paper.clone();
			            	ss.append(n5Axiliar);		
		            	}

		            break;
		            
		            case "n6":
			            if( _self.elementoN6)
			            	{
			            		var n6Axiliar = _self.elementoN6.paper.clone();
				            	ss.append(n6Axiliar);		
			            	}
		            break;
		            
		            case "n7":
		                 if( _self.elementoN7)
			            	{
			            		var n7Axiliar = _self.elementoN7.paper.clone();
				            	ss.append(n7Axiliar);		
			            	}
		            break;
		          
		          
		            case "n8":
		               if( _self.elementoN8)
			            	{
			            		var n8Axiliar = _self.elementoN8.paper.clone();
				            	ss.append(n8Axiliar);		
			            	}
		            break;

		         }

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

			       var $nuevoElemento = $("<div width='60px' data-mielemento='"+tipoElemento+"' height='60px' style='width:60px;height:60px; overflow:visible'>");
			       var $nuevoSVG =  $("<svg width='100%' height='100%' style='width:100%;height:100%; overflow:visible'>");  
			      
			      console.log("este es valor ::: "+tipoElemento);

			       var $punto1=$("<div class='puntos_conexion punto1' data-punto='punto1'>");
			       var $punto2=$("<div class='puntos_conexion punto2' data-punto='punto2'>");
			       var $punto3=$("<div class='puntos_conexion punto3' data-punto='punto3'>");
			       var $punto4=$("<div class='puntos_conexion punto4' data-punto='punto4'>");
			       
			       $nuevoElemento.append($nuevoSVG);



			        
			        $selft.append($nuevoElemento);
			        $nuevoElemento.append($punto1);
			        $nuevoElemento.append($punto2);
			        $nuevoElemento.append($punto3);
			        $nuevoElemento.append($punto4);


			        //$nuevoElemento.data("idpagina",manejadorPaginas.$paginaActual.attr("id"));
			        _self.generarSVG(tipoElemento,$nuevoSVG[0]);/// -->seleccionar elementos para la funcion 



			        /******************************
			        ****convierto el nuevo elemento resize
			        ********************/ 
			        $nuevoElemento.resizable({
			        // autoHide: true 
			          handles: "rotate, e, s, w, ne, se, sw, nw, all" 
			        });




			        //	console.log(event.pageY-($nuevoElemento.height()/2)-$selft.offset().top)
			        //propiedades al elemento nuevo
			        $nuevoElemento.css({
			              position:'absolute'
			            ,top: event.pageY-($nuevoElemento.height()/2)-$selft.offset().top+5
			            ,left: event.pageX-($nuevoElemento.width()/2)-$selft.offset().left
			            ,zIndex:10
			        });


			        //datos al nuevo elemento , datos que se necesitan 
			        //$nuevoElemento.data("pagina",manejadorPaginas.$paginaActual.attr("id"));


			        

			        $nuevoElemento.resizable( "option", { disabled: true } );
			        $nuevoElemento.css({overflow:'visible'});
			        $nuevoElemento.addClass('padre_elemento');
			        $nuevoElemento.removeClass('ui-state-disabled');



			        var $$diagramaF1 = DiagramaF1();

			        // convierte el nuevo elemento de diagrama en draggable
			        $$diagramaF1.elementoToDraggable($nuevoElemento);
			        $$diagramaF1.$$padre= _self;


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
				          _self.$elementoSeleccionado=null;                   

				          }

				          //muestra la caja de herramientas
				          _self.$elementoSeleccionado= $nuevoElemento_seleccionado;
				          /*
				          $("#herramientas_grupo_botones").show(200);
				          $("#herramientas_grupo_botones").css({
				            top: $nuevoElemento.offset().top- 60
				            ,left:parseFloat($nuevoElemento.css("left")) + parseFloat(manejadorPaginas.$paginaActual.css("margin-left")) //$nuevoElemento.offset().left 
				          });

				      
				          if(banderaPanelLetra)
				          {
				              $("#panel_editar_letras").hide();
				              banderaPanelLetra=false;
				          }

				          $("#subgrupo_botones_boton_capa").hide();

				          actualizaPanelHerramientaEdicionLetras();

				          */
				        



				          
				          _self.$elementoSeleccionado.resizable( "option", { disabled: false } );
				          _self.$elementoSeleccionado.addClass( "elemento_seleccionado" );

				          
				         e.stopPropagation();
			        });
			      

			  }// fin -->elementoToMousedown()






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


		      	var ban_escribir=0;
		      	var _self= this;
				var posicionesInicio={top:null, left:null};		      			

		      	$(".punto_circle").hide(); /// de prueba

		      	//_self.$paginaActual.mouseup(function(e){
				_self.$paginaActual.on('mousedown',function(e){

							var $elementoEvent= $(e.target);

							ban_escribir=0;
							
							if(!$elementoEvent.hasClass("punto_circle"))
							{
								_self.deseleccionaLineaConexion();
								ban_escribir=1;
								var x = e.clientX - _self.$paginaActual.offset().left;
					        	var y = e.clientY - _self.$paginaActual.offset().top;

					        	posicionesInicio={
					        		left:x,
					        		top:y
					        	}
							 			
					 			


								
								
							}
							else{
								//deselecciona el elemento

							}

		      	});



				//evento de mover
				_self.$paginaActual.mousemove(function(e){

 					//console.log("move");
 					
		      		
						if(e && e.target )
						{
							var $elementoEvent= $(e.target);

							if(!$elementoEvent.hasClass("punto_circle"))
							{

							
					      		if(ban_escribir>0)
					      		{	ban_escribir++;
					      		}
								
								if(ban_escribir>10)
								{
								//console.log("move inserta");
		

									//creacion de lineas de conexion NOTA:: debe ser mas parametrica
									//console.info($(e.target).attr("id"));
									var lineaSVG = LineaConexion();

									lineaSVG.$$padre = _self;

						      		lineaSVG.$pagina = _self.$paginaActual;
						      		lineaSVG.dibujar();
						      		_self.$lineaActual = lineaSVG.$elementoDOM;
						      		console.log("crecion lineaConexion")
						      		console.log(_self.$lineaActual)

						      		//conexiones externas 
						      		//lineaSVG.functExFlujo_deseleccion = _self.deseleccionaLineaConexion;
						      		//lineaSVG.functExFlujo_lineaConexionSeleccionada	= _self.seleccionaLineaConexion;
						      		_self.lineaConexionSeleccionada=lineaSVG;


						      		var x = e.clientX - _self.$paginaActual.offset().left;
						        	var y = e.clientY - _self.$paginaActual.offset().top;
							
						        	_self.$paginaActual.find(".punto_movibleinicio").show();
						 			_self.$paginaActual.find(".punto_moviblefin").show();

						 			_self.$paginaActual.find(".punto_movibleinicio").css(
					      				posicionesInicio
					      				);	
						 			
						 			_self.$paginaActual.find(".punto_moviblefin").css({
						      				top: y,
								      		left: x
								      		});		
						 			//_self.$paginaActual.find(".punto_moviblefin").mousedown();
						 			//_self.$paginaActual.find(".punto_moviblefin").click();

						 			_self.actualizacionBolasLinea(_self,_self.$lineaActual,e, null);
						 			
									//punto_movibleinicio
 
						      		ban_escribir=0;

								}

							}// fin  if - has class	
							else{
								ban_escribir=0;
							}
							
						}// fin -- e


				});



				// evento de manejo soltar	
		      	_self.$paginaActual.on('mouseup',function(e){
		      		
		      		 	ban_escribir=0;
		      		 
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
						
	
						var arrayPuntoFin = _self.$lineaActual.data("puntos_punto_moviblefin");
						var arrayPuntoInicio = _self.$lineaActual.data("puntos_movibleinicio");
						

					
						if(arrayPuntoFin!=null && 
 							arrayPuntoInicio!=null)
						{

							arrayPuntoFin = arrayPuntoFin.split(";");
							arrayPuntoInicio = arrayPuntoInicio.split(";");

							console.info(arrayPuntoInicio);
							console.info(arrayPuntoFin);

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
		      	_self= this;


		      	/*********************************
				*  evento para dar salida 
				*  al dar click por fuera
				********************************/
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

					/* Act on the event */
				});
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
	             _self.$lineaActual.data("puntos_punto_moviblefin",""+(xFin-5)+";"+(yFin-5)); 
	             _self.$lineaActual.data("puntos_movibleinicio",""+(xInicio-5)+";"+(yInicio-5)); 

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

		     }// fin --> actualizacionBolasLinea()


	 }

};