<!doctype html>
<html class="no-js" lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <link rel="stylesheet" href="{{ URL::asset('css/foundation.css')}}" />
      <link rel="stylesheet" href="{{ URL::asset('css/jquery-ui.css')}}" />
      <link rel="stylesheet" href="{{ URL::asset('css/jquery-ui.structure.css')}}" />
      <link rel="stylesheet" href="{{ URL::asset('css/jquery-ui.theme.css')}}" />
      <!--<link rel="stylesheet" href="css/spectrum.css" />-->


      <link rel="stylesheet" href="{{ URL::asset('css/micss.css')}}" />
      <link rel="stylesheet" href="{{ URL::asset('css/font/foundation-icons.css')}}" />
      
      
      <script src="{{ URL::asset('js/vendor/modernizr.js')}}"></script>
      <script src="{{ URL::asset('js/snap.svg.js')}}"></script>
      

      

    </head>


    <style>


    .paginas{
      width:5000px; height:5000px;position:relative; 
       cursor:default;
       border-top: 1px solid rgb(212, 218, 218);
       border-left: 1px solid rgb(212,218,218); 
       background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAT0lEQVQ4T2N8/fr/fwYiADfPP4avX5gIqmQEGSgqyshISOW373//c3EyE1Q3aiDukBwNQ5xhQ/1kAwpsQomaFHnqu3A06+EM/9GcQr+cAgBGqZrSrFyxegAAAABJRU5ErkJggg==); background-color: rgb(255, 255, 255);

    }


  .imagen_punto_mobil{
     width: 200%;
      height: 200%;
      position: absolute;
      max-width: none;
      top: -40%;
      display: none
  }

      .elemente_menu_izq{
          width: 65px;
          height: 65px;
       
      }

      #botones_panel_superior{


      }
     #botones_panel_superior a {
      background-color: #e7e7e7;
      border-color: #b9b9b9;
      color: #235695;
    }


     .descripcion_observada{
  
      width: 99%;
  
      text-align: center;
      position: absolute;
      top: 15%;
      line-height: 0.9;
      font-size: small;
      padding: 0px 10px;
      background: transparent;
     /* margin-left: 5px;
      margin-right: 5px;
      */
      margin: auto;
      overflow: hidden;

      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
     } 
  
    .descripcion_observada:focus{
      background-color:#E7E7E7;
    }


    .descripcio_observada_con_persona{
      top: 42% !important;
    }



     div[data-mielemento='n3'] div.descripcion_personaje{
      height: 19%;
      width: 100%;
      position: absolute;
      top: 80%;
      line-height: 0.9;
      font-size: small;
      padding: 2px 5px;
      background: #235695;
      margin-left: 0px;
      margin-right: 5px;
      overflow: hidden;
      color: white;
      display: block;
      /* align-content: center; */
      text-align: center;
     } 

     div.descripcion_personaje
    {
    display: none;      
    }


    #grupo_botones_pagina a.miboton{

      font-size: 28px;
      padding-top: 2px;
    }

  .tab-bar{
    background: #235695;
  }


     #botones_panel_superior>ul>li>a{
      font-size: 34px;
      padding: 2px 3px;
      margin-left: 4px;
      border-radius: 5px;
      width: 30px;
      margin-top: 8px;
      height: 30px;
    }

    #botones_panel_superior>ul>li>a:hover{
      color: #5F89BD;
      background:#fff;
    }



  #botones_panel_superior>ul>li>a.miActivo, a.miActivo
  {
  background: #124759;
  color: #E5F3F8;
  border: none;
  opacity: 0.8;
  }
  
  /*#botones_panel_superior>ul>li>a.miActivo:hover, a.miActivo:hover
  {
 color: #5F89BD;
      background:#fff;
  }*/




    #dialog_diagrama label{
      color:#235695;
    }


.ui-button-text{
  font-size: 12px;
}



