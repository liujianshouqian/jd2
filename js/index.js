// 移动端一般很少使用on添加事件 使用最新的方式addEventListener的方法
// 有些H5C3里面新增的事件 只能使用 addEventListener方法添加
// window.addEventListener('load', function() {
//     /*1. 需求： 在滚动条滚动距离在轮播图高度范围内的时候实现顶部搜索的背景色透明度渐变
//         rgba(255,0,0,0)
//         rgba(255,0,0,1)
//         rgba的最后一个值透明度从0-1的变化
//     2. 思路： 计算当前的滚动条滚动到的距离的透明度的值
//         1. 获取当前滚动条的距离 
//         2. 获取当前轮播图的高度 
//         3. 计算透明度 = 距离/高度
//         4. 计算好后把透明度值 设置背景色的rgba里面把最后一个值改成计算的透明度*/
//     // 3. 获取轮播图高度 
//     var slideHeight = document.querySelector('#slide').offsetHeight;
//     // 6. 获取顶部元素
//     var header = document.querySelector('#header');
//     // 1. 给window添加一个滚动条滚动的事件
//     window.addEventListener('scroll', function() {
//         setOpacity(slideHeight);
//     });
//     setOpacity(slideHeight);
// });
     
        window.onload=function(){
                
        var mySwiper = new Swiper ('.swiper-container', {
        //   direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          
          // 如果需要前进后退按钮
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
          
          // 如果需要滚动条
        //   scrollbar: {
        //     el: '.swiper-scrollbar',
        //   },
        })        

        }      

