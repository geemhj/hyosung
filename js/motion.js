$(function(){


    $("nav").appendTo("body").css({ zIndex:12});

    // 네비게이션 열고 닫기
    $(".nav_open_btn").on("click",function(){
        $("nav").animate({marginRight:0});    
    }); 

    $(".nav_close_btn").on("click",function(){
        $("nav").animate({marginRight:"-100%"});    
    }); 


    // gnb 하위메뉴 열고 닫기
    $(".gnb>li>a").on("click",function(){
        $(".gnb>li ul").stop().slideUp();
        $(".gnb>li>a").css({background: "url(images/gnb_open_btn.png) no-repeat right 10px top 13px",color:"#000"});
        $(this).next().stop().slideDown();
        $(this).css({ background: "url(images/gnb_close_btn.png) no-repeat right 10px top 26px",color:"#164194" });

        return false;
    });

    // header 고정

    // 탑버튼은 지금 보기가 싫은거죠? 네, 언제쯤 보고 싶은 건가요? 사이트의 콘텐츠의 절반 정도의 높이값을 넘어서면 



    $("#footer p:first").hide();

    $(window).scroll(function(){

  

        var  topBtnNum = parseInt( $("#sub_container").css("height") ) - 500



        if(   $(window).scrollTop()  >= 365 ){
            $(".history_content_percent").css({ position:"fixed", marginTop: "-415px"});

        }else{
            $(".history_content_percent").css({ position:"absolute", marginTop:"-56px" });

        }




        if(   $(window).scrollTop()   >  topBtnNum    ){

            $("#footer p:first").show();
        }

        $("#header").css({background:"#fff"});
        $("h1 img").attr("src","images/logo_sub.png");
        $(".nav_open_btn img").attr("src","images/sub_nav_open_btn.png");
    });



   
    // index - section3. esg 버튼 동작 
    $(".esg_button li").on("click",function(){
        $(".esg_button li button").css({background:"none",border:"1.5px solid #fff", fontSize:"16px"})
        $(".esg_list").animate({marginLeft:-100 * $(this).index() + "%"});
        $(this).children("button").css({background:"#164194",color:"#fff",fontSize:"20px", border:"none"});

    });

    $(".esg_button li:first button").css({background:"#164194",border:"none",fontSize:"20px"});

    //----------------------sub-----------------------

    // sub lnb
    $(".sub_menu button").on("click",function(){
        $(".sub_menu ul").slideDown();

    });

    // sub 1-2 history_content_tab
    $(".history_content_tab").after("<span class='history_content_percent'></span>");   
    $(".history_content_percent").css({  width:"16.6666%", height:"3px", background:"#164194",position:"absolute", marginTop:"-53px"});


    $(".history_content_tab button").click(function(){
        $(".history_content_tab button").css({color:"rgba(0,0,0,0.3)", background:"url(sub_images/sub1_2_history_btn1.png) no-repeat center bottom 6px"});
        $(".history_content_percent").stop().animate({ width: 16.6666 * ( $(this).index() + 1 ) +"%" },"fast");



        $(this).css({color:"#164194", background:"url(sub_images/sub1_2_history_btn2.png) no-repeat center bottom"});
        $(".history_title div,.history_year>ol").hide();

        $(".history_title div:eq("+$(this).index()+"),.history_year>ol:eq("+$(this).index()+")").show();

    });

    // sub 2-1 affiliate_material_list
    $(".affiliate_material_list>li").on("click",function(){
        $(".affiliate_material_list>li").css({height:60});
        $(".affiliate_material_list>li p:nth-of-type(1)").css({background:"#fff",border:"1px solid #164194"});
        $(".affiliate_material_list li>p:nth-of-type(1) button").css({background:"url(sub_images/sub2_open_btn.png) no-repeat right 30px top 22px",color:"#164194"});
        $(this).animate({height:830});
        $(this).children("p:eq(0)").css({background:"#164194", color:"#fff"});
        $(this).find("button").css({background:"url(sub_images/sub2_close_btn.png) no-repeat right 30px top 22px ",color:"#fff", });
    });

    // sub 3-1 social_activity_list
    $(".social_activity_list").on("click",function(){

        $(".social_activity_list ul").hide();
        $(".social_activity_list>p:nth-of-type(1)").css({background:"#fff",border:"1px solid #164194"});
        $(".social_activity_list>p:nth-of-type(1) button").css({background:"url(sub_images/sub2_open_btn.png) no-repeat right 30px top 22px",color:"#164194"});
        $(this).children("ul").show();
        $(this).children("p:eq(0)").css({background:"#164194", color:"#fff"});
        $(this).find("button").css({background:"url(sub_images/sub2_close_btn.png) no-repeat right 30px top 22px ",color:"#fff", });
    });

    // footer 상단이동 버튼
    $("#footer button").on("click",function(){
        $("html").animate({scrollTop:0});
    });
   





    
});