.pagination-centered{

  padding-top:4px; 
}

      svg.linea_{

        pointer-events:none;
      }

      line {
        pointer-events:auto;
      }
      


      svg.linea_ line {
        pointer-events:auto;
      }

      body[data-estado='2'] svg.linea_ line:hover,
      body[data-estado='1'] svg.linea_ line:hover,
      body[data-estado='4'] svg.linea_ line:hover {
        cursor: pointer;
      }

      .marco_elementos_m_iz li:hover{
           background: #B6B8AB;
          cursor: pointer;
      }

      .marco_elementos_m_iz li {
        margin-top: 5px;
        margin-left:5px; 
        display: block;
        width: 65px;
        height: 65px;
        padding: 0px;
        border: none;

      }


      body[data-estado='1']
       .puntos_conexion
       {
        opacity: 0 !important;
        z-index: 1 !important;
       }
        
       body[data-estado='1']
         .ui-resizable-handle
        {

        }

      body[data-estado='2']
         .ui-resizable-handle
        {
          display: none !important
        }


         body[data-estado='4']
          div[data-mielemento]   .ui-resizable-handle,
          body[data-estado='4']
         .puntos_conexion 
        {
          display: none !important
        }


      body[data-estado='2'] .puntos_conexion
      
       {
        display:block !important;
       }

        
        body[data-estado='3'] .puntos_conexion,
        body[data-estado='3'] .ui-resizable-handle
        {
          display: none !important;
        }

       /*cursor*/

       body[data-estado='2'] .paginas
       {
          cursor: url('img/puntero1.cur') ,auto;
       }

      body[data-estado='4'] .paginas{
          cursor: url('img/puntero2.cur') ,auto;
       }


       .icon3{

        font-size: 28px;
        background: rgb(231, 231, 231);
        border-radius: 6px;
        padding: 1px;
        vertical-align: middle;
        color: rgb(35, 86, 149);

        box-shadow: 2px 2px 5px #999;
       }


       .active_letra{
        opacity: 0.3;
       }

    </style>
  


  <body data-estado='1'>


<!--
<div class="gritter-notice-wrapper" data-foco="S">
 
      <div class="gritter-top"> 
        <img src="img/bton1.png" style="cursor:pointer" class="gritter_cerrar" >     
      </div>
      
      <div style="max-height: 469px;
overflow: auto;">
        <div class="gritter-item">
             
               <span class="gritter-title">This is a regular notice!</span><br>
               <span class="contenido_p">This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.
              </span>
              
        </div>
        
         <div class="gritter-item">
             
               <span class="gritter-title">This is a regular notice!</span><br>
               <span class="contenido_p">This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.
              </span>
              
        </div>


         <div class="gritter-item">
             
               <span class="gritter-title">This is a regular notice!</span><br>
               <span class="contenido_p">This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.
              </span>
              
        </div>


         <div class="gritter-item">
             
               <span class="gritter-title">This is a regular notice!</span><br>
               <span class="contenido_p">This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.
              </span>
          </div>    
      
      </div>

        <div class="gritter-bottom"></div>
  </div>
