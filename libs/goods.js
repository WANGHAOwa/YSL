$(function(){
	$(".btn2").on("click",function(){
		$(".mini_cart").animate({height:"590px"});
		$(".mini_cart").css("top","40px")
		$.ajax({
			url:"goods.php",
			type:"POST",
			data:{type:"select"}
		})
		.then(function(res){
//			console.log(res);
//			console.log(JSON.parse(res))
			var data1 ="";
			JSON.parse(res).forEach(function(item){
//				console.log(item);
				data1 += `<div class="goods_border">
							<div class="mini_cart_content_goods">
								<img class="mini_cart_content_goods_pic" src='${item.link}' />
								<div class="mini_cart_content_goods_title">
									<a>${item.title}</a>
									<a class="mini_cart_content_goods_title_a" href="###">${item.connect}</a>
									<span class="goods_border_span1">-</span>
									<input class="goods_border_inp" type="text" value="1"/>
									<span class="goods_border_span2">+</span>
									<a class="mini_cart_content_goods_title_price">${item.price}</a>
								</div>
							</div>
						</div>`;				
			})
			var div = document.querySelector(".goods_item1");
			div.innerHTML = data1;
			//控制数量加减
				$(function(){
						$(".goods_border_span1").each(function(index,item){
							$(item).on("click",function(){
								var value = $(this).next().val()*1 - 1;
								$(this).next().val(value)
							})
						})						
						$(".goods_border_span2").each(function(index,item){
							$(item).on("click",function(){
								var value = $(this).prev().val()*1 + 1;
								$(this).prev().val(value)
							})
						})
				  })
				
			})
		})
	})

	
