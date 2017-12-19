<li>
							<a href="[field:arcur/]"  target="_blank"> [field:title/]</a> <span> [field:pubdate function="MyDate('Y-m-d',@me)"/]	</span>
						</li>
						{/dede::list}
						
					</ul>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<script>
			jPicture(".swiper-container", {
                type: "slide",
                autoplay: 4000
            });
		</script>
		<div class="clear hei30"></div>
		<div style="overflow: hidden;margin: 0 auto;padding-top: 30px;width: 1200px;">
			<img src="/public/picture/ct1.jpg" alt="" />
		</div>
		<div class="index1">
			<div class="shipin">
				<ul class="tex10" id="myul">
					{dede:arclist  limit='0,2'}
					<li>
						<a href="[field:arcurl/]">[field:title/]</a>
						<img src="[field:litpic/]" style="width:400px;height:260px">
					</li>
					{/dede:arclist}
					
				</ul> 
			</div>
			<script type="text/javascript">
				$("#myul li:first-child").addClass('select');
	
			</script>
			<script>
				$(".shipin li").mouseover(function(){
					$(this).children('first').addClass('select')
					$(".select").removeClass("select")
					$(this).addClass("select")
				})
			</script>
			<div class="dangjian">
				<div id="title" class="dangjian_title">
					<div class="dangjian_title_wz pa15"><i class="iconfont" style="color:#f5f51e"></i>党建新闻</div>
					<div class="dangjian_more">
						<a href="#" title="更多">更多<i class="iconfont" style="font-size: 14px;"></i></a>
					</div>
				</div>
				<div>
					<ul class="dangjian_ul">
						{dede:arclist  typeid="13" limit='0,9' col='1'}
						<li>
							<a href="[field:arcur/]" title="潜江项目学习宣贯党的十九大精神到施工一线" target="_blank"> [field:title/]</a> <span>  [field:pubdate function="MyDate('Y-m-d',@me)"/]</span>
						</li>
						{/dede:arclist}
						
					</ul>
				</div>
			</div>
		 
			<div class="hangye">
				<div id="title" class="hangye_title">
					<div class="hangye_title_wz pa15"><img style="padding-right:10px" src="/public/picture/drip.png">行业动态</div>
					<div class="hangye_more">
						<a href="#" title="更多">更多<i class="iconfont" style="font-size: 14px;"></i></a>
					</div>
				</div> 
				<div>
					<ul class="hangye_ul">
						{dede:arclist flag='h' typeid="15" limit='0,9' col='1'}
						<li>
							<a href="[field:arcur/]" title="涨知识才能涨工资！一大批彩版废水处理工艺图来啦" target="_blank"> [field:title/]  </a> <span> [field:pubdate function="MyDate('Y-m-d',@me)"/]	</span>
						</li>
						{/dede:arclist}
					</ul>
				</div>
			</div>
			</div>
		<div class="index2"></div>
	</body>

	<div class="clear"></div>
	<script>
		$('#gun').kxbdMarquee({
			direction: 'left'
		});
	</script>
	<div class="bottomBooks">
		<div class="bottomBook bottomBook1 fl"> 
			<h1>电子书屋</h1>
			<div>
				<a href="#">
					<img src="/public/images/DZSW.png?v=10">
				</a>
			</div>
		</div>
		<div class="bottomBook bottomBook2 fl"> 
			<h1>报刊杂志</h1>
			<div>
				<a href="#">
					<img src="/public/images/mtgc.png?v=10">
				</a>
			</div>
		</div>
		<div class="bottomBook bottomBook2b fl"> 
			<h1>廉政邮箱</h1>
			<div>
				<a href="#">
					<img src="/public/images/lzxx.png?v=10">
				</a>
			</div>
		</div>
		<div class="bottomBook bottomBook3 fr"> 
			<h1>招聘信息</h1>
			<div>
				<a href="#">
					<img src="/public/images/zhaopin.jpg">
				</a>
			</div>
		</div>
	</div>
	<div class="clear"></div>
	{dede:include filename="footer.htm"