-->
   
    <div id="myModal_eliminacion" class="reveal-modal" data-reveal
    style="overflow: hidden;
      
        border-radius: 2px;
        border: 1px solid rgb(204, 204, 204);
        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 4px;
        color: rgb(68, 68, 68);
        width: 310px;
        height: 136px;
        visibility: visible;
        background-color: rgb(255, 255, 255);">
     
     

      <div class="noty_bar noty_type_confirm" id="noty_51416258323610870"><div class="noty_message" style="font-size: 13px; line-height: 16px; text-align: center; padding: 10px; width: auto; position: relative;"><span class="noty_text">¿Esta seguro que desea eliminar?</span></div>
      <div class="noty_buttons" style="text-align: center;padding: 5px;  border-top-width: 1px; border-top-style: solid; border-top-color: rgb(204, 204, 204); background-color: rgb(255, 255, 255);">

      <button class="btn btn-primary" id="myModal_eliminacion_modbutton0" style="padding: 14px;margin-left: 0px;">Aceptar</button>
      <button class="btn btn-danger" id="myModal_eliminacion_button1" style="padding: 14px;margin-left: 5px;">Cancelar</button></div>
    </div>

    </div>
    


  <div id="myModal_eliminacion_pagina" class="reveal-modal" data-reveal
      style="overflow: hidden;
        
          border-radius: 2px;
          border: 1px solid rgb(204, 204, 204);
          box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 4px;
          color: rgb(68, 68, 68);
          width: 310px;
          height: 145px;
          visibility: visible;
          background-color: rgb(255, 255, 255);">
       
       

        <div class="noty_bar noty_type_confirm" id="noty_51416258323610870"><div class="noty_message" style="font-size: 13px; line-height: 16px; text-align: center; padding: 10px; width: auto; position: relative;"><span class="noty_text">¿Esta seguro que desea eliminar la página actual?</span></div>
        <div class="noty_buttons" style="text-align: center;padding: 5px;  border-top-width: 1px; border-top-style: solid; border-top-color: rgb(204, 204, 204); background-color: rgb(255, 255, 255);">

        <button class="btn btn-primary" id="myModal_eliminacion_pagina_button0" style="padding: 14px;margin-left: 0px;">Aceptar</button>
        <button class="btn btn-danger" id="myModal_eliminacion_pagina_button1" style="padding: 14px;margin-left: 5px;">Cancelar</button></div>
      </div>

    </div>
    



    <div id="dialog_confirmacion_pagina" title="Eliminar Página" style="display:none">
      <p>
        <span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;">
        </span>
        ¿Esta seguro que desea eliminar la página actual?
      </p>
    </div>


<!-- dalogo  configuracion de linea -->
  <div id="dialog_configuracion_linea" title="Linea" style="display:none">
    <table style="width: 100%">
    <thead>
      <tr>
        <th width="10"></th>
        <th width="80"></th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Color</td>
        <td>
          
           <select name="filesA" id="filesA">
            <option value="jquery" data-class="ui-icon-script"><span class="fi-play-circle"></span>></option>
            <option value="jquerylogo" data-class="ui-icon-image"></option>
            <option value="jqueryui" data-class="ui-icon-script">ui.jQuery.js</option>
            <option value="jqueryuilogo" selected="selected" data-class="ui-icon-image">jQuery UI Logo</option>
            <option value="somefile" disabled="disabled" data-class="ui-icon-help">Some unknown file</option>
          </select>


        </td>
      
      </tr>
      <tr>
        <td>fondo texto</td>
        <td></td>
      </tr>
     </table>  

     
   </div>
