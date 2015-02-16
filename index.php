<!doctype html>
<html class="no-js" lang="en">
    <head>
      <script>
       /* var URL_GUARDAR="http://localhost/triki1/public/flujograma/guardar/json";
        var URLSOLICITUD="http://localhost/triki1/public/flujograma/cargar"; 
        var URL__SERVIDOR = "http://localhost/triki1/public/";*/

        var URL__SERVIDOR1 = "http://localhost/git/developFlujograma/";
        var URL__SERVIDOR = URL__SERVIDOR1+"";
        var URL_GUARDAR= URL__SERVIDOR+"/servicios/guardar.php";
        var URLSOLICITUD= URL__SERVIDOR+"/servicios/cargar.php"; 
       
    </script>
  
  
<?php 
  $URL_SERVIDOR="http://localhost/git/developFlujograma/";
?>

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <link rel="stylesheet" href="<?php echo $URL_SERVIDOR.'/'?>css/foundation.css" />
      <link rel="stylesheet" href="<?php echo $URL_SERVIDOR.'/'?>css/jquery-ui.css" />
      <link rel="stylesheet" href="<?php echo $URL_SERVIDOR.'/'?>css/jquery-ui.structure.css" />
      <link rel="stylesheet" href="<?php echo $URL_SERVIDOR.'/'?>css/jquery-ui.theme.css" />
      <!--<link rel="stylesheet" href="css/spectrum.css" />-->


      <link rel="stylesheet" href="<?php echo $URL_SERVIDOR.'/'?>css/micss.css" />
      <link rel="stylesheet" href="<?php echo $URL_SERVIDOR.'/'?>css/font/foundation-icons.css" />
      
      
      <script src="<?php echo $URL_SERVIDOR.'/'?>js/vendor/modernizr.js"></script>
      <script src="<?php echo $URL_SERVIDOR.'/'?>js/snap.svg.js"></script>
      

      

    </head>


    <style>



    .paginas{
      width:5000px; height:5000px;position:relative; 
       cursor:default;
       border-top: 1px solid rgb(212, 218, 218);
       border-left: 1px solid rgb(212,218,218); 
       background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAT0lEQVQ4T2N8/fr/fwYiADfPP4avX5gIqmQEGSgqyshISOW373//c3EyE1Q3aiDukBwNQ5xhQ/1kAwpsQomaFHnqu3A06+EM/9GcQr+cAgBGqZrSrFyxegAAAABJRU5ErkJggg==); background-color: rgb(255, 255, 255);

    }




     .punto_circle{
          background:#DBDCD6;
          border: 1px solid #B9B9B9;
          z-index:11; 
          position: absolute;
          background-position: -626px -114px; 
          width: 12px;
          height: 12px;
          border-radius: 10px;
          cursor: url("<?php echo $URL_SERVIDOR.'/'?>css/cursor/icn_cursor_move.cur"),move !important;
       
        }


  
     .linea_partes_punto_circle{
          background:#DBDCD6;
          border: 1px solid #B9B9B9;
          z-index:11; 
          position: absolute;
          background-position: -626px -114px; 
          width: 12px;
          height: 12px;
          border-radius: 10px;
         
       
        }


        .linea_partes_punto_movible3, .linea_partes_punto_movible1{
           cursor: url("<?php echo $URL_SERVIDOR.'/'?>css/cursor/icn_cursor_move.cur"),move !important;
        }

        .linea_partes line{
          cursor: pointer;
           pointer-events: auto;
        }

        svg.linea_partes {
        pointer-events: none;
        }





     .punto_cuadrado{
          background:#DBDCD6;
          border: 1px solid #B9B9B9;
          z-index:11; 
          position: absolute;
          background-position: -626px -114px; 
          width: 12px;
          height: 12px;
         /* border-radius: 10px;*/
          cursor: url("<?php echo $URL_SERVIDOR.'/'?>css/cursor/icn_cursor_move.cur"),move !important;
       
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
      color: #2d4e13;
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
      height: 20%;
      width: 100%;
      position: absolute;
      top: 80%;
      line-height: 0.9;
      font-size: small;
      padding: 2px 5px;
      background: #2d4e13;
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
    background: #2d4e13;
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
      color:#2d4e13;
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
         opacity:  0 !important
        }






      body[data-estado='2'] .puntos_conexion
      
       {
        opacity:1 !important;
       }

        
        body[data-estado='3'] .puntos_conexion,
        body[data-estado='3'] .ui-resizable-handle
        {
         opacity: 0 !important;
        }

       /*cursor*/

       body[data-estado='2'] .paginas
       {
          cursor: url('<?php echo $URL_SERVIDOR.'/'?>img/puntero1.cur') ,auto;
       }

      body[data-estado='4'] .paginas{
          cursor: url('<?php echo $URL_SERVIDOR.'/'?>img/puntero2.cur') ,auto;
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




       .puntos_conexion:hover{

        background-image: url('<?php echo $URL_SERVIDOR.'/'?>/img/cruz2.gif');
      } 



    </style>
  


  <body data-estado='1'>


   
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
              style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon1.png); background-size: 71%;
                background-repeat: no-repeat;
                background-position: 50%;"    
              >
              
              </a></li>
            
              <li>
                <a href="#" onclick="false" id="bton_estado2" 
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon2.png) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>


           <li>
                <a href="#" onclick="false" id="bton_estado10" 
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon2.png) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>
              <li>
                <a href="#" onclick="false" id="bton_estado4" 
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon4.png) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>





         


              <li>
                <a href="#" onclick="false" id="bton_Guardar" alt="guardar"
                class="botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon_save.png) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>


                <li>
                <a href="#" onclick="false" id="bton_centrar_horizontal" alt="alinear centro"
                class="miActivo botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon_centrar_horizonta.png) ;background-size: 71%;
                  background-repeat: no-repeat;
                  background-position: 50%;"
                  >
                </a>
              </li>



                <li>
                <a href="#" onclick="false" id="bton_centrar_vertical" alt="guardar"
                class=" miActivo botonFondo [tiny small large] button [alert success secondary] [disabled]"
                style="background-image:url(<?php echo $URL_SERVIDOR.'/'?>img/icon_centrar_vertical.png) ;background-size: 71%;
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


             
                        <li>
                        </li>



                        <li>
                          <a href="#" 
                          alt="regresar"
                          onclick="false" 
                          style="padding:2px 10px; margin:0px 0px 1px 42px;" 
                          id="bton_regresar"
                          class="miboton [tinmibotony small large] button [alert success secondary] [disabled]">
                          <span style="font-size:29px;" class="fi-x">
                            
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
               <div class="punto_moviblefin punto_circle parte_seleccion" >
                 <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
               </div>

               
                <div class="punto_movibleinicio punto_circle  parte_seleccion" >
                  <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
                </div>



                <div class="punto_c_moviblefin punto_cuadrado parte_seleccion" style="display:none" >
                 <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
               </div>

               
                <div class="punto_c_movibleinicio punto_cuadrado parte_seleccion"    style="display:none">
                  <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
                </div>

                <div class="parte_seleccion seleccionados_grupos mover_grupos"
                      style="top:100px; left:400px;display:none"                  >
                    <div  class="parte_seleccion" style="position:absolute; z-index:1000;width:100%; cursor:move;
                      height:100%;"></div>
                 </div> 




              <!-- manejo de la lineas por partes -->
              <div class="linea_partes_punto_movible1 linea_partes_punto_circle" style="top:10px;left:10px;" >
                 <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
               </div>

               
                <div class="linea_partes_punto_movible2  linea_partes_punto_circle"  style="top:20px;left:20px;">
                  <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
                </div>
              

                <div class="linea_partes_punto_movible3  linea_partes_punto_circle"  style="top:30px;left:30px;">
                  <img src="<?php echo $URL_SERVIDOR.'/'?>/img/conexion_p.gif"  class="imagen_punto_mobil"> 
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





    <script src="<?php echo $URL_SERVIDOR.'/'?>js/vendor/jquery.js"></script>
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/foundation.min.js"></script>


    <script src="<?php echo $URL_SERVIDOR.'/'?>js/jquery-ui.js"></script>
   <!-- <script src="js/spectrum.js"></script>-->
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/simulate.js"></script>

    <script src="<?php echo $URL_SERVIDOR.'/'?>js/jquery.hittest.js"></script>
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/MensajeDetalle.js"></script>
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/LineaConexion.js"></script>
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/LineaPartes.js"></script>

    <script src="<?php echo $URL_SERVIDOR.'/'?>js/CuadroSeleccion.js"></script>
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/CuadroAgrupacion.js"></script>
    
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/DiagramaF1.js"></script>
    <script src="<?php echo $URL_SERVIDOR.'/'?>js/Flujo.js"></script>
   




  </body>

 <script src="<?php echo $URL_SERVIDOR.'/'?>js/datos.js"></script>
</html>
