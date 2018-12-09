$('.nav a').hover(function(){
	
	$(this).parent().addClass('cur').siblings().removeClass('cur')
})
			

			
		
$(".tab ul li").mouseover(function(){
			
			$(this).addClass("cur").siblings().removeClass("cur");
			
			var index = $(this).index();
			$(".tab ol li").eq(index).addClass("cur").siblings().removeClass("cur");
			
			$(".tab .line").stop().animate({marginLeft:index*120},300);
			
			num = index;
					
		});
$(".webIn ol li").click(function(){
			
			
			var index = $(this).index();
			$(".webShow ul li").eq(index).addClass("cur").siblings().removeClass("cur");
					
		});	
		
		


var wow = new WOW(
					  {
					    boxClass:'wow',
					    animateClass: 'animated', 
					    offset:100,
					    mobile:true,
					    live:         true,       //异步加载的元素是否添加动画；
					    callback:     function(box) {
					      // 运行动画的回调函数；
					    },
					    scrollContainer: null //滚动触发的标签；
					  }
					);
				wow.init();


var vm = new Vue({
	el:'#banner',
	data:{
		timer:null,
		active:0,//瀛樺偍褰撳墠鏄剧ず瑙掓爣鐨勭储寮曞€�
		imgs:[
			'./images/banner1.png',
			'./images/banner2.png',
			'./images/banner3.png',
			'./images/banner4.png',
			'./images/banner5.png',
			'./images/banner6.png',
			'./images/banner7.png',
			'./images/banner8.png'
			
			]
	},
	methods:{
			autoplay(){
				var that = this;
				this.timer= setInterval(function(){
					that.active++;
					that.active = (that.active+that.imgs.length)%that.imgs.length;
					},3000)
			},
		},
		mounted:function(){
			this.autoplay()
		}
})


			
	$(function(){
				$(window).scroll(function(){
					var juan = $(window).scrollTop();
					if(juan>700){
						$('.fh').stop().fadeIn(500);
						
					}else{
						$('.fh').stop().fadeOut(500);
					}
					
				});
				$(".fh").click(function(){
					$("html,body").animate({scrollTop:0},500);
				});
			});
			
			
			




var mySwiper = new Swiper ('#page', {
    direction: 'vertical',
    // 如果需要分页器
    pagination: {
      el: '.pagedot',
	  clickable :true
    },
	mousewheel: true,
	loop:true,
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }	
  });   
  



//app
var myapp = new Swiper ('#app', {
   loop: true,
   // 如果需要前进后退按钮
   navigation: {
	  nextEl: '.appRight',
	  prevEl: '.appLeft',
  },
  effect : 'coverflow',
  slidesPerView:3,// 三张
  centeredSlides: true,
  coverflowEffect: {
	rotate: 20,
	stretch: 10,
	depth: 60,
	modifier: 2,
	slideShadows : true
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    }
});  

var app = document.getElementById("app");
app.onmouseover = function(){
	myapp.autoplay.stop();
}
app.onmouseout = function(){
	myapp.autoplay.start();
}

;(function(){
	$(function(){
		$('.nav li').click(function(){
			var index = $(this).index();
			var top = $('body>div').eq(index).offset().top;
			$('html,body').animate({scrollTop:top},500);
			$(this).attr('class','cur').siblings().attr('class','');
		});
		
		
	});
})();


