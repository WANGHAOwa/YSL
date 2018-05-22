// 隐藏菜单
		$("#txt_left").on("click",function(e){
			
			$("#sticky_header1").css({
				"display":"block"
			})
			e.preventDefault();
//			$(".global_header_general_promo").css("overflow","hidden")
		})
		$("#flag").on("click",function(){
			$("#sticky_header1").css("display","none")
			
		})
//字体变色、隐藏菜单2
		var olist1 = document.getElementById("list1");
		var ocaizhuang  = document.getElementById("caizhuang");
			olist1.onmouseover = function(){
				ocaizhuang.style.cssText = "display: block;position: absolute;"
				$(".ui_widget_overlay_bottom").css("display","block")
				showork()
			}
			ocaizhuang.onmouseover = function(){
				ocaizhuang.style.cssText = "display: block;position: absolute;"
				$(".ui_widget_overlay_bottom").css("display","block")
				
			}
			olist1.onmouseout = function(){
				ocaizhuang.style.cssText = "display: none;"
				$(".ui_widget_overlay_bottom").css("display","none")
				
			}
			ocaizhuang.onmouseout = function(){
				ocaizhuang.style.cssText = "display: none;"
					$(".ui_widget_overlay_bottom").css("display","none")
			}
//登陆注册界面			
		$("#txt_middle").on("click",function(){
			
			$("#login_page_mes").css({
				"display":"block",
				"position":"relative"
			})
		})
		$("#btn4").on("click",function(){
			$("#login_page_mes").css("display","none")
		})
//广告
			var oab_bottom = document.getElementById("ab_bottom");
			var opic1 = document.getElementById("pic1");
			oab_bottom.onmouseover  = function(){
				opic1.style.cssText = "display: block;"
			}
			opic1.onmouseover = function(){
				opic1.style.cssText = "display: block;"
			}
			oab_bottom.onmouseout  = function(){
				opic1.style.cssText = "display: none;"
			}
			opic1.onmouseout = function(){
				opic1.style.cssText = "display: none;"
			}
			
//轮播图

//回到顶端
		$(function(){
			$("#backToTop").on("click",function(){
				$("body,html").animate({scrollTop:0},500);
			})
		})
		
		$("body,html").on("mousewheel",function(){
			getTop()
		})
		 function getTop(){
        	if($(document).scrollTop()>200){
	            $("#backToTop").css({
	                'display':'block',
           		 });
        	} else {
            	$("#backToTop").css('display','none');
        	}
        	setTimeout(homepage_sticky(),1000)
    	}
//蒙版
		function showork(){
			$("#mask").css("height","100%");
			$("#mask").css("width","100%");
			$("#mask").show();
		}
		function hidework(){
			$("#mask").hide();
		}
//商品详情
		$(function(){
			$("#pdpMain_mark").on("click",function(){
				$(".pdpMain").css("display","none")
				$(".ui_widget_overlay").css("display","none")
			})
		})
		$(function(){
			$("body").on("click",".cover_up",function(e){
				$(".pdpMain").css("display","block")
				$(".ui_widget_overlay").css("display","block")
			})
		})
//下拉内容更精彩
		function homepage_sticky(){
				$(".homepage_sticky").css("display","block")
		}
//刻字
		$(function(){
			var flag = true;
			$(".add_personal_engraving_cbx").on("mousedown",function(){
				if(flag){
					$(".add_personal_engraving_cbx_label2").css("display","none")
					$(".add_personal_engraving_cbx_label1").css("display","block")
					flag = false;
				}else{
					$(".add_personal_engraving_cbx_label2").css({
						"display":"block",
						"position":"absolute",
						"right":200
					})
					$(".add_personal_engraving_cbx_label1").css("display","none")
					flag = true;
				}
			})
		})
		
