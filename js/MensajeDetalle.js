function MensajeDetalle(){

	return {


		$$padre: null
		,$principal:null
		,$cabera:null
		,$contenidos:null
		,$titulo:null
		,$bottom:null
		,$descripcion:null
		,$registro:null
		,$observacion:null
		,$personal:null

		,$diagrama:null// guarddae ele elemtn diagrama

		/**************
		*
			crea la parte visual 
 		**/
		,dibujar:function(){


			var _seft=this;

			_seft.$principal =$("<div class='gritter-notice-wrapper' data-foco='N'>");
			_seft.$cabera =$("<div class='gritter-top'> "
						     +"  <img src='img/bton1.png' style='cursor:pointer;padding-top:1px;' class='gritter_cerrar' > "    
						     +" </div>");

			_seft.$contenidos =$("<div style='max-height: 469px;overflow: auto;'>");


			_seft.$titulo =$(" <div style='padding-top:15px' class='gritter-item'> "
	                    +"   <span class='gritter-title'></span> "
			        //    +"   <span class='contenido_p'> </span>"
			        +"</div>");

			_seft.$bottom =$("<div class='gritter-bottom'></div>");

			_seft.$descripcion=$(" <div class='gritter-item'> "
		                    +"   <span class='gritter-title'>Descripcion</span><br> "
				            +"   <span class='contenido_p'> </span>"
				        +"</div>");

			_seft.$registro=$(" <div class='gritter-item'> "
		                    +"   <span class='gritter-title'>Registros</span><br> "
				            +"   <span class='contenido_p'> </span>"
				        +"</div>");

			_seft.$observacion=$(" <div class='gritter-item'> "
		                    +"   <span class='gritter-title'>Observaciones</span><br> "
				            +"   <span class='contenido_p'> </span>"
				        +"</div>");

			_seft.$personal=$(" <div class='gritter-item'> "
		                    +"   <span class='gritter-title'>Personal</span><br> "
				            +"   <span class='contenido_p'> </span>"
				        +"</div>");



			//enlazar a elemnto DOM
			_seft.$principal.append(_seft.$cabera);
			_seft.$principal.append(_seft.$contenidos);

			_seft.$contenidos.append(_seft.$contenidos);
			
			_seft.$contenidos.append(_seft.$titulo);
			_seft.$contenidos.append(_seft.$descripcion);
			_seft.$contenidos.append(_seft.$registro);
			_seft.$contenidos.append(_seft.$observacion);
			_seft.$contenidos.append(_seft.$personal);


			_seft.$principal.append(_seft.$bottom);

			//guarada en el padre
			//_seft.$$padre.append(_seft.$principal);
			$("body").append(_seft.$principal);

			_seft.$principal.draggable();
			_seft.$principal.hide();
			//_seft.$diagrama.parent().append(_seft.$principal);

		}//function -->dibujar



		/**************************
		*
		**/
		,mostrar:function(){
			var _seft=this;

			if(_seft.$diagrama)
			{

				var x = _seft.$diagrama.offset().left + _seft.$diagrama.width();
				var y = _seft.$diagrama.offset().top ;


				_seft.$principal.show();
				_seft.$principal.css(	
							{left:x
							,top:y});


			}

		}// fin functtion--> mostrar





		/***************************
		* enlace eventos 
 		*/
 		,eventosEnlace:function(){

 			var _seft=this;
 			//cerar al dar click en boton
 			_seft.$cabera.find(".gritter_cerrar").on('click',function(e){
 				_seft.$principal.hide();
 			});


 			//se obtine el foco
 			_seft.$principal.on('mouseover',function(e){
 				console.log("mouseover e");
 					_seft.$principal.attr( "data-foco",'S');
 			});


 			//se obtine el foco
 			_seft.$principal.on('mouseout',function(e){
 				console.log("mouseout e");
 					_seft.$principal.attr( "data-foco",'N');
 			});

 				//se obtine el foco
 			_seft.$principal.on('click',function(e){
 				console.log("click e");
 				
 			});
 		}// function ->eventosEnlace



 		/**********************
 		** 
 		*/




 		/*************
 		**
 		 actualizar contenidos
 		********/
 		,actualizarContenidos:function()
 		{	
 			var _seft=this;

 			if(_seft.$diagrama!= null)
 			{

 					var personal= _seft.$diagrama.data('personal');
 					var descripcion= _seft.$diagrama.data('descripcion');
					var registro=_seft.$diagrama.data('registro');
					var observacion =_seft.$diagrama.data('observacion');
					var resumen= _seft.$diagrama.data('resumen');


					_seft.$titulo.find(".gritter-title").html(resumen);
					_seft.$descripcion.find(".contenido_p").html(descripcion);
					_seft.$registro.find(".contenido_p").html(registro);
					_seft.$observacion.find(".contenido_p").html(observacion);
					_seft.$personal.find(".contenido_p").html(personal);



 			}// 

 		}

	};

};