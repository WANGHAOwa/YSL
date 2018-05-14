// 隐藏菜单
		var obtn = document.getElementById("flag")
		var obox = document.getElementById("sticky_header1")
		var otxt_left = document.getElementById("txt_left")
			otxt_left.onclick  = function(e){
				obox.style.cssText = "display:block;position: relative;"
				e.preventDefault();//阻止浏览器的默认事件
			}
			obtn.onclick = function(){
				obox.style.cssText = "display:none;"
			}
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
		var obtn4 = document.getElementById("btn4");
		var ologin_page_mes = document.getElementById("login_page_mes");
		var otxt_middle  = document.getElementById("txt_middle");
			otxt_middle.onclick = function(){
				ologin_page_mes.style.cssText = "display: block;position: relative;"
//				e.preventDefault()
			}
			obtn4.onclick = function(){
				ologin_page_mes.style.cssText = "display: none"
			}
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
			$("#mask").css("height","10000");
			$("#mask").css("width","100%");
			$("#mask").show();
		}
		function hidework(){
			$("#mask").hide();
		}
//商品详情
		$(function(){
			$("#pdpMain_mark").on("click",function(){
				console.log(1)
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
					$(".add_personal_engraving_cbx_label").css("display","none")
					$(".add_personal_engraving_cbx_label1").css("display","block")
					flag = false;
				}else{
					$(".add_personal_engraving_cbx_label").css({
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
			url:"line1.json",
			success:function(res){
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
			var $img = $("<img title='520' >");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list1").append($li);
		}
		function creatListSmall1(item){
			var data1 = `<li class="box2">
				<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
				<a class="product_name ">${item.title}</a>
				<span class="product_subtitle">${item.content}</span>
				<div class="start">
					<img src="${item.picture}" />
				</div>
				<p class="product_price " title="Sale Price">${item.price}</p>
				<button type="submit" class="btn2"><img src="image/17.png"/></button>
				<a class="buy">立即购买</a>
				<button type="submit" class="btn3"><img src="image/18.png"/></button>
				<a class="buy1">查看详情</a>
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.querySelector("#goods_first_list1");
//			console.log(ul,8)
			ul.innerHTML += data1;
		}
//第二行
	$.ajax({
			url:"line2.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig2(item);
					}else{
						creatListSmall2(item);
					}
				})
			}	
		});	
	function creatListBig2(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='520'>");
			$img.attr("src",item.link);
			$li.append($img);
			$(".goods_first_list_bottom2 ul").append($li);
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
				<button type="submit" class="btn2"><img src="image/17.png"/></button>
				<a class="buy">立即购买</a>
				<button type="submit" class="btn3"><img src="image/18.png"/></button>
				<a class="buy1">查看详情</a>
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.querySelector(".goods_first_list_bottom2 ul");
			ul.innerHTML += data;
		}
		
//第三行
			$.ajax({
			url:"line3.json",
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
			$("#goods_first_list3").append($li);
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
				<button type="submit" class="btn2"><img src="image/17.png"/></button>
				<a class="buy">立即购买</a>
				<button type="submit" class="btn3"><img src="image/18.png"/></button>
				<a class="buy1">查看详情</a>
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.getElementById("goods_first_list3")
			ul.innerHTML += data;
		}
//第四行
		$.ajax({
			url:"line4.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig4(item);
					}else{
						creatListSmall4(item);
					}
				})
			}	
		});	
		function creatListBig4(item){
			var $li = $("<li>");
			$li.addClass("box1");
			var $img = $("<img title='YSL哑光唇釉'>");
			$img.attr("src",item.link);
			$li.append($img);
			$("#goods_first_list4").append($li);
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
				<button type="submit" class="btn2"><img src="image/17.png"/></button>
				<a class="buy">立即购买</a>
				<button type="submit" class="btn3"><img src="image/18.png"/></button>
				<a class="buy1">查看详情</a>
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.getElementById("goods_first_list4")
			ul.innerHTML += data;
		}

//第五行
	$.ajax({
			url:"line5.json",
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
			$("#goods_first_list5").append($li);
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
				<button type="submit" class="btn2"><img src="image/17.png"/></button>
				<a class="buy">立即购买</a>
				<button type="submit" class="btn3"><img src="image/18.png"/></button>
				<a class="buy1">查看详情</a>
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.getElementById("goods_first_list5")
			ul.innerHTML += data;
		}
//第六行
	$.ajax({
			url:"line6.json",
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
			$("#goods_first_list6").append($li);
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
				<button type="submit" class="btn2"><img src="image/17.png"/></button>
				<a class="buy">立即购买</a>
				<button type="submit" class="btn3"><img src="image/18.png"/></button>
				<a class="buy1">查看详情</a>
				<div class="cover_up">
					<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
				</div>
			</li>`;	
			var ul = document.getElementById("goods_first_list6")
			ul.innerHTML += data;
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
	
	