<!-- fin de dialogo -->



   <div class="off-canvas-wrap " data-offcanvas >
      <div class="inner-wrap">
        <nav class="tab-bar" id="barra_navegacion_1">
          <section class="left-small">
            <a class="left-off-canvas-toggle menu-icon" 
             id="bton_toogle_menu_iz" onclick="return  false " href="#" aria-expanded="false"><span></span></a>
          </section>


          <section class="middle tab-bar-section" style="cursor:default">
        <div class="button-bar" id="botones_panel_superior">
          <ul class="button-group [radius round]">
            <li class="">
              <a href="#" id="bton_estado1" onclick="false" 
              class="botonFondo miActivo [tiny small large] button [alert success secondary] [disabled]"
              style="background-image:url({{URL::asset('img/icon1.png')}}); background-size: 71%;
                background-repeat: no-repeat;
                background-position: 50%;"    
              >
              
              </a></li>
            
              <li>
                <a href="#" onclick="false" id="bton_estado2" 
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url({{URL::asset('img/icon2.png')}}) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>

              <li>
                <a href="#" onclick="false" id="bton_estado4" 
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url({{URL::asset('img/icon4.png')}}) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>



              <li>
                <a href="#" onclick="false" id="bton_Guardar" alt="guardar"
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url({{URL::asset('img/icon_save.png')}}) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>

        
          </ul>
     



              <div class="small-4 large-4 columns" style="float:right" id="btone_derecho">
                 <div class="button-bar" id="botones_panel_inferior">
                    <ul class="button-group [radius round]">
                      <li class="">
                        <a href="#" onclick="false"  
                        id="bton_nueva_pagina"
                         class="miboton [tiny small large] button [alert success secondary] [disabled]">
                        <span style="font-size:29px;" class="fi-page-add"></span>
                        </a></li>
                        
                        <li><a href="#" 
                          onclick="false"  
                          id="bton_elimina_pagina"
                          class="miboton [tinmibotony small large] button [alert success secondary] [disabled]">
                          <span style="font-size:29px;" class="fi-page-delete">
                            
                          </span></a>
                        </li>

                  
                    </ul>
              
                  </div>

             </div>
        </div>

        </nav>




        <div class="left-off-canvas-menu" id="menu_izquierdo" style="background:#F2F2F2;z-index:99999999; overflow-y:visible">
          <ul class="small-block-grid-3 medium-block-grid-3 large-block-grid-3 marco_elementos_m_iz" style="margin:5px">
            
            <li class="has-tip"
            data-tooltip aria-haspopup="true"  title="Conector" >
            <svg  id="ele_menu_izq_conector1" class="elemente_menu_izq "  data-elemento="n1"
            data-mitipo="diagrama"
             ></svg></li>
            

            <li class="has-tip"
            data-tooltip aria-haspopup="true"  title="Terminal">
            <svg  id="ele_menu_izq_conector2" class="elemente_menu_izq"  data-elemento="n2"
             data-mitipo="diagrama"></svg></li>


            <li class="has-tip" 
            data-tooltip aria-haspopup="true"  title="Actividad"
            >
            <svg  id="ele_menu_izq_conector3" class="elemente_menu_izq" data-elemento="n3"
              data-mitipo="diagrama" ></svg></li>
            

            <li class="has-tip" data-tooltip aria-haspopup="true"  title="Proceso">
              <svg  id="ele_menu_izq_conector4" class="elemente_menu_izq"   data-elemento="n4"
               data-mitipo="diagrama" ></svg></li>
            
            <li class="has-tip" data-tooltip aria-haspopup="true"  title="Conector de Página">
              <svg  id="ele_menu_izq_conector5" class="elemente_menu_izq " data-elemento="n5"
               data-mitipo="diagrama" ></svg></li>

            <li class="has-tip" data-tooltip aria-haspopup="true"  title="Decisión">
              <svg  id="ele_menu_izq_conector6" class="elemente_menu_izq"  data-elemento="n6"
               data-mitipo="diagrama" ></svg></li>
            
            <li class="has-tip" data-tooltip aria-haspopup="true"  title="Documento">
              <svg  id="ele_menu_izq_conector7" class="elemente_menu_izq" data-elemento="n7"
              data-mitipo="diagrama"> </svg></li>
           
            <li  class="has-tip" data-tooltip aria-haspopup="true"  title="Multidocumento">
              <svg  id="ele_menu_izq_conector8" class="elemente_menu_izq"  data-elemento="n8"
              data-mitipo="diagrama"></svg>
            </li>
          </ul>


         <div id="dialog_diagrama" title="" style="width:100%">
                    <label for=""><b>Descripcion :</b></label>
                    <textarea name="" id="dialogo_descripcion"  >
                    </textarea>
           
                     <label for=""><b>Registro :</b></label>
                     <textarea name="" id="dialogo_registro" >
                     </textarea>
           
                    <label for=""><b>Observaciones :</b></label>
                     <textarea name="" id="dialogo_observacion" >                      
                    </textarea>

                    <label for=""><b>Personal :</b></label>
                     <textarea name="" id="dialogo_personal" >                      
                    </textarea>
                       
        </div>

        </div>






        <div  style="overflow:none;" id="contenedor_principal">
          <div style="width:100% ;background: #ddd;
          height: 6px;">
          </div>

            <!--  UBICACION DE LA PAGINADO-->
            <div style="width:100%;height:36px ;background: #FFFFFF;;
            ">
         
            <h5  id="nombre_pagina" style="margin-left:10px">pag. 1</h5>
          </div>




          
          <div id="contenedor_principal_pag" 
           style="overflow:auto; background:#66A8CC; margin : 10px; border-top: 1px solid rgb(212, 218, 218); border-left: 1px solid rgb(212,218,218); " >










          <!--  inicio barra-->
           <!-- herramienta -->
                   <ul id="herramientas_grupo_botones2" class=" button-group [radius round]" style="height: 40px;display:none">               
                      <li>
                        
                        <div id="panel_editar_letras2"  
                          style="width: 223px;"      
                         class="panel callout radius panel_grupo_botones">
                         
                         <table style="width: 100%">
                          <thead>
                            <!--
                            <tr>
                              <th width="10"></th>
                              <th width="70">
                               <a href="#" class="button split">Linea<span data-dropdown="drop"></span></a><br>
                                  <ul id="drop" class="f-dropdown" data-dropdown-content>
                                    <li><a href="#">Linea</a></li>
                                    <li><a href="#">Flecha</a></li>
                                    <li><a href="#">Rayas</a></li>
                                  </ul>
                              </th>
                              
                            </tr>-->
                          </thead>
                          <tbody>
                            <tr>
                              <td>Texto</td>
                              <td><input type="text" id="input_texto" style="width: 134px;
