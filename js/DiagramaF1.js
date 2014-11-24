function DiagramaF1 (){

	return{

			$pagina:null
			,$c1:null
			,$c2:null
			,$c3:null
			,$c4:null

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
				
				_self = this;
				
				if(!$punto1)
					return false;


				//dar propiedades de over
					$punto1.droppable({
						drop:function(event, ui) {
							if(ui.draggable && ui.draggable.length>0)
							{
								
								var $punto = _self.$pagina.find(ui.draggable[0])
								$punto.find("img").hide();
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



	};
};