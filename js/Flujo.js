function Flujo (idDOM){
		
	 return {
	 		numeroPagina: 0  // se basa en el arrray
	 		,$paginaActual : $("#contenedor_principal_pag_1")
	 		,listaPaginas:[ $("#contenedor_principal_pag_1")]
	 		,estado:1/// qu se seleccion punte, lineas de conexion
	 		,$text :null


	 		,base_elementoFlecha: null /// svg de la flecha de las lineas 
	 		,bandera_actualizacion:false // indica si se esta actualizando .... o no el flujogramma , true para una actualizacion o false para un nuevo flujograma

	 		,listaLineaConexion:[]
	 		,listaElementos:[]
	 		,listaCuadroSeleccion:[]
	 		,cuadroSeleccionado:null
	 		,listaLineasPartes:[]


	 		, objCuadroAgrupacion:null /// el Object de objeto que se encarga de la agrupacion
	 		, objLineaPartes:null /// el Object de objeto que se encarga de la agrupacion


	 		,contadorLineas:0
	 		,contadorLineasPartes:0
	 		,contadorPaginas:0

	 		,nitNodo:null// id del nodo para actualizacion


	 		,ban_escribir:0// bandera maneja las conexiones en orde
	 		,ban_crear_grupo:0// bandera maneja las conexiones en orde
	 		,ban_crear_linea_partes:0// bandera maneja las conexiones en orde
	 		,ban_crear_linea_conexion:0// bandera maneja las conexiones lineales
	 			
	 		
	 		,ban_escCuadro:0 // bandera para creacion de cuadros 

	 		,$elementoSeleccionado:null // elmento selecccionado actualmente
	 		,elementoN1:null // elmeenot de conexion entre paginas .. este se carga
			,elementoN2:null // elmeenot de conexion entre paginas .. este se carga
			,elementoN3:null // elmeenot de conexion entre paginas .. este se carga
			,elementoN4:null // elmeenot de conexion entre paginas .. este se carga
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
  				this.evitaSeleccionarTexto();
	 			

	 		}// fin --> inicializarEventosPrincipales



	 		//*************************
	 		// evita seleecciona el texto o emacarras
	 		,evitaSeleccionarTexto:function(){

	 			document.onselectstart = function()
			     {
			          return false;
			     }
	 		}//fin funciont -->evitaSeleccionarTexto





	 		// ****************
	 		// funcion -> dibuja los elementos de svg ..
	 		,dibujarSVGMenuIz:function(){
	 			
	 			var _self= this;
	 			// conector 1 en la misma pagina
/*			      var sEleConector1= Snap("#ele_menu_izq_conector1");
			      var sEleConector1_c= sEleConector1.circle(33,33,30);
			      sEleConector1_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 1
			      });
*/


				  var sEleConector1=  Snap("#ele_menu_izq_conector1")
			       Snap.load(URL__SERVIDOR+"/img/n1.svg", function(f){
			       	
			       	_self.elementoN1= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});			        
			        sEleConector1.append(f);
			      });




			      // terminador  - ele_menu_izq_conector2
			      /*var sEleConector2= Snap("#ele_menu_izq_conector2");
			      var sEleConector2_c= sEleConector2.rect(2,12,60,40,20,20);
			      sEleConector2_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 1
			      });*/

				  var sEleConector2=   Snap("#ele_menu_izq_conector2")
			       Snap.load(URL__SERVIDOR+"/img/n2.svg", function(f){
			       	
			       	_self.elementoN2= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});			        
			        sEleConector2.append(f);
			      });



			      // // llama del proceso   - ele_menu_izq_conector4
			      var sEleConector3=   Snap("#ele_menu_izq_conector3")
			       Snap.load(URL__SERVIDOR+"/img/n3.svg", function(f){
			       	
			       	_self.elementoN3= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});			        
			        sEleConector3.append(f);
			      });


			      // proceso (actividad)  - ele_menu_izq_conector3
			     /* var sEleConector3= Snap("#ele_menu_izq_conector3");
			      var sEleConector3_c= sEleConector3.rect(2,2,60,60);
			      sEleConector3_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 1
			      });
*/

			      // llama del proceso   - ele_menu_izq_conector4
			      // // llama del proceso   - ele_menu_izq_conector4
			      var sEleConector4=   Snap("#ele_menu_izq_conector4")
			       Snap.load(URL__SERVIDOR+"/img/n4.svg", function(f){
			       	
			       	_self.elementoN4= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});			        
			        sEleConector4.append(f);
			      });

			      
