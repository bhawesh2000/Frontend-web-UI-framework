$(document).ready(function(){

    //jquery for carousel
    $("#mycarousel").carousel({interval:1000});
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $("#carouselButton").children('span').addClass('fa-play');
        }
        else if($("#carouselButton").children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children('span').addClass('fa-pause');
        }
    });
    /*
     //jquery code for two buttons//
    
    $(document).ready(function(){
        $("#mycarousel").carousel({ interval: 1000 });
        $("#carouselButton").click(function(){
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function(){
            $("#mycarousel").carousel('cycle');
        });
    });
</script>
-->

<!--Jquery code for single button performing both pause and play operation-->


<!--
    <script>
    $(document).ready (function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
*/
        

    // jquery for login
    $("#loginButton").click(function(){
        $("#loginModal").modal('toggle');
        $("#loginModal").modal('show');
            $("#closeModal").click(function(){
                $("#loginModal").modal('hide');
            });
            $("#cancel").click(function(){
                $("#loginModal").modal('hide')
            });
    });

     //jquery for Reserve Table
     $("#reserveButton").click(function(){
         $("#reserveModal").modal('toggle');
         $("#reserveModal").modal('show');
         $("#modalclose").click(function(){
             $("#reserveModal").modal('hide');
         });
         $("#cancelModal").click(function(){
                $("#reserveModal").modal('hide')
         });
     });
});