//第一行
		$.ajax({
			url:"JSON/line1.json",
			success:function(res){
//				console.log(res)
				res.forEach(function(item,index){
					if(item.type){
						creatListBig1(item);
					}else{
						creatListSmall1(item);
					}
				})
			}	
		});	
		function creatListBig1(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $a = $("<a href='goods_detail.html'>");
			var $img = $("<img title='520' >");
			$img.attr("src",item.link);
			$a.append($img);
			$li.append($a);
			$("#goods_first_list1").append($li);
		}
		function creatListSmall1(item){
			var data1 = `<li class="box2">		
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }" />
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
				
				<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>
				
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.querySelector("#goods_first_list1");
//			console.log(ul,8)
			ul.innerHTML += data1;
//加入购物车
		}
		
		
//第二行
	$.ajax({
			url:"JSON/line2.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig2(item);
					}else{
						creatListSmall2(item);
					}
				})
				creatTitle();
			}	
		});	
	function creatTitle(){
		var dataTitle =`<h2 class="moodboard_section_xp">新品</h2>`;	
		$("#goods_first_list1 ").append(dataTitle);
	}
	function creatListBig2(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='520'>");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list1 ").append($li);
		}
		function creatListSmall2(item){
			var data = `<li class="box2">
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
				
				<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>
				
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;
			var ul = document.querySelector("#goods_first_list1");
			ul.innerHTML += data;
		}
		
//第三行
			$.ajax({
			url:"JSON/line3.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig3(item);
					}else{
						creatListSmall3(item);
					}
				})
			}	
		});	
		function creatListBig3(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='520'>");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list1").append($li);
		}
		function creatListSmall3(item){
			var data = `<li class="box2">
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
				
				<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>
				
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.getElementById("goods_first_list1")
			ul.innerHTML += data;
		}
//第四行
		$.ajax({
			url:"JSON/line4.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig4(item);
					}else{
						creatListSmall4(item);
					}
				})
				creatTitle2();
			}	
		});	
		function creatTitle2(){
			var dataTitle2 = `<h2 class="moodboard_section_ts">探索发现</h2>`
			$("#goods_first_list1").append(dataTitle2);
		}
		function creatListBig4(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='YSL哑光唇釉'>");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list1").append($li);
		}
		function creatListSmall4(item){
			var data = `<li class="box2">
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
				
				<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>
				
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;
			var ul = document.getElementById("goods_first_list1")
			ul.innerHTML += data;
		}

//第五行
	$.ajax({
			url:"JSON/line5.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig5(item);
					}else{
						creatListSmall5(item);
					}
				})
			}	
		});	
	
		function creatListBig5(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='染唇液'>");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list1").append($li);
		}
		function creatListSmall5(item){
			var data = `<li class="box2">
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
				
				<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>
				
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.getElementById("goods_first_list1")
			ul.innerHTML += data;
		}
//第六行 购物车（页面所有信息加载完毕后发起加载数据库的Ajax请求）
	$.ajax({
			url:"JSON/line6.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig6(item);
					}else{
						creatListSmall6(item);
					}
				})
			}	
		});	
		function creatListBig6(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='染唇液'>");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list1").append($li);
		}
		function creatListSmall6(item){
			var data = `<li class="box2">
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
				
				<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>
				
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			//添加购物车功能
			var ul = document.getElementById("goods_first_list1")
			ul.innerHTML += data;
			$(".btn2").each(function(index){
				$(".btn2").eq(index).on("click",function(){
						var link = $(this).prevAll(".pic27").attr("src");
						var title = $(this).prevAll(".product_name").html();//获取标签的value值
						var connect = $(this).prevAll(".product_subtitle").html();
//						console.log(connect)
						var price =$(this).prevAll(".product_price").html();
//						console.log(price)					
						$.ajax({
							url:"goods.php",
							type:"post",
							data:{
								link:link,
								title:title,
								connect:connect,
								price:price,
								type:"add"
							},
							async:true
						})
						.then(function(res){
					})
				})
			})
		}
		
//详细商品信息遮罩层
	$(function(){
		$("body").on("mouseenter",".img-flag",function(e){
			$(this).parent().find(".cover_up").css("display","block");
			
		})
		$("body").on("mouseleave","li",function(e){
			 $(".cover_up").css("display","none");
		})
	})
//购物车隐藏功能
//$(function(){
//	$("#buy").on("mouseover",function(){
//		$(".mini_cart").animate({height:"590px"});
//	})
//	$(".mini_cart").on("mouseleave",function(){
//		$(".mini_cart").animate({height:"0px"});
//	})
//})
	
	
