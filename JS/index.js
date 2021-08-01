//*
$(() =>{
    //abrir Menu Bar-------------
    $('#menu-bar').click(function(){

        $("header").toggleClass("open-menu");
    });
    //Feichar Menu Bar-------------
    $("#menu-mobile-mask, .btn-close").click(function(){

        $("header").removeClass("open-menu")
    })
    //=====================================================
    //Funções da div login e cadastrar
    $('#login').click(function(){

        $("header").toggleClass("menu-open");

    });

    $('#register-cadastro').click(function(){

        $("header").toggleClass("menu-register");

    });
    //=======================================================
    //========Carrousel do Baner===============
    $('#baner').owlCarousel({

        autoplay: 1000,
        loop: true,
        items: 1,
        responsive: {
            0 :{
                items: 1
            },
            480: {
                items: 1
            },
            768:{
                items: 1
            }
        }
    
    })
    //=================================items produtos===============================
    // $('.section-preco').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     items: 4,
    //     responsive: {
    //         0:{
    //             items: 1
    //         },
    //         480:{
    //             items: 2
    //         },
    //         768:{
    //             items: 4
    //         }
    //     }
    // })
    //===================Avaliação pelas estrelas=========================
    $(".estrelas").raty({

        starHalf:    'lib/raty/lib/images/star-half.png',                                // The name of the half star image.
        starOff:     'lib/raty/lib/images/star-off.png',                                 // Name of the star image off.
        starOn:      'lib/raty/lib/images/star-on.png',                                  // Name of the star image on.
        score:        3
    });
    
});