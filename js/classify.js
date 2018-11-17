window.addEventListener('load',function () {
    // load事件只能用一次
    // 初始化左侧分类swiper内容滚动
    var swiper = new Swiper('.main-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });
  
    //初始化右侧分类swiper内容滚动
    var swiper= new Swiper('.main-right .swiper-container',{
        direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
             el: '.swiper-scrollbar',
         },
         mousewheel: true,
    });
    // 页面一开始的加载事件
// window.addEventListener("load",function () {
    var classifyList= document.getElementById("ulList");
    //4, 用父盒子高度-ul高度= 最下面的高度也就是负数
    var mainHeight= document.getElementById("main").offsetHeight;
    var minTranslateY= mainHeight - classifyList.offsetHeight;
    // console.log('111');
    
    for (var i = 0; i < classifyList.children.length; i++) {
        //除去点击事件外
        // 需求 点击时，要让li位移到最上面，但是在最下面的时候不需要位移
        //1.给li加下标，可以通过属性添加
        // 这个index页面上是看不到的 通过att就能看到
        //一个是js属性 一个是标签属性
        classifyList.children[i].index=i;
        // 2.获取li元素的高度
        var liHeight=classifyList.children[i].offsetHeight;
                  
        classifyList.children[i].onclick=function(){
            for (var i = 0; i < classifyList.children.length; i++) {
                classifyList.children[i].classList.remove('active')       
            }
            this.classList.add('active');
            // console.log(this);
            //3.计算位移的值，再赋值给li
            var  translationY = -liHeight*this.index;
            console.log(translationY);
            
            //4.判断是否在最下面，也就是最小平移高度 因为是上所有是-负数
            if(translationY<minTranslateY){//小于就代表移到了最下面
                translationY=minTranslateY;
            }
            //5.赋值   过渡效果
            classifyList.style.transition='all 0.3s';
            classifyList.style.transform = 'translate3d(0px,'+translationY+'px,0px)';
        }
        // classifyList.children[i].children.onclick=function(){
        //     return false;
        //     console.log(classifyList.children.children);
            
        // }
       
   }
   
// })
});