margin: 0px;"></td>
                            
                            </tr>
                    
                          </tbody>
                        </table>  
                            
                     </li> 


                      <li>
                        <a id="boton_color_grupo2"  class="fi-credit-card icon2 icon3 mi_h1_" title="editar letra"
                         alt="editar letra">
                        </a>                
                      </li>

                   


                      <li>
                        <a id="boton_delete_grupo2"    class="fi-x icon2 icon3  mi_h3_" title="eliminar" alt="eliminar">
                          
                        </a>
                      </li> 

                      

                      <li>
                        <a id="herramientas_grupo2" class="fi-arrows-in main icon2  mi_h4_ "  style="curso:move;display:none" title="" alt="">
                         
                        </a>
                      </li> 
                  </ul>
                  <!--fin  herramienta -->
                    


          <!-- fin barra-->











          <!--  inicio barra-->
           <!-- herramienta 
                   <ul id="herramientas_grupo_botones" class=" button-group [radius round]" style="height: 40px">               
                      <li>
                        
                        <div id="panel_editar_letras"  style="display:none" class="panel callout radius panel_grupo_botones">
                         
                         <table style="width: 100%">
                          <thead>
                            <tr>
                              <th width="10"></th>
                              <th width="70"></th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Color</td>
                              <td><input type="text" id="panel_tipo_color" ></td>
                            
                            </tr>
                              
                        
                            <tr>
                              <td>fondo texto</td>
                              <td>

                              <input type="text" id="panel_fondo_color" >
                              </td>
                            </tr>
                        

                            <tr>
                              <td>Fondo</td>
                              <td><input type="text" id="panel_tipo_fondo" ></td>
                            
                            </tr>

                            <tr>
                              <td>Tamaño</td>
                              <td><input type="text" readonly id="spinner" style="font-size:14px; padding:0px; margin:0px ; height:22px"></td>
                            </tr>



                            <tr>
                              <td>style</td>
                              <td>
                                <table style="width: 100%">
                                 
                                  <tr>
                                    
                                    <td><p class="fi-align-left letras_alineacion"  id="panel_letras_left" data-propiedad="text-align" data-descativo="none" data-activo="left" ></p></td>
                                  
                                    <td><p class="fi-align-center letras_alineacion"  id="panel_letras_center" data-propiedad="text-align"  data-activo="center" ></p></td>

                                    <td ><p class="fi-align-right letras_alineacion"  id="panel_letras_right" data-propiedad="text-align" data-descativo="none" data-activo="right"></p></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                      </li>


                      <li>
                        <a id="boton_color_grupo"  class="fi-credit-card icon2 icon3 mi_h1_" title="editar letra"
                         alt="editar letra">
                        </a>                
                      </li>

                      <li>
                        <a id="boton_capa" class="fi-background-color icon2 icon3  mi_h2_" title="capas" alt="capas">
                          
                        </a>
                          
                          <ul id="subgrupo_botones_boton_capa" class="button-group [radius round]" style="width:40px"> 
                              <li>
                                <a id="subgrupo_botones_boton_capa1"  onclick="false" class="icon2 sub_boton" title="1" alt="1">
                                   <i class="mi_icons2">1</i>
                                </a>
                              </li> 
         
                              <li>
                                <a id="subgrupo_botones_boton_capa2"  onclick="false" class=" icon2 sub_boton" title="2" alt="2">
                                   <i class="mi_icons2 ">2</i>
                                </a>
                              </li> 

                              <li>
                                <a id="subgrupo_botones_boton_capa3" onclick="false" class=" icon2 sub_boton" title="3" alt="3">
                                   <i class="mi_icons2 ">3</i>
                                </a>
                              </li> 
                          </ul>
                      </li> 


                      <li>
                        <a id="boton_delete_grupo"    class="fi-x icon2 icon3  mi_h3_" title="eliminar" alt="eliminar">
                          
                        </a>
                      </li> 

                      

                      <li>
                        <a id="herramientas_grupo" class="fi-arrows-in main icon2  mi_h4_ "  style="curso:move" title="" alt="">
                         
                        </a>
                      </li> 
                  </ul>
                  fin  herramienta -->
                    


          <!-- fin barra-->






                        
          <!-- inicio pagina -->
          <div  id="contenedor_principal_pag_1" class="paginas" >  
               <div class="punto_moviblefin punto_circle" >
                 <img src="./img/conexion_p.gif"  class="imagen_punto_mobil"> 
               </div>
               
                <div class="punto_movibleinicio punto_circle" >
                  <img src="./img/conexion_p.gif"  class="imagen_punto_mobil"> 
                </div>
           </div>
            <!-- fin pagina -->
          
          </div>
        </div><!-- fin - contenedor paginas-->
        

         <!--- manejo de la pagiancion --> 
         <div id="grupo_botones_pagina" class="row" style="background:transparent;
         margin-left: 9px;
         height: 35px;
         overflow: hidden;
         "> 
             

            <div class="small-8 large-8 columns" style="overflow-y: scroll;