/*

//
			      var sEleConector4= Snap("#ele_menu_izq_conector4");
			      var sEleConector4_c= sEleConector4.rect(2,5,60,50);
			      sEleConector4_c.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 1
			      });
			      var sEleConector4_c1= sEleConector4.rect(2,5,10,50);
			      sEleConector4_c1.attr({
			          fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 1
			      });
			      var sEleConector4_c2= sEleConector4.rect(52,5,10,50);
			      sEleConector4_c2.attr({
			         fill: "#FDFEFA",
			          stroke: "#000",
			          strokeWidth: 1
			      });

*/

			      // // llama del proceso   - ele_menu_izq_conector4
			      var sEleConector5=   Snap("#ele_menu_izq_conector5")
			       Snap.load(URL__SERVIDOR+"/img/n5.svg", function(f){
			       	
			       	_self.elementoN5= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});			        
			        sEleConector5.append(f);
			      });



			         // // llama del proceso   - ele_menu_izq_conector4
			      //var sEleConector5=   Snap("#ele_menu_izq_conector5")
			       Snap.load(URL__SERVIDOR+"/img/flecha.svg", function(f){
			       	
			       	var g= f.select("svg");
			        g.attr(
			        	{fill: "#bada55"
			        	,x:"5px"
			        	,y:"1px"
			        	,width:"20px"
			        	,height:"20px"
			        	});
			       		

			        _self.base_elementoFlecha= g;			        
			        // gato
			        //sEleConector5.append(f);
			        //g.select("g").attr({transform:'r90'})
			       
			      });


			   
			      // decison    - ele_menu_izq_conector 6 
			      var sEleConector6=   Snap("#ele_menu_izq_conector6")
			       Snap.load(URL__SERVIDOR+"/img/n6.svg", function(f){
				       	_self.elementoN6= f;
				        var g= f.select("g");
				        g.attr({fill: "#bada55"});			        
				        sEleConector6.append(f);
			      });
			   

			      // documento    - ele_menu_izq_conector 7 
			      var sEleConector7=   Snap("#ele_menu_izq_conector7");
			      Snap.load(URL__SERVIDOR+"/img/documente.svg", function(f){

			      	_self.elementoN7= f;
			        var g= f.select("g");
			        g.attr({fill: "#bada55"});
			        sEleConector7.append(f);
			      });
			  


			      // documento    - ele_menu_izq_conector 7 
			      var sEleConector8=   Snap("#ele_menu_izq_conector8");
			      Snap.load(URL__SERVIDOR+"/img/muldocumento.svg", function(f){

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
		              fill: "#feffff",
		              stroke: "#000",
		            //  strokeWidth: "1",
		              opacity: 0.8
		            };
		        var op2={
		              fill: "#feffff",
		              stroke: "#000",
		             // strokeWidth: 0.4
		            };
		        
		        var op3={
		              fill: "#feffff",
		              stroke: "#000",
		              //strokeWidth: 0.4
		            };    
		         var sc1=null;




		         switch(seleccion){
		            case "n1":
		            	 if( _self.elementoN1)
			            	{
			            		var n1Axiliar = _self.elementoN1.paper.clone();
				            	listasSVG.push(n1Axiliar);
				            	ss.append(n1Axiliar);		
			            	}
		            break;
		            
		            case "n2":
			           if( _self.elementoN2)
			            	{
			            		var n2Axiliar = _self.elementoN2.paper.clone();
				            	listasSVG.push(n2Axiliar);
				            	ss.append(n2Axiliar);		
			            	}

		            break;
		            
		            case "n3":
		            sc1= ss.rect('1%','1%','99%','99%').attr(op1);
		            listasSVG.push(sc1);
		            break;
		            
		            case "n4":
		           		/*if( _self.elementoN4)
		            	{
		            		var n4Axiliar = _self.elementoN4.paper.clone();
			            	listasSVG.push(n4Axiliar);
			            	ss.append(n4Axiliar);		
		            	}*/

		            	sc1= ss.rect('1%','1%','99%','99.2%').attr(op1);
		            	listasSVG.push(sc1);

		            	sc1= ss.rect('1%','1%','15%','99%').attr(op1);
		            	listasSVG.push(sc1);

		            	sc1= ss.rect('85%','1%','15%','99.2%').attr(op1);
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

			       _self.construccionElemento(event,$selft,tipoElemento);

				    // listaElementos.push($nuevoElemento[0]);

			  }// fin - function dropElementoEvent





			  // *************
			  // construccionElemento :...
			  ,construccionElemento:function(event, $selft,tipoElemento,json)
			  {

			  	var _self=this;

			  	   var $nuevoElemento = $("<div data-mielemento='"+tipoElemento+"' "+
			       	+" data-descripcion='' data-registro=''  data-observacion=''  "
			         +" data-personal='' data-resumen=''  data-ver_personal='S' "
			       //	+" data-colortexto='#000' data-background='transparent'   data-font-size='12'  "
			      // 	+" data-text-align='left'  data-svg-fondo='#ffffff' "
			       	+"  style='overflow:visible;cursor:pointer; position:absolute;z-index:10'>");

			       var $textResumen  = $("<div onfocus='return false' contentEditable='true' class='descripcion_observada'></div>" );
			       var $textPersonaje  = $("<div class='descripcion_personaje'></div>" );
			       var $nuevoSVG =  $("<svg width='100%' height='100%' style='width:100%;height:100%; overflow:visible'>");  
			      


			       var $punto1=$("<div class='puntos_conexion punto1' data-punto='punto1'>");
			       var $punto2=$("<div class='puntos_conexion punto2' data-punto='punto2'>");
			       var $punto3=$("<div class='puntos_conexion punto3' data-punto='punto3'>");
			       var $punto4=$("<div class='puntos_conexion punto4' data-punto='punto4'>");
			       
			       var $montrarMensaje =$("<div class='bton_mensaje_mostrar' style='z-index:90;'><a onclick='return false' class='fi-credit-card' title='datos' alt='datos'> </a></div>");



  			        $nuevoElemento.append($nuevoSVG);
   			        $nuevoElemento.append($textResumen);
   			        $nuevoElemento.append($textPersonaje);
   			        $nuevoElemento.append($montrarMensaje);


			        
   			        if(json)
   			        {
   			        	var pagina=$("#"+json.id_pagina);
   			        	pagina.append($nuevoElemento);
   			        	console.log(json.id_pagina);
   			        }
   			        else{

			        	_self.$paginaActual.append($nuevoElemento);
			        
   			        	
   			        }


			        $nuevoElemento.append($punto1);
			        $nuevoElemento.append($punto2);
			        $nuevoElemento.append($punto3);
			        $nuevoElemento.append($punto4);


			        //$nuevoElemento.data("idpagina",manejadorPaginas.$paginaActual.attr("id"));
			        var listasSVG = _self.generarSVG(tipoElemento,$nuevoSVG[0]);/// -->seleccionar elementos para la funcion 

			        //propiedades al elemento nuevo
			        if($selft)
			        {

	
				        $nuevoElemento.css({
				             'position':'absolute'
				            ,'top': (event.pageY-($nuevoElemento.height()/2)-$selft.offset().top+5)
				            ,'left': (event.pageX-($nuevoElemento.width()/2)-$selft.offset().left)
				            ,'zIndex':10
				        });
			        	
			        }
			        else {
			        	$nuevoElemento.css({
				              'position':'absolute'
				            ,'top':10
				            ,'left':10
				            ,'zIndex':10
				        });
			        }



			        var $$diagramaF1 = DiagramaF1();
			        $$diagramaF1.$$padre= _self;
			        $$diagramaF1.$elementoSVG =$nuevoSVG;





			        if(json)
			        {
				        
			        	
				        $$diagramaF1.$pagina=  $("#"+json.id_pagina);


			        }
			        else{
			        	  $$diagramaF1.$pagina=_self.$paginaActual;
			        }



			        // convierte el nuevo elemento de diagrama en draggable
			        $$diagramaF1.elementoToDraggable($nuevoElemento);

			        
			        $$diagramaF1.listasSVG =listasSVG;
			        $$diagramaF1.$text = $textResumen  ;




			        $$diagramaF1.eventosTexto($textResumen);
			        $$diagramaF1.elemetoToResize($nuevoElemento);

			        $$diagramaF1.ext_getLineaActual = _self.getLineaAcutal;

			        
			        $$diagramaF1.enlazarPuntoCruz(
			        							$punto1,
												$punto2,
												$punto3,
												$punto4);
			        $$diagramaF1.setDiagrama($nuevoElemento);



			        // eleementos de carga con Json
			        if(json)
			        {
			        	$$diagramaF1.$elemento.data('mielemento',json.mielemento);
						$$diagramaF1.$elemento.data('descripcion',json.descripcion);
						$$diagramaF1.$elemento.data('registro',json.registro);
						$$diagramaF1.$elemento.data('observacion',json.observacion);
						$$diagramaF1.$elemento.data('personal',json.personal);
						$$diagramaF1.$elemento.data('resumen',json.resumen);

						$$diagramaF1.$elemento.find(".descripcion_observada").html(json.resumen);
						$$diagramaF1.$elemento.find(".descripcion_personaje").html(json.personal);

						$$diagramaF1.$elemento.data('ver_personal',json.ver_personal);

						$$diagramaF1.$elemento.css({
								top:json.top,
								left:json.left
							});

						$$diagramaF1.$elemento.width(parseInt(json.width));
						$$diagramaF1.$elemento.height(parseInt(json.height));

						$$diagramaF1.linea1= _self.construccionNuevosConexionesPuntos(json.linea1);
						$$diagramaF1.linea2= _self.construccionNuevosConexionesPuntos(json.linea2);
						$$diagramaF1.linea3= _self.construccionNuevosConexionesPuntos(json.linea3);
						$$diagramaF1.linea4= _self.construccionNuevosConexionesPuntos(json.linea4);
					}//

			        


			        //evento al dar click y sin soltar
			        _self.elementoToMousedown($nuevoElemento);

			        _self.listaElementos.push($$diagramaF1);

			        setTimeout(function(){

				        //cercano los punteros de anclaje
				        $$diagramaF1.actualizarPuntos();	
			        },700);

			  }// fin funcion --> construccionElemento




			  // ********************
			  // 
			  ,construccionNuevosConexionesPuntos:function(json)
			  {

			  	var linea=null;
				var punto=null;
				var tipo=null;

			  	if(json && json.linea!=null && json.punto!=null)
			  		{
			  			punto=$(json.punto);
						tipo= json.tipo;

						if(tipo=="linea")
						{
							linea=$(json.linea);
						}
						else
						//linea_partes 
						{
							linea= this.getLineaPartesById(json.linea);
						}

			  		}

			   return {	'$linea' : linea , 
 						'$punto' : punto,
 						'tipo':    tipo
 					}; 						

			  }// fn funcion -->construccionNuevosConexionesPuntos



			


			  /// *******************
			  /// deseleccionar elemento . o diagrama 
			  ,deseleccionarElemento:function(){
	
				var _self=this;

		  	    if(_self.$elementoSeleccionado)
			      {

			      	
		          //deseleccciona el elemento 

		          _self.$elementoSeleccionado.resizable( "option", { disabled: true } );
		          _self.$elementoSeleccionado.removeClass( "elemento_seleccionado" );
		          _self.$elementoSeleccionado.removeClass('ui-state-disabled');
			      }


			  }// fin  function -->deseleccionarElemento




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

								if(_self.$elementoSeleccionado[0]!= $nuevoElemento_seleccionado[0] )
								{
								//alert("deselccionar gato");
								_self.cerrarDialogEdicion();

								}

				          }


				          //muestra la caja de herramientas
				          _self.$elementoSeleccionado= $nuevoElemento_seleccionado;
				          
				          _self.$elementoSeleccionado.resizable( "option", { disabled: false } );
				          _self.$elementoSeleccionado.addClass( "elemento_seleccionado" );
				    
				    	 
			        });
			      


			      // el doble click 
			       $diagramaNuevo.click(function(e){
			       

			       	switch(_self.estado)
			       	{

			       		case 1:
			       			//$diagramaNuevo.find(".descripcion_observada").focus();
			       		break;


			       		case 4:
			       		case 10:
			       		case 2:
			       			_self.cambioEstado(1);
			       			//$diagramaNuevo.find(".descripcion_observada").focus();
			       		break;
			       	}	
			       	//_self.mostrarDialogoEdicion();

			       });// fom del evento doble click





			      // el doble click 
			       $diagramaNuevo.dblclick(function(e){
			       

			       	switch(_self.estado)
			       	{
						case 1:
			       			$diagramaNuevo.find(".descripcion_observada").focus();
			       		break;

			       		case 4:
			       		case 10:
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




			  // ***********
			  // deselecciona el cuadro de seleccion
			  // 
			  , deseleccionCuadroSeleccion:function(){


			  	var _self=this;
			  	if(_self.cuadroSeleccionado)
			  	{

			  		_self.cuadroSeleccionado.deselecciona();
			  		_self.cuadroSeleccionado=null;
			  	}

			  }// fin  function -->deseleccionCuadroSeleccion







		      /*************************

				eventos de mouse dentro de la pagina actual
		      */
		      ,eventosMousePaginaActual:function(){
		      
		      	this.creacionLineasMouse(this.$paginaActual);
		      	this.creacionGrupoSeleccion(this.$paginaActual);
		      	this.creacionLineaPartes(this.$paginaActual);

		      	this.creacionCuadroSeleccion(this.$paginaActual);
		      }




		      // ******************************
		      // *****************
		      //
		      ,construccionNuevoCuadroSeleccion:function(json){

		      		var _self= this;
		      		var $$cuadro = CuadroSeleccion();

					_self.deseleccionCuadroSeleccion();

					$$cuadro.$$padre= _self;
		        	$$cuadro.$pagina =$(json.id_pagina);

		        	$$cuadro.dibujar();
		        	$$cuadro.posicionXY( json.left
										,json.top);

		        	$$cuadro.anchoAlto(json.width
										,json.height);
		      		

					_self.listaCuadroSeleccion.push($$cuadro);
					$$cuadro.deselecciona();


		      }// construccion 




		      // ******************
		      //
		      //
		      ,construcionJSONNuevosCuadros:function(lista){


		      	var _self=this;
		      	for(var i=0; i< lista.length ;i++)
		      	{
		      		_self.construccionNuevoCuadroSeleccion(lista[i]);
		      	}	

		      }// fin -->construcionJSONNuevosCuadros


		      ///creacion de cuadros 
		      //
		      ,creacionCuadroSeleccion:function($elementos)
		      {


		      	var _self= this;
				var coordenadas1={x:null,y:null};





		      	$elementos.on('mousemove',function(e){
		      	
		      		if(_self.estado!=4)
					return;


		      		if(_self.ban_escCuadro>0)
		      		{
		      			_self.ban_escCuadro++;
		      			console.log("cuadro mousemove1");
		      		}



		      		if(_self.ban_escCuadro>5)
		      		{
		      			console.log("cuadro mousemove2");
			        	
			        	var direccionHorizontal="";
			        	var direccionVertical="";
			        	
			      		var x2 = e.clientX - _self.$paginaActual.offset().left;
			        	var y2 = e.clientY - _self.$paginaActual.offset().top;
						var ancho = coordenadas1.x - x2;
						var alto =  coordenadas1.y-y2;

						var punto1x;
						var punto1y;
						var puntoSeleccionado="";


						if(alto<0)
						{
							direccionVertical="abajo";
							punto1y=coordenadas1.y;
							puntoSeleccionado="s";
						}
						else if(alto>0)
						{
							direccionVertical="arriba";
							punto1y=y2;
							puntoSeleccionado="n";
						}
						else {
							direccionVertical="none";
						}



						if(ancho<0)
						{
							direccionHorizontal="derecha";
							punto1x= coordenadas1.x ;
							puntoSeleccionado+="e";
						}
						else if(ancho>0)
						{
							direccionHorizontal="izquierda";
							punto1x=x2;
							puntoSeleccionado+="w";
						}
						else{
							 direccionHorizontal="none";
						}


						


						ancho= Math.abs(ancho);
						alto = Math.abs(alto);

						console.info(ancho+" "+alto);

						if(ancho>5 &&  alto>5)
						{
							var $$cuadro = CuadroSeleccion();
							_self.deseleccionCuadroSeleccion();

							$$cuadro.$$padre= _self;
				        	$$cuadro.$pagina =_self.$paginaActual;


				        	
				        	$$cuadro.dibujar();
				        	$$cuadro.posicionXY(punto1x
												,punto1y);

				        	$$cuadro.anchoAlto(ancho
												,alto);
				      		

				        	console.error(puntoSeleccionado);

							 $$cuadro.$elemento.find(".ui-resizable-"+puntoSeleccionado).simulate("mousedown", e);
							_self.listaCuadroSeleccion.push($$cuadro);
							_self.cuadroSeleccionado=$$cuadro;

						
						}	

						_self.ban_escCuadro=-1;

		      		}
						 		
									
		      	});	









  				$elementos.on('mousedown',function(e){


  					if(_self.estado!=4)
					{
						
						_self.ban_escCuadro=0;
						return;
					}


					if(_self.ban_escCuadro==0)
					{

		      			var x1 = e.clientX - _self.$paginaActual.offset().left;
				        var y1 = e.clientY - _self.$paginaActual.offset().top-5;

				        coordenadas1={
  							x:x1,
  							y:y1
				        };

					
						_self.ban_escCuadro=1;
						console.log("cuadro mousedown");
					}
				});//fin de cracion de mouse
			


		      	$elementos.on('mouseup',function(e){
		      		_self.ban_escCuadro=0;
		      		
		      		console.log("cuadro mouseup");
		      	});

				//


		      }



		      // *****************
		      // consturccion de elementos
		      //
		      ,construccionNuevaElementos:function(listaJson){
		      	 var _self=this;

		      	 for(var i=0; i<listaJson.length; i++)
			      	 {
			      	 	var json=listaJson[i];
			      	 	_self.construccionElemento(null,null,json.mielemento, json);

			      	 }

		      }//fin fucnion construccionNuevaElementos



		      // ***************
		      // consturccion ... JSON con la linea 
		      //
		      ,construccionJsonNuevasLineas:function(listaLineas){
		      	var _self= this;

		      	console.info(listaLineas);
		      		for(var i=0; i< listaLineas.length; i++)
		      		{
		      			_self.construccionNuevaLinea(listaLineas[i]);

		      		}

		      }// function -->construccionJsonNuevasLineas



 				// ***************
		      // consturccion ... JSON con la linea 
		      //
		      ,construccionJsonNuevasLineasPorPartes:function(listaLineas){
		      	var _self= this;
		      		for(var i=0; i< listaLineas.length; i++)
		      		{
		      			_self.construccionNuevaLineaPorPartes(listaLineas[i]);

		      		}

		      }// function -->construccionJsonNuevasLineasPorPartes





		      // ***************
		      //
		      //
		      ,construccionNuevaLinea:function(JSON)
		      {

				console.info(JSON);	      	
		      	if(JSON)
		      	{
		      		var _self=this;




		      		_self.cambioEstado(2);
		      	
		      		_self.lineaConexionSeleccionada = LineaConexionSVG();
					_self.lineaConexionSeleccionada.$pagina=$(JSON.id_pagina);
					_self.lineaConexionSeleccionada.$$padre= _self;



					_self.lineaConexionSeleccionada.dibujar(JSON.id,JSON.estado_flechas);
					_self.lineaConexionSeleccionada.$elemento.attr("data-puntos_punto_moviblefin", JSON.puntos_punto_moviblefin);
					_self.lineaConexionSeleccionada.$elemento.attr("data-puntos_movibleinicio",   JSON.puntos_movibleinicio);  
					


					//_self.seleccionaLineaConexion(lineaSVG);
					_self.listaLineaConexion.push(_self.lineaConexionSeleccionada);

					//elementos
					_self.lineaConexionSeleccionada.$textoP.html(JSON.textoP);
					_self.lineaConexionSeleccionada.$elemento.data("label", JSON.textoP); 
					_self.lineaConexionSeleccionada.$elemento.css(
								{"top": JSON.top,
								"left":JSON.left,								
								"width": JSON.width,
								"height":JSON.height
								});



					


					_self.lineaConexionSeleccionada.$textoP.blur();
					_self.lineaConexionSeleccionada.cargaPoscionAnterioresActu();

					_self.lineaConexionSeleccionada.actualizarPoscionCentralizado();

					_self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
					
					_self.lineaConexionSeleccionada.actualizarVisualmente();
					_self.lineaConexionSeleccionada.actualizarPositionFlechas();
					
					//_self.deseleccionaLineaConexion();

					
		      	}
		      	
		      }// fin funcion -->construccionNuevaLinea





		      // ***************
		      //
		      //
		      ,construccionNuevaLineaPorPartes:function(JSON)
		      {


		      	if(JSON)
		      	{
		      		var _self=this;



		      		_self.cambioEstado(10);
		      	
		      		_self.objLineaPartes = LineaPartes();
					_self.objLineaPartes.$pagina=$(JSON.id_pagina);
					_self.objLineaPartes.$$padre= _self;

					_self.objLineaPartes.dibujar(JSON.id,JSON.estado_flechas);
					

					_self.listaLineasPartes.push(_self.objLineaPartes);



					//elementos
					_self.objLineaPartes.$textoP.html(JSON.textoP);
					_self.objLineaPartes.$elemento.data("label", JSON.textoP); 
					_self.objLineaPartes.$elemento.css(
								{"top": JSON.top,
								"left":JSON.left,
								
								"width": JSON.width,
								"height":JSON.height
								});


					_self.objLineaPartes.$elemento.attr("data-puntos_movible1",JSON.puntos_punto_1);
					_self.objLineaPartes.$elemento.attr("data-puntos_movible2",JSON.puntos_punto_2);
					_self.objLineaPartes.$elemento.attr("data-puntos_movible3",JSON.puntos_punto_3);

					

					_self.objLineaPartes.$textoP.blur();
					_self.objLineaPartes.cargaPoscionAnterioresActu();
					_self.objLineaPartes.actualizarPoscionCentralizado();

				
					_self.objLineaPartes.actualizarVisualmente();
					_self.objLineaPartes.actualizarPositionFlechas();
					
					_self.objLineaPartes.activarIndicacionSelecccionada(false);
					//_self.deseleccionaLineaConexion();
				
		      	}
		      	
		      }// fin funcion -->construccionNuevaLinea









		      // ******************
		      // function -->creacionLineasMouse
		    ,creacionGrupoSeleccion:function($elementos){

		      	var _self= this;
				var posicionesInicio={top:null, left:null};		      			

		      	//$(".punto_circle").hide(); /// de prueba


				_self.$paginaActual.on('click',function(e){
					
					console.log(" click en pagina");
					});




		      	//_self.$paginaActual.mouseup(function(e){
				$elementos.on('mousedown',function(e){


						// si  tiene click sobre un obj distonto a la pagina 
					if($(e.target).hasClass("paginas")==false)
					{


						// evita q los componentes 
						if($(e.target).hasClass("parte_seleccion")==false)
						{

							if(_self.objCuadroAgrupacion!=null)
				 				{

				 					_self.objCuadroAgrupacion.desagrupar();
				 		
				 				}


						}

						return true;
					}	

					
					if(_self.estado!=1)
						{
							_self.ban_crear_grupo=0;
							return true;
						}

							var $elementoEvent= $(e.target);

							if(_self.ban_crear_grupo!=0)
								{

		      		 			
					      		   	return true;
					      		 }



							if(!$elementoEvent.hasClass("punto_cuadrado"))
							{
								//_self.deseleccionaLineaConexion();

								_self.ban_crear_grupo=1;
								
								var x = e.clientX - _self.$paginaActual.offset().left-7;
					        	var y = e.clientY - _self.$paginaActual.offset().top-5;
						        	posicionesInicio={
						        		left:x,
						        		top:y
						        	}
								 		
							 		_self.$paginaActual.find(".punto_c_movibleinicio").css(
					      				posicionesInicio
					      				);	
					 				_self.$paginaActual.find(".punto_c_movibleinicio").show();


										if(_self.objCuadroAgrupacion!=null)
							 				{

							 					_self.objCuadroAgrupacion.desagrupar();
							 					
							 		
							 				}

										//_self.deseleccionaLineaConexion();
										_self.objCuadroAgrupacion= CuadradoAgrupacion();
										_self.objCuadroAgrupacion.$$pagina=_self.$paginaActual;
										_self.objCuadroAgrupacion.$$padre= _self;

										_self.objCuadroAgrupacion.dibujar();

										_self.objCuadroAgrupacion.$elementoInicioAgrupacion.hide();



						
			


								//e.stopPropagation();
								//false;
								
							}
							//e.stopPropagation();

		      	});



				$elementos.mouseout(function(e){
					//console.error("salio");
				});




				//evento de mover
				$elementos.mousemove(function(e){
 					
 					//console.log(" "+e.clientX+" --" +e.clientY);
				   if(_self.estado!=1)
	      		   {
	      		   	_self.ban_crear_grupo=0;
	      		   	return true;
	      		   }
						

	      		   if(_self.ban_crear_grupo>=1 && _self.ban_crear_grupo<10)
	      		   {
	      		   		_self.ban_crear_grupo++;
	      		   }
	      		   else if(_self.ban_crear_grupo>=10)
	      		   {



	      		   		var x = e.clientX - _self.$paginaActual.offset().left-7;
			        	var y = e.clientY - _self.$paginaActual.offset().top-5;
				
			        	_self.$paginaActual.find(".punto_c_movibleinicio").show();
			 			_self.$paginaActual.find(".punto_c_moviblefin").show();

			 			_self.$paginaActual.find(".punto_c_movibleinicio").css(
		      				posicionesInicio
		      				);	
			 			
			 			_self.$paginaActual.find(".punto_c_moviblefin").css({
			      				top: y,
					      		left: x
					      		});	

			 			

			 				var coords = {
						        clientX: e.clientX,
						        clientY: e.clientY
						    };

						// _self.$paginaActual.find(".punto_c_moviblefin").simulate("mousedown", e);
						
					 		
						if(_self.objCuadroAgrupacion &&  
							_self.ban_crear_grupo==0
							)
							{
								//eliminar..
								_self.objCuadroAgrupacion.agrupar();
								_self.$paginaActual.find(".punto_cuadrado").hide();
								_self.$paginaActual.find(".elementos_seleccionado").removeClass("elementos_seleccionado");

							}
					
						else {
								_self.objCuadroAgrupacion.$elementoInicioAgrupacion.show();
								_self.actualizacionPuntosAgrupacion(_self,_self.objCuadroAgrupacion,e, null);
					
								_self.$paginaActual.find(".punto_c_moviblefin").simulate("mousedown", coords);
            			
						}	

						//_self.ban_crear_grupo=0;


	      		   }



				});



				// evento de manejo soltar	
		      	$(document).on('mouseup',function(e){

		      		console.log("mouse up -->"+_self.ban_crear_grupo);
		      		   if(_self.estado!=1)
		      		   {
		      		   	_self.ban_crear_grupo=0;
		      		   	return true;
		      		   }
						
		      		
		      		 	/*if(_self.ban_crear_grupo==1)
		      		 	{
		      		 		_self.ban_crear_grupo=2;
		      		 	}
		      		 	// segunda vez que se suelta la segunda esfera
		      		 	else if(_self.ban_crear_grupo==2)
		      		 	*/	 if(_self.ban_crear_grupo>=1)
		      		 	{
		      		 		console.log("mouse up 2");

		      		 		// se evalua si es muy pequeño 
		      		 		/*if(_self.$lineaActual && _self.$lineaActual.width()<=12
		      		 			&& _self.$lineaActual.height()<=12)
		      		 		{
		      		 			$(".punto_circle").hide();
		      		 			_self.$lineaActual.hide();
		      		 			_self.lineaConexionSeleccionada.eliminarLinea();
		      		 			
		      		 			console.log("se elimio la linea..");
		      		 		}*/
		      		 		//alert("eliminar");

		      		 		_self.objCuadroAgrupacion.agrupar();


		      		 		_self.ban_crear_grupo=0;
		      		 	}
		      		 	else{
		      		 		_self.ban_crear_grupo=0;
		      		 	}
		      		 	//console.log("un elemento . up.");
		      			//console.log(e);
		      			
		      	});


		      }//FIN  de la funcion ..








		      // ******************
		      // function -->creacionLineasMouse
		    ,creacionLineaPartes:function($elementos){

		      	var _self= this;
				var posicionesInicio={top:null, left:null};		      			

		      	//$(".punto_circle").hide(); /// de prueba


				_self.$paginaActual.on('click',function(e){
					
					console.log(" click en pagina creacionLineaPartes");
					});




		      	//_self.$paginaActual.mouseup(function(e){
				$elementos.on('mousedown',function(e)
				{


					// si  tiene click sobre un obj distonto a la pagina 
					if($(e.target).hasClass("paginas")==false && $(e.target).hasClass("puntos_conexion")==false)
					{

						// evita q los componentes 
						if($(e.target).hasClass("puntos_conexion")==false)
						{

							return true;

						}
					}
					else{
							if(_self.objLineaPartes && _self.objLineaPartes.seleccionado)
			 				{

			 					
			 					_self.objLineaPartes.activarIndicacionSelecccionada(false);
			 					_self.cambioEstado(1);
			 					_self.objLineaPartes=null;
			 				}
					}	

					
					if(_self.estado!=10)
						{
							_self.ban_crear_linea_partes=0;
							return true;
						}

							var $elementoEvent= $(e.target);

							if(_self.ban_crear_linea_partes!=0)
								{

		      		 			
					      		   	return true;
					      		 }


							if(!$elementoEvent.hasClass("punto_cuadrado"))
							{
								//_self.deseleccionaLineaConexion();

								_self.ban_crear_linea_partes=1;

								//if(_self.objLineaPartes==null)
								{
									
								
									

								
									var x = e.clientX - _self.$paginaActual.offset().left-7;
						        	var y = e.clientY - _self.$paginaActual.offset().top-5;
							        	posicionesInicio={
						        		left:x,
						        		top:y
						        	}
								 		
							 		_self.$paginaActual.find(".linea_partes_punto_movible1").css(
					      				posicionesInicio
					      				);

							 		//_self.$paginaActual.find(".linea_partes_punto_movible1").show();
							 		_self.$paginaActual.find(".linea_partes_punto_movible2").css(
						      				{
						      					left:posicionesInicio.left+5,
						      					top:posicionesInicio.top+5
						      				}
					      				);
							 		

							 		_self.$paginaActual.find(".linea_partes_punto_movible3").css(
						      				{
						      					left:posicionesInicio.left+10,
						      					top:posicionesInicio.top+10
						      				}
					      				);




										if(_self.objCuadroAgrupacion!=null)
							 				{

							 					_self.objCuadroAgrupacion.desagrupar();
							 					
							 		
							 				}

										_self.objLineaPartes = LineaPartes();
										_self.objLineaPartes.$pagina=_self.$paginaActual;
										_self.objLineaPartes.$$padre= _self;

										_self.objLineaPartes.dibujar();
										_self.objLineaPartes.$elemento.hide();

										_self.listaLineasPartes.push(_self.objLineaPartes);




								//e.stopPropagation();
								//false;
								} 
							}
							//e.stopPropagation();

		      	});



				$elementos.mouseout(function(e){
					//console.error("salio");
				});




				//evento de mover
				$elementos.mousemove(function(e){
 					
 					//console.log(" "+e.clientX+" --" +e.clientY);
				   if(_self.estado!=10)
	      		   {
	      		   	_self.ban_crear_linea_partes=0;
	      		   	return true;
	      		   }
						

	      		   if(_self.ban_crear_linea_partes>=1 && _self.ban_crear_linea_partes<10)
	      		   {
	      		   		_self.ban_crear_linea_partes++;
	      		   }
	      		   else if(_self.ban_crear_linea_partes>=10)
	      		   {


	      		   	

	      		   		var x = e.clientX - _self.$paginaActual.offset().left-7;
			        	var y = e.clientY - _self.$paginaActual.offset().top-7;
				

			 			/*_self.$paginaActual.find(".linea_partes_punto_movible1").css(
		      				posicionesInicio
		      				);	*/
			 			
			 			_self.$paginaActual.find(".linea_partes_punto_movible3").css({
			      				top: y,
					      		left: x
					      		});	

			        	_self.$paginaActual.find(".linea_partes_punto_movible1").show();
			 			_self.$paginaActual.find(".linea_partes_punto_movible3").show();
			 		
			 			

			 				var coords = {
						        clientX: e.clientX,
						        clientY: e.clientY
						    };

						// _self.$paginaActual.find(".punto_c_moviblefin").simulate("mousedown", e);
						


					 		
						if(_self.objLineaPartes &&  
							_self.ban_crear_linea_partes==0
							)
							{
								//eliminar..
								//_self.objCuadroAgrupacion.agrupar();

								_self.$paginaActual.find(".punto_cuadrado").hide();
								_self.$paginaActual.find(".elementos_seleccionado").removeClass("elementos_seleccionado");

							}
					
						else {
								
							
								_self.actualizacionPuntosLineasPartes(_self, _self.objLineaPartes ,e, null);


								var mi1xx= parseInt(_self.$paginaActual.find(".linea_partes_punto_movible1").css("left"));
								var mi1yy= parseInt(_self.$paginaActual.find(".linea_partes_punto_movible1").css("top"));
								var mi2xx= parseInt(_self.$paginaActual.find(".linea_partes_punto_movible3").css("left"));
								var mi2yy= parseInt(_self.$paginaActual.find(".linea_partes_punto_movible3").css("top"));


								// centrar el punto 2 
								var miX2= Math.min(
									mi1xx,
									mi2xx
									) +Math.abs(mi1xx-mi2xx)/2;


							
								_self.$paginaActual.find(".linea_partes_punto_movible2").css(
									{left:miX2});

								_self.$paginaActual.find(".linea_partes_punto_movible2").show();
														

								_self.$paginaActual.find(".linea_partes_punto_movible3").simulate("mousedown", coords);

								
            					_self.ban_crear_linea_partes=-1;
            					_self.objLineaPartes.$elemento.show();

						}	

						//_self.ban_crear_grupo=0;

						
	      		   }



				});



				// evento de manejo soltar	
		      	$(document).on('mouseup',function(e){

		      		//console.log("mouse up -->"+_self.ban_crear_linea_partes);
		      		   if(_self.estado!=10)
		      		   {
		      		   		_self.ban_crear_linea_partes=0;
		      		   		return true;
		      		   }

						
						// se forma bien
						if(_self.ban_crear_linea_partes==-1)
		      		 	{
		  	    		 	_self.ban_crear_linea_partes=0;
		      		 	}

		      		 	//creo mal deber eleimiar
		      		 	else
		      		 	if(_self.ban_crear_linea_partes>=1){

		      		 		if(_self.objLineaPartes)
		      		 		{

	      		 			_self.objLineaPartes.eliminarLinea();
		      		 			_self.ban_crear_linea_partes=0;
		      		 		}
		      		 	}
		      			
		      	});


		      }//FIN  de la funcion ..





		      // centra de modo  horizontal elo elementos agrupados
		      //
		      ,centarHorizontalElementosAgrupados:function(){
		      	var _self=this;

		      	if(_self.estado==1 && _self.objCuadroAgrupacion)
		      	{
		      		_self.objCuadroAgrupacion.centrarModoHorizontal();

		      	}


		      }// fin --> function centarHorizontalElementosAgrupados






		      // centra de modo  vertical elo elementos agrupados
		      //
		      ,centarVerticalElementosAgrupados:function(){
		      	var _self=this;

		      	if(_self.estado==1 && _self.objCuadroAgrupacion)
		      	{
		      		_self.objCuadroAgrupacion.centrarModoVertical();

		      	}


		      }// fin --> function centarHorizontalElementosAgrupados



		      // sera un null, por defecto . 
		      // en caso de tratar de ingresar un elemento y este se cree ... 
		      // se lanzar 
		      // se activa en eventoDeCruz .. . en pseudoclase DiagramaF1.. se carga
		      // y se ejecuta cuando se cre alguna linea
		      ,eventoDeDisparoAlCrearLineaConexion:null








		      // ******************
		      // function -->creacionLineasMouse
		      ,creacionLineasMouse:function($elementos){

		      	var _self= this;
				var posicionesInicio={top:null, left:null};		      			

		      	$(".punto_circle").hide(); /// de prueba


				_self.$paginaActual.on('click',function(e){
					
					console.log(" click en pagina");
					});



		      	//_self.$paginaActual.mouseup(function(e){
				$elementos.on('mousedown',function(e){


					// si  tiene click sobre un obj distonto a la pagina 
					if($(e.target).hasClass("paginas")==false && $(e.target).hasClass("puntos_conexion")==false)
					{

						// evita q los componentes 
						if($(e.target).hasClass("puntos_conexion")==false)
						{

							return true;

						}
					}
					else{
							if(_self.lineaConexionSeleccionada && _self.lineaConexionSeleccionada.seleccionado)
			 				{

			 					
			 					_self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
			 					_self.cambioEstado(1);
			 					_self.lineaConexionSeleccionada=null;
			 				}
					}	

					
					if(_self.estado!=2)
						{
							 
							_self.ban_crear_linea_conexion=0;
							return true;
						}

							var $elementoEvent= $(e.target);

							if(_self.ban_crear_linea_conexion!=0)
								{

		      		 			
					      		   	return true;
					      		 }


							if(!$elementoEvent.hasClass("punto_cuadrado"))
							{
								//_self.deseleccionaLineaConexion();

								_self.ban_crear_linea_conexion=1;

								//if(_self.objLineaPartes==null)
								{
									

								
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
							 		
						 			if(_self.objCuadroAgrupacion!=null)
						 				{
											_self.objCuadroAgrupacion.desagrupar();
						 				
						 				}


									

										_self.lineaConexionSeleccionada = LineaConexionSVG();
										_self.lineaConexionSeleccionada.$pagina=_self.$paginaActual;
										_self.lineaConexionSeleccionada.$$padre= _self;

										_self.lineaConexionSeleccionada.dibujar();
										_self.lineaConexionSeleccionada.$elemento.hide();

										_self.listaLineaConexion.push(_self.lineaConexionSeleccionada);




								//e.stopPropagation();
								//false;
								} 
							}
							//e.stopPropagation();

		      	});






			





			//evento de mover
				$elementos.mousemove(function(e){
 					
 				  if(_self.estado!=2)
	      		   {
	      		   	_self.ban_crear_linea_conexion=0;
	      		   	return true;
	      		   }
						

	      		   if(_self.ban_crear_linea_conexion>=1 && _self.ban_crear_linea_conexion<10)
	      		   {
	      		   		_self.ban_crear_linea_conexion++;
	      		   }
	      		   else if(_self.ban_crear_linea_conexion>=10)
	      		   {


	      		   	

	      		   		var x = e.clientX - _self.$paginaActual.offset().left-7;
			        	var y = e.clientY - _self.$paginaActual.offset().top-7;
				

			 				
			 			
			 			_self.$paginaActual.find(".punto_moviblefin").css({
			      				top: y,
					      		left: x
					      		});	

			        	_self.$paginaActual.find(".punto_movibleinicio").show();
			 			_self.$paginaActual.find(".punto_moviblefin").show();

			 			

			 				var coords = {
						        clientX: e.clientX,
						        clientY: e.clientY
						    };

						// _self.$paginaActual.find(".punto_c_moviblefin").simulate("mousedown", e);
						


					 		
						if(_self.lineaConexionSeleccionada &&  
							_self.ban_crear_linea_conexion==0
							)
							{
								//eliminar..
								//_self.objCuadroAgrupacion.agrupar();

								_self.$paginaActual.find(".punto_circle").hide();
								_self.$paginaActual.find(".elementos_seleccionado").removeClass("elementos_seleccionado");

							}
					
						else {
								
							
								_self.actualizacionPuntosLineaConexion(_self, _self.lineaConexionSeleccionada ,e, null);




								var mi1xx= parseInt(_self.$paginaActual.find(".punto_movibleinicio").css("left"));
								var mi1yy= parseInt(_self.$paginaActual.find(".punto_movibleinicio").css("top"));
								var mi2xx= parseInt(_self.$paginaActual.find(".punto_moviblefin").css("left"));
								var mi2yy= parseInt(_self.$paginaActual.find(".punto_moviblefin").css("top"));


								// centrar el punto 2 
								var miX2= Math.min(
									mi1xx,
									mi2xx
									) +Math.abs(mi1xx-mi2xx)/2;


							
								/*_self.$paginaActual.find(".punto_moviblefin").css(
									{left:miX2});

								_self.$paginaActual.find(".punto_moviblefin").show();
								*/

								_self.$paginaActual.find(".punto_moviblefin").simulate("mousedown", coords);

            					_self.ban_crear_linea_partes=-1;
            					_self.lineaConexionSeleccionada.$elemento.show();

            					// gato .. gato 

							}	
					}

				});



			// evento de manejo soltar	
		      	$(document).on('mouseup',function(e){


	  					//console.log("mouse up -->"+_self.ban_crear_linea_partes);
		      		   if(_self.estado!=2)
		      		   {
		      		   		_self.ban_crear_linea_conexion=0;
		      		   		return true;
		      		   }

						
						// se forma bien
						if(_self.ban_crear_linea_conexion==-1)
		      		 	{
		  	    		 	_self.ban_crear_linea_conexion=0;
		      		 	}

		      		 	//creo mal deber eleimiar
		      		 	else
		      		 	if(_self.ban_crear_linea_conexion>=1){

		      		 		if(_self.lineaConexionSeleccionada)
		      		 		{

	      		 				//_self.lineaConexionSeleccionada.eliminarLinea();
		      		 			_self.ban_crear_linea_conexion=0;
		      		 		}
		      		 	}
		      			
		      	});





		      }//FIN  de la funcion ..




		      /*****************
		      *
		       function publica. para actualizar la linea de conexion seleccionada
		      ** prepara la parte grafica . .. 
		      @param tipo_lineaConexion {LineaConexion} la linea de conexion seleeccionada 
		      
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
*/

		      //seleccioan Query de la linea actual
		      ,seleccionLineaActulaDOM:function($lineaA){
		      	var _self= this;
		      	
		      	/*	_self.$lineaActual = $lineaA;
						
	
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
				*/

		      }// fin de la funcion -> seleccion$lineaActula


		      /****************
		      * funciton externa .. deselecciona la linea de conexion actaul
		      */
		      ,deseleccionaLineaConexion:function(){
		      		if(_self.lineaConexionSeleccionada)
		      		{

		      			_self.lineaConexionSeleccionada
		      				.activarIndicacionSelecccionada(false);

		      			_self.lineaConexionSeleccionada=null;
					

		      		}

		      }



		      // *******************************
		      // construccion de elementos 
		      //
		      ,construccionAllFromJsonJSON:function(strin){

		      //var strin ="{'elementos':[{'mielemento':'n6','descripcion':'','registro':'','observacion':'','personal':'','resumen':'','ver_personal':'S','id_pagina':'contenedor_principal_pag_1','top':'45.8125px','left':'162px','width':'150','height':'150','linea1':{'$linea' : null , '$punto':null},'linea2':{'$linea' : null , '$punto':null},'linea3':{'$linea' : null , '$punto':null},'linea4':{'$linea' : '#id_linea_1' , '$punto':'.punto_movibleinicio'}},{'mielemento':'n3','descripcion':'','registro':'','observacion':'','personal':'','resumen':'','ver_personal':'N','id_pagina':'contenedor_principal_pag_1','top':'47.8125px','left':'455px','width':'150','height':'150','linea1':{'$linea' : null , '$punto':null},'linea2':{'$linea' : null , '$punto':null},'linea3':{'$linea' : null , '$punto':null},'linea4':{'$linea' : '#id_linea_1' , '$punto':'.punto_moviblefin'}},{'mielemento':'n6','descripcion':'','registro':'','observacion':'','personal':'','resumen':'','ver_personal':'S','id_pagina':'pagina_id_1','top':'69.8125px','left':'233px','width':'150','height':'150','linea1':{'$linea' : null , '$punto':null},'linea2':{'$linea' : '#id_linea_4' , '$punto':'.punto_moviblefin'},'linea3':{'$linea' : null , '$punto':null},'linea4':{'$linea' : '#id_linea_4' , '$punto':'.punto_movibleinicio'}},],'lineas':[{'id':'id_linea_1','id_pagina':'#contenedor_principal_pag_1','textoP':'','top':'38px','left':'245px','transform':'none','width':'290px','height':'2px','puntos_punto_moviblefin':'530;35','puntos_movibleinicio':'240;33'},{'id':'id_linea_2','id_pagina':'#contenedor_principal_pag_1','textoP':'','top':'53px','left':'569px','transform':'none','width':'25px','height':'16px','puntos_punto_moviblefin':'589;48','puntos_movibleinicio':'564;64'},{'id':'id_linea_4','id_pagina':'#pagina_id_1','textoP':'','top':'64px','left':'315px','transform':'matrix(1, 0, 0, 1, 0, 0)','width':'73px','height':'86px','puntos_punto_moviblefin':'383;145','puntos_movibleinicio':'310;59'},],'pagina':['contenedor_principal_pag_1','pagina_id_1','pagina_id_2',],'cuadros':[{'id_pagina':'#pagina_id_1','top':'49.8125px','left':'103px','width':'538px','height':'150px'},{'id_pagina':'#contenedor_principal_pag_1','top':'50.8125px','left':'759px','width':'68px','height':'95px'},{'id_pagina':'#pagina_id_2','top':'44.8125px','left':'318px','width':'90px','height':'81px'},]}";
		     var _self=this;
		     var gato;
		   		console.log(strin);
		     // strin=_self.remplazarPalabras(manejo,"\\\\","");
			//strin=_self.remplazarPalabras(manejo,"{{#-8-~#}}","\\'");



		      eval("gato="+strin);

		      //console.log(gato);
		     
		      this.construccionJsonPagina(gato.pagina);
		      this.construccionJsonNuevasLineas(gato.lineas);
		      this.construccionJsonNuevasLineasPorPartes(gato.lineas_partes);
		      this.construccionNuevaElementos(gato.elementos);
		      this.construcionJSONNuevosCuadros(gato.cuadros);




		      //actuali parte grafica de las lineas
		     //_self.cambioEstado(2);
		     setTimeout(function()
			     {

					_self.actualizaElementoAllPositionByPagina();
			     




			      	_self.cambioEstado(1);
			  		_self.actualizaListaConexionSVG();
					_self.actualizaListaPartes();
			  	},700);
//cuadros
		      console.log(gato);

		      }//fin function --->construccionAllFromJsonJSON()







		      // *****************************
		      // dar click por fuera del la pagina
		      ,eventosFueraPagina: function(){
		      	var _self= this;


		     // *************
		      	//evento eleminar 
		      	//
		      $(document).keyup(function(e){



		      		//ESC
		      		if(e.keyCode==27)
		      		{

		      			//edicion de estado
		      			/*if(_self.estado==2)
		      			{

			      			if(_self.ban_escribir==1 || _self.ban_escribir==2 )
				      		{	if(_self.lineaConexionSeleccionada!=null)
				      			{
									_self.lineaConexionSeleccionada.eliminarLinea(); 
									_self.ban_escribir=0;
				      			}
				      		}
				      		else{
				      			if(_self.lineaConexionSeleccionada!=null)
				      			{
				      				_self.deseleccionaLineaConexion();
				      			}
				      			else{

				      				_self.cambioEstado(1);
				      				console.log("regreso con ESC al estado 1");
				      			}


				      		}//fin if
				      		console.log("estado -->"+_self.ban_escribir);	

		      			}	

						*/

		      		}else
		      		//SUPRIMIR
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

				    			if(_self.lineaConexionSeleccionada && _self.lineaConexionSeleccionada.seleccionado)
					    		{
					    				_self.lineaConexionSeleccionada.eliminarLinea();

					    		}

				    		break;



				    		case 4:
					    		if(_self.cuadroSeleccionado && _self.cuadroSeleccionado.sePuedeDelte())
			      				{
			      					_self.cuadroSeleccionado.eliminarElemento();
			      				}


			      			
				    		break;



				    		case 10:

					    		if(_self.objLineaPartes && _self.objLineaPartes.seleccionado)
					    		{
					    				_self.objLineaPartes.eliminarLinea();

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
		      ,eventosPuntoCuadradoMoble:function(){
		      	var _self= this;

		      

		      	var $puntos = $(".punto_c_moviblefin ,.punto_c_movibleinicio");
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
			            		if(_self.objCuadroAgrupacion==null)
		      						return;
			            	 _self.actualizacionPuntosAgrupacion(_self,_self.objCuadroAgrupacion,event, ui);
			            }
			            ,stop:function( event, ui ){
			            		if(_self.objCuadroAgrupacion==null)
		      						return;


			            	_self.actualizacionPuntosAgrupacion(_self,_self.objCuadroAgrupacion,event, ui);

			            	//_self.objCuadroAgrupacion.$elementoInicioAgrupacion.show();
			            }
			            //,revert:""
			            ,scroll: false  
			          });
			              
		      }// fin funcion movientos movibles








		      // *******************
		      // dar movientos a los puntos movibles
		      ,eventosPuntoMoble:function(){
		      	var _self= this;

		      

		      	var $puntos = $(".punto_moviblefin ,.punto_movibleinicio");
  		      //	var ancho=_self.$lineaActual.width();
	           // var alto= _self.$lineaActual.height();



		      	$puntos.draggable({
			            cursor:"move"
			            //,revert:"invalid"
			            //,scroll:true
			           // ,iframeFix: true
			            ,containment: "parent"
			            ,delay:1
			            ,opacity: 0.6
			            //,"zIndex": 100
			            ,drag:function( event, ui ){
			            		if(_self.lineaConexionSeleccionada==null)
		      						return;


			            	 	_self.actualizacionPuntosLineaConexion(_self,_self.lineaConexionSeleccionada ,event, ui);
			           			
			            }
			            ,stop:function( event, ui ){
			            		if(_self.lineaConexionSeleccionada==null)
		      						return;

		      					var p2={x:parseInt($(".punto_moviblefin").css("left")), 
		      							y:parseInt($(".punto_moviblefin").css("top"))} ;
		      					var p1={x:parseInt($(".punto_movibleinicio").css("left")) 
		      							,y:parseInt($(".punto_movibleinicio").css("top"))};

	
		      					if(p2.x <= (p1.x+5) && p2.x >= (p1.x-5) )
								{
									p2.x =p1.x;	

									$(".punto_moviblefin").css("left", p2.x+"px");
									$(".punto_movibleinicio").css("left", p2.x+"px");

								

								}

								
								if(p2.y <= (p1.y+5) && p2.y >= (p1.y-5) )
								{
									p2.y =p1.y;

									$(".punto_moviblefin").css("top", p2.y+"px");
									$(".punto_movibleinicio").css("top", p2.y+"px");
								}

			            		_self.actualizacionPuntosLineaConexion(_self,_self.lineaConexionSeleccionada,event, ui);
			            }
			            //,revert:""
			            ,scroll: false  
			          });
			              
		      }// fin funcion movientos movibles




 				// *******************
		      // dar movientos a los puntos movibles perteniciente a linea por partes
		      ,eventosPuntoMobleLineaPartes:function(){
		      	var _self= this;

		      

		      	var $puntos = $(".linea_partes_punto_movible2,.linea_partes_punto_movible1, .linea_partes_punto_movible3");
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
			            		if(_self.objLineaPartes==null)
		      						return;
		      					if($(ui.helper).hasClass("linea_partes_punto_movible2"))
		      					{

			            			return  _self.actualizacionPuntosLineasPartes(_self,_self.objLineaPartes,event, ui);
  						
		      					}
		      					else{
		      						_self.actualizacionPuntosLineasPartes(_self,_self.objLineaPartes,event, ui);
  								}
			            }
			            ,stop:function( event, ui ){
			            	if(_self.objLineaPartes==null)
		      						return;
		           			if($(ui.helper).hasClass("linea_partes_punto_movible2"))
	      					{

		            			return  _self.actualizacionPuntosLineasPartes(_self,_self.objLineaPartes,event, ui);
						
	      					}
	      					else{
	      						_self.actualizacionPuntosLineasPartes(_self,_self.objLineaPartes,event, ui);
								}

			            }
			            //,revert:""
			            ,scroll: false  
			          });
			              
		      }// fin funcion movientos movibles




		    


  // **************************
		      // funcion --> actualizacionPuntosAgrupacion() 
		      // 
		     , actualizacionPuntosAgrupacion:function(_self,mi_objCuadroAgrupacion,event, ui ){


	             var xFin = parseInt( _self.$paginaActual.find(".punto_c_moviblefin").css("left"))+5;
	             var xInicio = parseInt( _self.$paginaActual.find(".punto_c_movibleinicio").css("left"))+5;	
	             var mileft=0; 
	             var miAncho=0;
	             var escalaX=1;
	             
	             var yFin = parseInt( _self.$paginaActual.find(".punto_c_moviblefin").css("top"))+5;
	             var yInicio = parseInt( _self.$paginaActual.find(".punto_c_movibleinicio").css("top"))+5;	
	             var mitop=0; 
	             var miAlto=0;
	             
	             var escalaY=1; 

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
		           	

	              
	             if(mi_objCuadroAgrupacion &&  mi_objCuadroAgrupacion.$elementoInicioAgrupacion)
	              {
	              	mi_objCuadroAgrupacion.$elementoInicioAgrupacion.css(
	              			{left: mileft, 
	              			 width: miAncho,
	              			 //transform: mitransform , 
	              			 top:mitop ,
	              			 height:miAlto});

	              	//resalta los elemnentos seleccaiondos
	              	mi_objCuadroAgrupacion.actualizaSeleccinados();

	              	
	              }
	             

		     }// fin --> actualizacionPuntosAgrupacion()







  // **************************
		      // funcion --> actualizacionPuntosLineasPartes() 
		      // 
		     , actualizacionPuntosLineasPartes:function(_self, mi_objLineaPartes, event, ui ){
 


	             var x3 = parseInt( _self.$paginaActual.find(".linea_partes_punto_movible3").css("left"))+5;
	             var x1 = parseInt( _self.$paginaActual.find(".linea_partes_punto_movible1").css("left"))+5;
	             var x2 = parseInt( _self.$paginaActual.find(".linea_partes_punto_movible2").css("left"))+5;
	          

	             var y1 = parseInt( _self.$paginaActual.find(".linea_partes_punto_movible1").css("top"))+5;	
				 var y2 = parseInt( _self.$paginaActual.find(".linea_partes_punto_movible2").css("top"))+5;	
	             var y3 = parseInt( _self.$paginaActual.find(".linea_partes_punto_movible3").css("top"))+5;	
	             	             
	             // el  top . el mas bajo en y
	            var mitop=Math.min(y1,y2,y3);
	            var miAlto=Math.max(y1,y2,y3);
	            	miAlto= Math.abs(miAlto-mitop);
		         


	            var mileft=Math.min(x1,x2,x3);
	            var miAncho=Math.max(x1,x2,x3);
	            	miAncho= Math.abs(miAncho-mileft);  	

	              
	             if(mi_objLineaPartes &&  mi_objLineaPartes.$elemento )
	              {
	              	mi_objLineaPartes.$elemento.css(
	              			{left: mileft, 
	              			 width: miAncho,
	              			 top:mitop ,
	              			 height:miAlto});

	              	//resalta los elemnentos seleccaiondos
	              	 return mi_objLineaPartes.actualizarPoscionCentralizado();

	              	
	              }
	             
	             return true;

		     }// fin --> actualizacionPuntosLineasPartes()







  			// **************************
		      // funcion --> actualizacionPuntosLineaConexion() 
		      // 
		     , actualizacionPuntosLineaConexion:function(_self, mi_lineaConexion, event, ui ){
 


	             var x1 = parseInt( _self.$paginaActual.find(".punto_movibleinicio").css("left"))+5;
	             var x2 = parseInt( _self.$paginaActual.find(".punto_moviblefin").css("left"))+5;
	            

	             var y1 = parseInt( _self.$paginaActual.find(".punto_movibleinicio").css("top"))+5;	
				 var y2 = parseInt( _self.$paginaActual.find(".punto_moviblefin").css("top"))+5;	
	             	             
	             // el  top . el mas bajo en y
	            var mitop=Math.min(y1,y2);
	            var miAlto=Math.max(y1,y2);
	            	miAlto= Math.abs(miAlto-mitop);
		         


	            var mileft=Math.min(x1,x2);
	            var miAncho=Math.max(x1,x2);
	            	miAncho= Math.abs(miAncho-mileft);  	

	              
	             if(mi_lineaConexion &&  mi_lineaConexion.$elemento )
	              {
	              	mi_lineaConexion.$elemento.css(
	              			{left: mileft, 
	              			 width: miAncho,
	              			 top:mitop ,
	              			 height:miAlto});



	              	//resalta los elemnentos seleccaiondos
	              	 return mi_lineaConexion.actualizarPoscionCentralizado();

	              	
	              }
	             
	             return true;

		     }// fin --> actualizacionPuntosLineaConexion()



		     // ***  *****  ***  *****  ******
		     // construccion de paginas desde el json
		     // @param jsonPagina 'pagina':['contenedor_principal_pag_1','pagina_id_0',]
		     ,construccionJsonPagina:function(jsonPagina){
		     	
		     	var _self=this;
		     	for(var i=0;i< jsonPagina.length; i++)
		     	{
		     		_self.crearPaginaNueva(jsonPagina[i]);

		     	}

		     }//fin funcion -->construccionJsonPagina





 	
		    


		     //********************
		     // crear una nueva pagina 
		     // *******************
		     ,crearPaginaNueva:function(datosObjPagina){
		     	var _self=this;

		     	var idPagina=0; 


		     	if(datosObjPagina )
		     	{
		     		/// Pagina 1
		     		if(datosObjPagina=="contenedor_principal_pag_1")
		     		{
		     			return ;
		     		}	

		     		var listaElemento = datosObjPagina.split("pagina_id_");
		     		idPagina= parseInt(listaElemento[1]);

		     		// guarda el maximo
		     		if(idPagina>_self.contadorPaginas)
		     		{
		     			_self.contadorPaginas=idPagina;
		     		}

		     	}
		     	else{
		     		 _self.contadorPaginas++;
		     		 idPagina=_self.contadorPaginas		     	
		     	}




		     	var html ="  <div  class='paginas' id='pagina_id_"+idPagina+"' >    "
				        +"       <div class='punto_moviblefin punto_circle parte_seleccion' >  "
				        +"         <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>   "
				        +"       </div>  "
				               
				        +"        <div class='punto_movibleinicio punto_circle parte_seleccion' >  "
				        +"          <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>   "
				        +"        </div>  "

				        +"     <div class='punto_c_moviblefin punto_cuadrado parte_seleccion' style='display:none' > "
			            +"      <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>  "
			            +"    </div> "

			               
			            +"     <div class='punto_c_movibleinicio punto_cuadrado parte_seleccion'    style='display:none'> "
			            +"       <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>  "
			            +"     </div> "

			            +"      <div class='parte_seleccion seleccionados_grupos mover_grupos' "
			            +"           style='top:100px; left:400px;display:none'         > "          
			            +"         <div  class='parte_seleccion' style='position:absolute; z-index:1000;width:100%; cursor:move; "
			                     

			            +"         height:100%;'></div> "
			            +"      </div>  "

			            +"   <div class='linea_partes_punto_movible1 linea_partes_punto_circle' style='top:10px;left:10px;display:none' > "
			            +"     <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>  "
			            +"   </div> "

			               
			            +"    <div class='linea_partes_punto_movible2  linea_partes_punto_circle'  style='top:20px;left:20px;display:none'> "
			            +"      <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>  "
			            +"    </div> "
			              

			             +"   <div class='linea_partes_punto_movible3  linea_partes_punto_circle'  style='top:30px;left:30px;display:none'> "
			            +"      <img src='"+URL__SERVIDOR+"/img/conexion_p.gif'  class='imagen_punto_mobil'>  "
			            +"    </div> "


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
		     	this.eventosPuntoCuadradoMoble();	
		     	this.eventosPuntoMobleLineaPartes();

		     	this.cargarElementosAgrupacion();
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
		     		_self.listaLineaConexion[i].activarIndicacionSelecccionada(false);


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



		   // retorna la linea parte por id del elemento principal  de la forma "#id"
		   // en caso de no encontrarse retorna null
		   ,getLineaPartesById:function(miid){

			   	var _self=this;

			   	for(var i=0; i< _self.listaLineasPartes.length; i++)
			   	{
			   		if(_self.listaLineasPartes[i].$elemento &&
			   		("#"+_self.listaLineasPartes[i].$elemento.attr("id"))==miid )
			   		{

			   			return _self.listaLineasPartes[i]; 
			   		}

			   	}
			   	return null;
		   }// fin function getLineaPartesById


		   // ********************
		   // buscar LIneaAconexion
		   // 
		   ,getDiagramaF1ByDOM:function(elementoDOM)
		   {

		     
		     	var _self=this;

		     	for(var i = 0; i< _self.listaElementos.length ; i++ )
		     	{

		     		if(elementoDOM  && 
		     			elementoDOM == _self.listaElementos[i].$elemento[0] )
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


 			_self.actualizaBotonesFlechas("-1");

 			 if(_self.lineaConexionSeleccionada)
					{
					 _self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
			 		_self.lineaConexionSeleccionada=null;
					}



 			switch(estado)
 			{

 				 


 				case 1:
 					$("#bton_estado1").addClass("miActivo");
					$("#bton_estado2").removeClass("miActivo");
					$("#bton_estado4").removeClass("miActivo");
					$("#bton_estado10").removeClass("miActivo");
					$(".punto_circle").hide();
					$("body").attr("data-estado","1");
					$(".descripcion_observada").attr("contenteditable",true);
					_self.enbledDragDiagrama(true);
					_self.deseleccionCuadroSeleccion();

					$(".caudro_lineal").draggable("disable");

						if(_self.objLineaPartes)
						{
						 _self.objLineaPartes.activarIndicacionSelecccionada(false);
			 			_self.objLineaPartes=null;
						}


					


						


 				break;


 				case 2:

 					_self.cerrarDialogEdicion();
 					  $("#bton_estado2").addClass("miActivo");
					  $("#bton_estado1").removeClass("miActivo");
					    $("#bton_estado4").removeClass("miActivo");
					    $("#bton_estado10").removeClass("miActivo");
					  $("body").attr("data-estado","2");
					  _self.enbledDragDiagrama(false);
					  $(".descripcion_observada").attr("contenteditable",false);
					  _self.deseleccionCuadroSeleccion();

					  $(".caudro_lineal").draggable("disable");


					  if(_self.objLineaPartes)
						{
						 _self.objLineaPartes.activarIndicacionSelecccionada(false);
			 			_self.objLineaPartes=null;
						}

						if(_self.objCuadroAgrupacion)
						{
							_self.objCuadroAgrupacion.desagrupar();	
						}	

						
					  if(_self.lineaConexionSeleccionada)
						{
						 _self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
			 			_self.lineaConexionSeleccionada=null;
						}



 				break;




 				case 4:

 					_self.cerrarDialogEdicion();
 					  $("#bton_estado4").addClass("miActivo");
					  $("#bton_estado1").removeClass("miActivo");
					  $("#bton_estado2").removeClass("miActivo");
					  $("#bton_estado10").removeClass("miActivo");
					  
					  $("body").attr("data-estado","4");
					  _self.enbledDragDiagrama(false);
					  _self.deseleccionaLineaConexion();

					  $(".descripcion_observada").attr("contenteditable",false);
					  $(".caudro_lineal").draggable("enable");

					  	if(_self.objLineaPartes)
						{
						 _self.objLineaPartes.activarIndicacionSelecccionada(false);
			 			_self.objLineaPartes=null;
						}


					  if(_self.lineaConexionSeleccionada)
						{
						 _self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
			 			_self.lineaConexionSeleccionada=null;
						}



					if(_self.objCuadroAgrupacion)
					{
						_self.objCuadroAgrupacion.desagrupar();	
					}						  	

 				break;



 				case 10:

 					_self.cerrarDialogEdicion();
 					  $("#bton_estado4").removeClass("miActivo");
					  $("#bton_estado1").removeClass("miActivo");
					  $("#bton_estado2").removeClass("miActivo");
					  $("#bton_estado10").addClass("miActivo");
					  
					  $("body").attr("data-estado","10");
					  _self.enbledDragDiagrama(false);
					  _self.deseleccionaLineaConexion();

 					if(_self.objCuadroAgrupacion)
					{
						_self.objCuadroAgrupacion.desagrupar();	
					}	


					  if(_self.lineaConexionSeleccionada)
						{
						 _self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
			 			_self.lineaConexionSeleccionada=null;
						}
					  	


 				break;

 	
 				default:
 					if(_self.objCuadroAgrupacion)
					{
						_self.objCuadroAgrupacion.desagrupar();	
					}



					  if(_self.lineaConexionSeleccionada)
						{
						 _self.lineaConexionSeleccionada.activarIndicacionSelecccionada(false);
			 			_self.lineaConexionSeleccionada=null;
						}
						  	
 
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

          		//quita los mensajes
          		if(_self.listaElementos[i].alertaMensaje)
          		{
          			_self.listaElementos[i].alertaMensaje.$elemento.hide(); 
          		}

				          //deseleccciona el elemento 
		          _self.listaElementos[i].$elemento.resizable( "option", { disabled: true } );
		          _self.listaElementos[i].$elemento.removeClass( "elemento_seleccionado" );
		          _self.listaElementos[i].$elemento.removeClass('ui-state-disabled');
          	
          	}




          	// ELEME SELECCIONADO
          	if(_self.$elementoSeleccionado!=null && _self.$elementoSeleccionado)
          	{

				_self.$elementoSeleccionado.resizable( "option", { disabled: false } );
				_self.$elementoSeleccionado.addClass( "elemento_seleccionado" );
          	}

          }// fin el funcion ->enbledDragDiagrama


          	// *****************
          	// ******
          	,modoOnlyReadBasico:function(){

	          	var _self=this;
	          	// elmina cion de boton
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

          	}



          /******************************
          **** habilitar el modo de solo lectura
          **** 
          *****************************/
          ,modoOnlyRead:function(){

	          	var _self=this;

	          		if(_self.objCuadroAgrupacion)
					{
						_self.objCuadroAgrupacion.desagrupar();	
					}						  	



	          	// elmina cion de boton
	          /*	$("#botones_panel_superior").hide();
	          	//$("#bton_toogle_menu_iz").hide();
	          	$(".left-small").hide();

	            $("body").attr("data-estado","3");
	            _self.estado=3;
			
	            estadoMenuAbierto=true;
	            miToogleMenuIzquierdo(null);
			*/
	           $("body").attr("data-estado","3");
	            _self.estado=3;

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


	            $("div[data-mielemento]").draggable("disable");

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



          /************
          **  creacr json
          */
          ,crearJSON:function(){
          	
          	var _self= this;
          	var manejo="{";
          	 	manejo+="'elementos':"+ 	  _self.getJSONStringListaElementos();
          	 	manejo+=",'lineas':"+ 	  	  _self.getJsonStringListaLineaConexion();
          	 	manejo+=",'lineas_partes':"+  _self.getJsonStringListaLineaConexionPartes();
          	 	manejo+=",'pagina':"+		  _self.getJSONStringPagina();
          	 	manejo+=",'cuadros':"+		  _self.crearJSONCuadros();
          		manejo+="}";



         	

         	   //manejo=_self.remplazarPalabras(manejo,"'","{{#-8-~#}}");
	           //manejo=_self.remplazarPalabras(manejo,"{{#-8-~#}}","\'");

	          	//console.info(manejo);
	          	
	          	var gato;
	          	console.log(manejo);
	          	eval("gato="+manejo);
	          	console.info(gato);


          		return manejo;
          }// fin function --> crearJSON



          // *******************
          // ****  cuadros ... 
          // **** 
          ,crearJSONCuadros:function(){

          	var _self= this;
          	var salida="[";
          	for(var i=0; i< _self.listaCuadroSeleccion.length ; i++)
          	{

          		var $elemento = _self.listaCuadroSeleccion[i].$elemento;

          	


          		var id_pagina ="#"+_self.listaCuadroSeleccion[i].$pagina.attr("id");
				var top =   $elemento.css("top");
				var left =  $elemento.css("left");
				var width = $elemento.css("width");
				var height =$elemento.css("height");

				var json="{";

					json+= "'id_pagina'" +":'"  +id_pagina+"',"
					json+= "'top'" +":'"  		+top+"',"
					json+= "'left'" +":'" 		+left+"',"
					json+= "'width'" +":'"  	+width+"',"
					json+= "'height'" +":'"  	+height+"'"

				json+="},";
				salida+=json; 
          	}

          	salida+="]";

          	var ff;
	       	eval("ff="+salida);
	       	console.log(ff);

			return salida;          
          	
          }// fin function --> crearJSONCuadros



          // **********************
          // ****** 
          // ****** 
          ,getJSONStringPagina:function(){
          	
          	var _self= this;
          	var salida="[";


          	for(var i= 0; i< _self.listaPaginas.length ; i++)
          	{
          		salida+="'"+_self.listaPaginas[i].attr("id")+"',";	
          	}
			
			salida+="]";          	

			

          	var ff;
          	console.log(salida);
	       	eval("ff="+salida);
	       	console.log(ff);

			return salida;


          }// fin  function -->getJSONStringPagina







          // ********************
          // lista de lineas 
          // forma el string de lista json de lineas 
          ,getJsonStringListaLineaConexion:function(){
          	

          	var _self= this;
          	var  salida="[";

          	for(i=0; i< _self.listaLineaConexion.length ; i++)
          	{


          		var $elemento =  _self.listaLineaConexion[i].$elemento;
          		var id_pagina =  _self.listaLineaConexion[i].$pagina.attr("id");
				var textoP = 	 _self.listaLineaConexion[i].$textoP.html();
				var id =  $elemento.attr("id");
				var top =  $elemento.css("top");
 				var left =  $elemento.css("left");
				//var transform =  $elemento.css("transform");
				var width =  $elemento.css("width");
				var height =  $elemento.css("height");
				var puntos_punto_moviblefin =$elemento.attr("data-puntos_punto_moviblefin");
				var puntos_movibleinicio    =$elemento.attr("data-puntos_movibleinicio");
				var estado_flechas    =_self.listaLineaConexion[i].estado_flechas;



				var json ="{";
					json+= "'id'"+		 ":'"	+id+"',"	
					json+= "'id_pagina'"+":'#"	+id_pagina+"',"	 
					json+= "'textoP'"	+":'"	+textoP+"',"	 
					json+= "'top'"		+":'"	+top+"',"	 
					json+= "'left'"		+":'"	+left+"',"	 
					//json+= "'transform'"+":'"	+transform+"',"	 
					json+= "'width'"	+":'"	+width+"',"	 
					json+= "'height'"	+":'"	+height+"',"
					json+= "'puntos_punto_moviblefin'"	+":'"	+puntos_punto_moviblefin+"',"
					json+= "'estado_flechas'"	+":'"	+estado_flechas+"',"
					json+= "'puntos_movibleinicio'"	+":'"		+puntos_movibleinicio+"'"
				json +="}";

				salida+=json+",";		


          	}

          	salida+="]";
          	var gato;

          	console.info(salida);
          	
          	eval("gato="+salida);
          	console.log(gato);
		


			return salida;
          }// fin function --> getJsonStringListaLineaConexion



		 // ********************
          // lista de lineas 
          // forma el string de lista json de lineas 
          ,getJsonStringListaLineaConexionPartes:function(){
          	

          	var _self= this;
          	var  salida="[";

          	for(i=0; i< _self.listaLineasPartes.length ; i++)
          	{

          		var $elemento =  _self.listaLineasPartes[i].$elemento;

          		var id_pagina =  _self.listaLineasPartes[i].$pagina.attr("id");
				var textoP = 	 _self.listaLineasPartes[i].$textoP.html();



				var id =  $elemento.attr("id");
				var top =  $elemento.css("top");
 				var left =  $elemento.css("left");
			
				var width =  $elemento.css("width");
				var height =  $elemento.css("height");
				
				var puntos_punto_1    =$elemento.attr("data-puntos_movible1");
				var puntos_punto_2    =$elemento.attr("data-puntos_movible2");
				var puntos_punto_3    =$elemento.attr("data-puntos_movible3");

				var estado_flechas    =_self.listaLineasPartes[i].estado_flechas;



				var json ="{";
					json+= "'id'"+		 ":'"	+id+"',"	
					json+= "'id_pagina'"+":'#"	+id_pagina+"',"	 
					json+= "'textoP'"	+":'"	+textoP+"',"	 
					json+= "'top'"		+":'"	+top+"',"	 
					json+= "'left'"		+":'"	+left+"',"	 
					json+= "'width'"	+":'"	+width+"',"	 
					json+= "'height'"	+":'"	+height+"',"
					json+= "'estado_flechas'"	+":'"		+estado_flechas+"',"
					json+= "'puntos_punto_1'"	+":'"	    +puntos_punto_1+"',"
					json+= "'puntos_punto_2'"	+":'"		+puntos_punto_2+"',"
					json+= "'puntos_punto_3'"	+":'"		+puntos_punto_3+"'"						 

					json +="}";

				salida+=json+",";		


          	}

          	salida+="]";
          	var gato;

          	console.info(salida);
          	
          	eval("gato="+salida);
          	console.log(gato);
		


			return salida;
          }// fin function --> getJsonStringListaLineaConexion




 		  //****************
          // string listaELEMtnoe
          ,getJSONStringListaElementos:function(){

          var salida="[";	

          	for(var i=0;i<_self.listaElementos.length; i++ )
          	{
          		var $mielemento = _self.listaElementos[i].$elemento;
          		var mielemento=	   _self.procesarString($mielemento.data('mielemento') );
				var descripcion=   _self.procesarString($mielemento.data('descripcion') );
				var registro=	   _self.procesarString($mielemento.data('registro') );
				var observacion=   _self.procesarString($mielemento.data('observacion') );
				var personal=	   _self.procesarString($mielemento.data('personal') );
				var resumen=	   _self.procesarString($mielemento.data('resumen') );
				var ver_personal=   _self.procesarString($mielemento.data('ver_personal') );

				
				var top = $mielemento.css("top");
				var left= $mielemento.css("left");
				var width=$mielemento.width();
				var height=$mielemento.height()
				var linea1=_self.creaJSONStringPuntosConexion(_self.listaElementos[i].linea1);
				var linea2=_self.creaJSONStringPuntosConexion(_self.listaElementos[i].linea2);
				var linea3=_self.creaJSONStringPuntosConexion(_self.listaElementos[i].linea3);
				var linea4=_self.creaJSONStringPuntosConexion(_self.listaElementos[i].linea4);
				var idPagina = _self.listaElementos[i].$pagina.attr("id");

				var miJson="{";
					miJson+="'mielemento'"+   ":'"  + mielemento+"'," 
					miJson+="'descripcion'"+  ":'"  + descripcion+"'," 
					miJson+="'registro'"+  	  ":'" + registro+"'," 
					miJson+="'observacion'"+  ":'" + observacion+"'," 
					miJson+="'personal'"+     ":'" + personal+"'," 
					miJson+="'resumen'"+      ":'" + resumen+"'," 
					miJson+="'ver_personal'"+ ":'" + ver_personal+"'," 
					miJson+="'id_pagina'"	+ ":'" + idPagina+"'," 
					miJson+="'top'"+		  ":'" + top+"'," 
					miJson+="'left'"+ 		  ":'" + left+"'," 
					miJson+="'width'"+ 		  ":'" + width+"'," 
					miJson+="'height'"+ 	  ":'" + height+"'," 
					miJson+="'linea1'"+ 	  ":" + linea1+","
					miJson+="'linea2'"+ 	  ":" + linea2+"," 
					miJson+="'linea3'"+ 	  ":" + linea3+"," 
					miJson+="'linea4'"+ 	  ":" + linea4+""  
				miJson+="}";

				salida+=miJson+",";

			}

			salida+="]";
		/*
			var gato ;

			console.log(salida);
			eval ("gato="+salida);
			console.info(gato);*/

		return salida;
          }// fin de la funcion 



          // ******************
          // creacion de puntos de conexion
          //@param linea JSON .. {$linea : null , $punto:null}
          ,creaJSONStringPuntosConexion:function(linea){
            var json ="{'linea' : null , 'punto':null, 'tipo':null}"; 

            	if(linea!=null && linea.$linea!=null && linea.$punto!=null )
            	{
            		// tipo de punto
            		var clasePunto="";
            		var idLinea ="";//
            		
            		//es una linea recta
            		if(linea.tipo == "linea")
            		{

	            		if(linea.$punto.hasClass("punto_moviblefin"))
	            		{
	            			clasePunto=".punto_moviblefin";
	            		}
	            		else{
	            			clasePunto=".punto_movibleinicio";
	            		}

	            		if(linea.$linea && linea.$linea.$elemento)
	            			idLinea = "#"+linea.$linea.$elemento.attr("id");

            		}
            		else if(linea.tipo =="linea_partes") 
            		{

            			if(linea.$punto.hasClass("linea_partes_punto_movible1"))
            			{
            				clasePunto=".linea_partes_punto_movible1";
            			}
            			else if(linea.$punto.hasClass("linea_partes_punto_movible2"))
            			{
            				clasePunto=".linea_partes_punto_movible2";
            			}
            			else if(linea.$punto.hasClass("linea_partes_punto_movible3"))
            			{
            				clasePunto=".linea_partes_punto_movible3";
            			}

            			if(linea.$linea && linea.$linea.$elemento)
            				idLinea = "#"+linea.$linea.$elemento.attr("id");

            		}



            		json="{'linea' : '"+idLinea+"' ,'punto':'"+clasePunto+"','tipo':'"+linea.tipo+"'}";

            	}

            return json;
          }//




          /// procesar palabra
          // evita comillas dobles escapa las comiilas simples
          , procesarString: function(mensaje)
          {
	       	var _self=this;

	          if(mensaje)
	           {

	           mensaje=	_self.remplazarPalabras(mensaje,"'","{{#-8-~#}}");
	           mensaje=_self.remplazarPalabras(mensaje,"{{#-8-~#}}","\\'");

	           mensaje=	_self.remplazarPalabras(mensaje,"\"","{{#-8-~#}}");
	           mensaje=_self.remplazarPalabras(mensaje,"{{#-8-~#}}","\\'");

	           }
	           else{
	           	mensaje="";
	           }


	           return mensaje;


          }// fin funcion --> procesarString 



          // funcion rempllazar letrass
          //
          ,remplazarPalabras:function(mensaje,palabraRemplazar, nuevaPalabra)
          {

          	if(mensaje)
          	{
				do{
			    mensaje = mensaje.replace(palabraRemplazar,nuevaPalabra);

				} while(mensaje.indexOf(palabraRemplazar) >= 0);
          	}
          	return mensaje;
          }// fin funcion -->remplazarPalabras



          ,getGET:function(){
			    var url= location.search.replace("?", "");
			    var arrUrl = url.split("&");
			    var urlObj={};   
			    for(var i=0; i<arrUrl.length; i++){
			        var x= arrUrl[i].split("=");
			        urlObj[x[0]]=x[1]
			    }
			    return urlObj;
			}


          // **************** 
          // leeer parametros limpios por get
          //
          ,leerGET:function(){

          	var _self =this;
          	var edicion =false;// si esta editando u observando .. true =>para habilitar la edicion o false para lo contrario
         
          	parametros =_self.getGET();
 

			var url_solicita=URLSOLICITUD;

			if(parametros && parametros.retorno)
			{
				$("#bton_regresar").attr("href",URL__SERVIDOR1+"/"+parametros.retorno);
				
      		}


          	if(parametros  && parametros.uid && parametros.action)
          	{
          		
          		if( (parametros.action+"").toLowerCase()=="edit"
          			|| (parametros.action+"").toLowerCase()=="view")
	          		{
	          			var id_nodo=	parametros.uid+"";
	          			_self.nitNodo = id_nodo;

	          				
						switch((parametros.action+""))
						{
							case "edit":
									edicion=true;
										
							break;	

							case "view":
									edicion=false;
									_self.modoOnlyReadBasico();	
							break;		
						}	

						

	          			$.ajax(
						 	{
							 	data:{
	  									nid:id_nodo

							 		  }
							 	,dataType :'json'	  
							 	,url:url_solicita
							 	,type:'POST'
							 	,success:function(data){
					    			
					    			if(data)
					    			{ 
					    				console.info(":)");
					    				console.info(data.data);
					    				//if(data.length>0)
					    				{
					    					_self.construccionAllFromJsonJSON(data.data);
					    					
					    				}
					    				if(edicion==false)
					    				{

					    					_self.modoOnlyRead();
					    				
					    				}
					    				_self.bandera_actualizacion=true;
					    			}//edicion
					    			else{
					    				alert("Vuelva a intentar cargarlo");
					    			}
					  			}
					  			,error:function(data)
					  			{
					  				alert("Vuelva a intentar cargarlo");
					  			}
					  		});

	          		}


          	}	

					 

          }// leerGET


          // *************
          //guara los dtos implementando.. ajx	
          ,guardarDatosJson:function(){

          		var _self=this;
          		var ulr ="";
          		var json= _self.crearJSON();
          		var option={};

          			//actualizando
          		/*if(_self.bandera_actualizacion)
          		{
          			option={
          				"nid":	_self.nitNodo,
          				"text":json
          			};

          			 ulr ="http://localhost/triki1/public/flujograma/actualizar/json";
          		}
          		// guardando uno nuevo flujograma
          		else{*/
          			option={
          				"nid":	_self.nitNodo,
          				"text":json
          			};

          			ulr =URL_GUARDAR;
          		//}


          		///abrir el preload
          		$('#myModal_preload').foundation('reveal', 'open',{
						    			close_on_background_click: false


						    		});


      			$.ajax(
					 	{
						 	data:option
						 	,url:ulr
						 	,type:'POST'
						 	,success:function(data){
				    			$('#myModal_preload').foundation('reveal', 'close');
				    			if(data)
				    			{
				    			 console.log(data);
				    			 alert("se ha almacenado");		
				    			}//edicion
				    			else{
				    				alert("Vuelva a intentar cargarlo");
				    			}

				  			}
				  			,error:function(data)
				  			{
				  				$('#myModal_preload').foundation('reveal', 'close');
				  				alert("Vuelva a intentar cargarlo");
				  			}
				  		});


          }//fin funcion -->guardarDatosJson






	///retonr los elementos de  $Q Jquery , que representa los diagramas actuales .y cuadros s
	   , getDiagramasPaginaActual:function(){

	   	 return this.$paginaActual.find("div[data-mielemento] , div.caudro_lineal");
	   } 



	   // indica si dos div ha coliscionad 
	   // indica si esta contenida dentor del segundo div en parametros .. .sin tener encuenta el DOM solo si esta encima
	   //
         ,estaDentroSegundo:function ($div1, $dvi2) {
		      var x1 = $div1.offset().left;
		      var y1 = $div1.offset().top;
		      var h1 = $div1.height();
		      var w1 = $div1.width();
		      
		      var b1 = y1 + h1;
		      var r1 = x1 + w1;
		      var x2 = $dvi2.offset().left;
		      var y2 = $dvi2.offset().top;
		      var h2 = $dvi2.height();
		      var w2 = $dvi2.width();
		      
		      var b2 = y2 + h2;
		      var r2 = x2 + w2;
 
			 // console.log(x1+" "+y1+"->"+h1+"-"+w1+" -- "+b1+" -"+r1);
			//  console.log(x2+" "+y2+"->"+h2+"-"+w2+" -- "+b2+" -"+r2);
		      if (x1>x2 && y1>y2 && b1<b2 && r1<r2) 
		      	return true;
		      
		      return false;
		    }// function --> collision 



		    ///
		    // actualizacion del los elementos de agurpacion 
		    , cargarElementosAgrupacion:function(){

		    	var _self= this;

		    	$agrupador = _self.$paginaActual.find(".seleccionados_grupos");

		    	$agrupador.draggable({
		    		drag:function(event, ui)
			    		{
			    			if(_self.objCuadroAgrupacion)
			    			{
			    				_self.objCuadroAgrupacion.actualizarELementosSeleccionados();
			    			}
			    			
			    		}
		    	});

		    	
		    	/*
				$agrupador.resizable({
				        // autoHide: true 
				          handles: "bton_edicion,bton_ver_personal,n, e, s, w, ne, se, sw, nw, all" 
				          ,resize:function(event, ui)
				           {           	  

				              
				           }

				          ,stop:function( event, ui )
				          {
				          	// 
				          } 
					});*/


				setTimeout(function(){
					$agrupador.find("div").addClass("parte_seleccion");
				},500);

		    }// function -->cargarElementosAgrupacion



		    // actualiza 
		    // la poscion de todas las lineaspartes exsitene en actaul
		    ,actualizacionAllLineasPartes:function(){
		    	
		    	var _self=this;

		    	for(var i=0; i<_self.listaLineasPartes.length ; i++)
		    	{
		    		_self.listaLineasPartes[i].actualizarPoscionCentralizado();	
		    	}

		    }//actualizacionAllLineasPartes


		    // mostrar css activo 
		    //
		,mostrarAlineacionElementosAgrupados:function(activo){
			if(activo)
			{

				$("#bton_centrar_horizontal").removeClass("miActivo");
				$("#bton_centrar_vertical").removeClass("miActivo");
			}
			else{
				$("#bton_centrar_horizontal").addClass("miActivo");
				$("#bton_centrar_vertical").addClass("miActivo");
				
			}
		}// fin function ---> mostrarAlineacionElementosAgrupados		    
			


		///
		// actualiza las elementos con sus posicion 
		,actualizaElementoAllPositionByPagina:function(){
			var _self=this;

			for(var p=_self.listaPaginas.length-1; p>=0 ; p--)
			{
				_self.cambiaPagina(p);
				var $listaDiagramas = _self.$paginaActual.find("div[data-mielemento]");
			
				for(var i = 0; i< $listaDiagramas.length ; i++)
				{
					var diagramaObj= _self.getDiagramaF1ByDOM($listaDiagramas[i]);
					if(diagramaObj)
					{
						diagramaObj.actualizarPuntos();	
					
					}	
				}//fin de reccor diagrama dentro de la pagina				



			}// fin de recorrida da paginas 

		}





		///
		// actualiza las elementos con sus posicion 
		,actualizaListaConexionSVG:function(){
			var _self=this;

			for(var i = 0; i< _self.listaLineaConexion.length ; i++)
				{
					var diagramaObj= _self.listaLineaConexion[i];
					if(diagramaObj)
					{
						diagramaObj.actualizarPositionFlechas();	
					
					}	
				}//fin de reccor diagrama dentro de la pagina				

		}




		///
		// actualiza las elementos con sus posicion 
		,actualizaListaPartes:function(){
			var _self=this;

			for(var i = 0; i< _self.listaLineasPartes.length ; i++)
				{
					var diagramaObj= _self.listaLineasPartes[i];
					if(diagramaObj)
					{
						diagramaObj.actualizarPositionFlechas();	
					
					}	
				}//fin de reccor diagrama dentro de la pagina				

		}





		// GET  linea actual Partes
		,getLineaActualPartes:function(){
			var _self=this;
			return _self.objLineaPartes;
		}//	



		 // recibe el 
		 // -1    totalamente desahabilitado 
		 // 0 --> ningun elemento ..  
		 // 1 --> muestra flecha izquierda
		 // 2 --> muestra flecha derecha
		 // 3 --> muestra las  dos flechas  
		 ,actualizaBotonesFlechas:function(posicion){

		 	switch(posicion+"")
		 	{

		 		case "-1":
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").removeClass("miActivo1");
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").addClass("miActivo");
		 		break;

		 		case "0":
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").addClass("miActivo1");
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").removeClass("miActivo");
		 			
		 		break;



		 		case "1":
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").addClass("miActivo1");
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").removeClass("miActivo");
		 			$("#bton_flecha_p1").removeClass("miActivo1");
		 		break;


		 		case "2":
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").addClass("miActivo1");
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").removeClass("miActivo");
		 			$("#bton_flecha_p2").removeClass("miActivo1");
		 		break;



		 		case "3":
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").addClass("miActivo1");
		 			$("#bton_flecha_p1,#bton_flecha_p2,#bton_flecha_p3").removeClass("miActivo");
		 			$("#bton_flecha_p3").removeClass("miActivo1");
		 		break;

		 	}

		 }// fin actualizaBotonesFlechas



		 /// cambia el estadoFlecha .. segun eleemnto seleccionado 
		,actualizaEstadoRealFlechas:function(estadoN){
			var _seft= this;

			if(_seft.estado==10)
			{
				if(_seft.objLineaPartes)
				{

					if(_seft.objLineaPartes.estado_flechas==estadoN)
					{
						estadoN="0";
					}
					_seft.objLineaPartes.estado_flechas=estadoN;
					_seft.objLineaPartes.actualizarVisualmente();
					_seft.actualizaBotonesFlechas(estadoN);

				}
				
			}
			else if(_seft.estado==2)
			{

				if(_seft.lineaConexionSeleccionada)
				{


					if(_seft.lineaConexionSeleccionada.estado_flechas==estadoN)
					{
						estadoN="0";
					}
					_seft.lineaConexionSeleccionada.estado_flechas=estadoN;
					_seft.lineaConexionSeleccionada.actualizarVisualmente();
					_seft.actualizaBotonesFlechas(estadoN);
					
				}
			}


		}//actualizaEstadoRealFlechas

	 };

};













