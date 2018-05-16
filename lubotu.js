   $(function(){
            $(".contentcarousel_asset_body")
            .gpBanner("#contentcarousel_list",{
                navigation: {
                    nextEl: '.gp6-button-next',
                    prevEl: '.gp6-button-prev',
                },
                pagination:{
                    el:".gp6-banner-pagination"
                },
				direction:"fade",
                loop:true
            }) 
            timer1=setInterval(function(){
            	$(".gp6-button-next").trigger("click")
            },3000)
			$(".pic_all").hover(function(){//第一个function是鼠标移入的事件,第二个function是鼠标移出的事件
				clearInterval(timer1)
			},function(){
				timer1=setInterval(function(){
	            	$(".gp6-button-next").trigger("click")
	            },3000)
			})
     	})