height: 35px;">
              <div class="pagination-centered">
                <ul class="pagination" id="el_numero_pagina">
                  <li class="arrow unavailable"><a href="">&laquo;</a></li>
                  <li class="current"><a href="">1</a></li>
                  <li><a href="">2</a></li>
                  <li><a href="">3</a></li>
                  <li><a href="">4</a></li>
                  <li class="unavailable"><a href="">&hellip;</a></li>
                  <li><a href="">12</a></li>
                  <li><a href="">13</a></li>
                  <li class="arrow unavailable"><a href="">&laquo;</a></li>
                  
                  <li class="arrow"><a href="">&raquo;</a></li>
                </ul>
              </div>
            </div>
         </div>     
      </div>
  </div>





    <script src="{{ URL::asset('js/vendor/jquery.js')}}"></script>
    <script src="{{ URL::asset('js/foundation.min.js')}}"></script>


    <script src="{{ URL::asset('js/jquery-ui.js')}}"></script>
   <!-- <script src="js/spectrum.js"></script>-->
    <script src="{{ URL::asset('js/simulate.js')}}"></script>

   
    <script src="{{ URL::asset('js/MensajeDetalle.js')}}"></script>
    <script src="{{ URL::asset('js/LineaConexion.js')}}"></script>
     <script src="{{ URL::asset('js/CuadroSeleccion.js')}}"></script>
    <script src="{{ URL::asset('js/diagramaF1.js')}}"></script>
    <script src="{{ URL::asset('js/Flujo.js')}}"></script>
   




  </body>


    <script>
      $(document).foundation();



  




$( "#dialog_diagrama" ).hide();

 $("#dialog_configuracion_linea").hide();

      $('.off-canvas-wrap').foundation('offcanvas', 'show', 'move-right');
    
      var $puntos = $(".punto_moviblefin ,.punto_movibleinicio");








