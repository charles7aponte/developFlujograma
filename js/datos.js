



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



//btones y eventos de agrupacion
//

$("#bton_centrar_horizontal").click(function(){

  manejoFlujo.centarHorizontalElementosAgrupados();

});



$("#bton_centrar_vertical").click(function(){

  manejoFlujo.centarVerticalElementosAgrupados();
  
});

  

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



$("#bton_estado10").click(function(e){
  manejoFlujo.cambioEstado(10);
 // manejoFlujo.deseleccionarTodosLineas();
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
