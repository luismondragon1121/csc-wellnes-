$(document).ready(function(){
   $('ul.cir_be li a:first').addClass('active-be');
    $('.circulos-secciones_belleza article').hide();
    $('.circulos-secciones_belleza article:first').show();
    
    $('ul.cir_be li a').click(function(){
       $('ul.cir_be li a').removeClass('active-be');
        $(this).addClass('active-be');
        $('.circulos-secciones_belleza article').hide();
        
        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});