var tama_espacio_alto=100;
var band_pagina=true;
/*
    // boton de ver la paginas 
    $("#bton_option_pagina").click(function(e){

      if(band_pagina)
      {
        tama_espacio_alto=67;
        $("#grupo_botones_pagina").css({display:'none'});

      }
    else{
      tama_espacio_alto=100;
        $("#grupo_botones_pagina").css({display:'block'});

    }


      $("#contenedor_principal_pag").animate({
        height: $(window).height()-$("#barra_navegacion_1").height()-tama_espacio_alto
        }
        ,500,function(){



             band_pagina= !band_pagina;
             if(band_pagina)
             {
              $("#bton_option_pagina").addClass("miActivo");

              }
              else{
                $("#bton_option_pagina").removeClass("miActivo");
               
              }
        });
     



    });


*/

    $("#contenedor_principal_pag").width( $(window).width()-$("#menu_izquierdo").width()-15);
    $("#contenedor_principal_pag").height( $(window).height()-$("#barra_navegacion_1").height()-tama_espacio_alto);
     

     // *********************
     // resize -->  
     $(window).resize(function(){
      $("#contenedor_principal_pag").height( $(window).height()-$("#barra_navegacion_1").height()-tama_espacio_alto);

        if(estadoMenuAbierto)
         {
           $("#contenedor_principal_pag").width( $(window).width()-$("#menu_izquierdo").width()-15);
         }
         else {
            $("#contenedor_principal_pag").width( $(window).width()-15);
          
              
            
         }
     });


     var estadoMenuAbierto=true; // true esta abierto el menui izquierdo , o false esta cerrado el menu izquierdo

     //*******************
     // toogle de menu izquierdo
     // **********************
     function miToogleMenuIzquierdo(e){

      estadoMenuAbierto=!estadoMenuAbierto;
      $('.off-canvas-wrap').foundation('offcanvas', 'toggle', 'move-right'); 

       if(estadoMenuAbierto)
       {
         $("#contenedor_principal_pag").width( $(window).width()-$("#menu_izquierdo").width()-15);
                    
               $("#botones_panel_inferior").css({float:'left'});

       }
       else {
          $("#contenedor_principal_pag").width( $(window).width()-15);
            $("#botones_panel_inferior").css({float:'right'});
         

          
       }


      return false;

     }

     $("#bton_toogle_menu_iz").click(function(e){
        miToogleMenuIzquierdo(e)
     });

      



var manejoFlujo = Flujo("");
  manejoFlujo.inicializarEventosPrincipales();
  manejoFlujo.eventosAllPaginaActual();
  manejoFlujo.actualizaHtmlPagina();
  manejoFlujo.eventosFueraPagina();

  manejoFlujo.eventosDeBtonModal();

 manejoFlujo.leerGET();   

  

  $("#bton_nueva_pagina").click(function(e){
      manejoFlujo.crearPaginaNueva();
  });


$("#bton_elimina_pagina").click(function(e){

  manejoFlujo.eliminarPaginaActual();
});
  


$("#bton_estado1").click(function(e){
  manejoFlujo.cambioEstado(1);
  manejoFlujo.deseleccionarTodosLineas();
});


$("#bton_estado2").click(function(e){
  manejoFlujo.cambioEstado(2);

});



$("#bton_estado4").click(function(e){
  manejoFlujo.cambioEstado(4);

});



$("#bton_Guardar").click(function(e){
  manejoFlujo.guardarDatosJson();

});



  

/**************************************
caja de herramientas 
*/
$herramientaBotones=$("#herramientas_grupo_botones");
$herramientaBotones.draggable({
    handle:"#herramientas_grupo",
    drag:function(){
      //$("#panel_tipo_color").spectrum("hide");
    }
    ,scroll:false
  
  });


$herramientaBotones.hide();


/// eventos del la barra movible
$("#subgrupo_botones_boton_capa").hide();
$("#boton_delete_grupo").click(function(e){

  manejoFlujo.eliminarDiagramaF1();
});


