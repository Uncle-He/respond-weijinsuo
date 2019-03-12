$(function ($) {
  // 动态轮播图
  banner();
  // 移动端页签
  initMobileTab();
  //初始化bootstrap工具提示
  $('[data-toggle="tooltip"]').tooltip();
});

var banner = function () {

  var getData = function (callback) {
    if (window.data) {
      callback && callback(window.data);
    } else {
      /* ajax 获取轮播图数据 */
      $.ajax({
        type: "get",
        url: "js/data.json",
        // 服务端返回的数据类型
        dataType: "json",
        success: function (data) {
          window.data =  data;
          callback && callback(window.data);
        },
        error: function () {
          console.log('ajax请求失败');
        }
      });
    }
  };

  var render = function () {
    // 数据缓存
    getData(function (data) {
      // 根据当前设备（屏幕宽度），动态渲染数据
      var isMobile = $(window).width() < 768 ? true : false;
      // 利用模版引擎进行数据渲染
      /*
        模版使用方法
          1.引入artTemplate文件
          2.在html页面常见模版
          3.使用模版引擎(template('模版id',数据对象)
          4.将模版字符渲染到页面上
          5.修改模版渲染数据逻辑
      */
      var pointHTML = template('pointTemplate',{list: data});
      var imageHTML = template('imageTemplate',{list: data, isM: isMobile});

      // 把字符串渲染到页面中
      $(".wjs_banner .carousel-indicators").html(pointHTML);
      $(".wjs_banner .carousel-inner").html(imageHTML);
    })
  };
  /* 测试功能 */
  $(window).on('resize', function () {
    render();
  }).trigger('resize');

  /* 手势功能 */
  var startX = 0;
  var distanceX = 0;
  var isMove = false;
  $('.wjs_banner').on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
  }).on('touchmove', function (e) {
    var moveX = e.originalEvent.touches[0].clientX;
    distanceX = moveX - startX;
    isMove = true;
  }).on('touchend', function (e) {
    // 距离足够50px，而且一定要滑动过
    if (isMove && Math.abs(distanceX) > 50) {
      // distanceX为正数，向右滑动。为负数，向左滑动
      if (distanceX < 0) {
        $('#carousel-example-generic').carousel('prev');
      } else {
        $('#carousel-example-generic').carousel('next');
      }
    }
    startX = 0;
    distanceX = 0;
    isMove = false;
  })
};

var initMobileTab = function () {
  // 让父元素的宽度与所有的子元素宽度之和相等,解决换行问题
  var $navTab = $('.wjs_product .nav-tabs');
  var navTabWidth = 0;
  $navTab.find('li').each(function (i, item) {
    var $currentLi = $(item);
    navTabWidth += $currentLi.outerWidth(true);
  });
  $navTab.width(navTabWidth);
  // 使用插件iscroll使其能左右滑动
  new IScroll($('.nav-tabs-parent')[0],{
    scrollX:true,
    scrollY:false,
    click:true
  });
};