$("#boton_color_grupo").click(function(e){
  manejoFlujo.mostrarDialogoEdicion();

  }); 



$("#boton_capa").click(function(){
  $("#panel_editar_letras").toggle();  
 
  $( "#spinner" ).val(manejoFlujo.$elementoSeleccionado.data("font-size"));
  actualizarColorTexto(manejoFlujo.$elementoSeleccionado.data("colortexto"));
  actualizarColorFondo(manejoFlujo.$elementoSeleccionado.data("background"));
  actualizarColorFOndoSVG(manejoFlujo.$elementoSeleccionado.data("svg-fondo"));
  actualizarAlinecionEnPanel();
  
      
})





function actualizarColorTexto (color){

}





function actualizarColorFOndoSVG (scolor){

   
}





var ll=null;

/// cambiar de fondo del color
function actualizarColorFondo (scolor){

}



///alineacion de letra
$("#panel_letras_center, #panel_letras_left,#panel_letras_right").click(function(){
  //solo es para tipo texto
  if(manejoFlujo.$elementoSeleccionado){
    var $elem =$(this);
    var activo=$elem.data("activo")+"";
    var propiedad=$elem.data("propiedad")+"";
  
    //desactiva
    $("#panel_letras_center, #panel_letras_left, #panel_letras_right").removeClass("active_letra"); 
      
    $(this).addClass('active_letra');

   // manejoFlujo.$elementoSeleccionado.css(propiedad,activo);
    manejoFlujo.$elementoSeleccionado.find("p.descripcion_observada").css(propiedad,activo);
    manejoFlujo.$elementoSeleccionado.data("text-align",activo);

  }//validacion de si aplica 
  
});



function actualizarAlinecionEnPanel (){
  
  var alineacion = manejoFlujo.$elementoSeleccionado.data("text-align");
  $("#panel_letras_center, #panel_letras_left, #panel_letras_right").removeClass("active_letra"); 

  switch(alineacion){
    case "left":
    case "LEFT":
      $("#panel_letras_left").addClass("active_letra");
    break;

    case "center":
    case "CENTER":
      $("#panel_letras_center").addClass("active_letra");
    break;


    case "right":
    case "RIGHT":
      $("#panel_letras_right").addClass("active_letra");
    break;

  }

}






  //evita la porpgacion
  $herramientaBotones.mousedown(function(e){
     e.stopPropagation();
      //return false;
  });



  // geneaicon de spinner
  $( "#spinner" ).spinner({
     min:1
    ,numberFormat: "n" 
    
    ,change:function(event, ui){
      cambiarTamLetra();    

    }

    ,spin: function(event, ui){
      cambiarTamLetra();
    } 
  });

  $( "#spinner" ).blur(function(){
    cambiarTamLetra();
  });




  //canua ek tanali de  l letra
  function cambiarTamLetra(){
   var valor= $( "#spinner" ).spinner("value");

        if(!/[123456789][0-9]*/.test(valor))
        {
          valor=1;
          $( "#spinner" ).spinner("value",1);
        }


        if(manejoFlujo.$elementoSeleccionado)
        {
          
          manejoFlujo.$elementoSeleccionado.css("font-size",valor+"px");
          manejoFlujo.$elementoSeleccionado.find("p.descripcion_observada").css("font-size",valor+"px"); 

        }

        manejoFlujo.$elementoSeleccionado.data("font-size",valor);
}





//color 
var color=null;
actualizarColorTexto("#fff");
var colorFondo=null;
actualizarColorFondo("#fff");
actualizarColorFOndoSVG("#000000");






///*************************************
// HERRAMIENTAS 2
// *******************
/*caja de herramientas  2
*/
$herramientaBotones2=$("#herramientas_grupo_botones2");
$herramientaBotones2.draggable({
    handle:"#herramientas_grupo2",
    drag:function(){
      //$("#panel_tipo_color").spectrum("hide");
    }
    ,scroll:false
  
  });



$("#boton_color_grupo2").click(function(){
  manejoFlujo.mostrarDialogoLinea();
})

    </script>
</html>
