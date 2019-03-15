# respond-weijinsuo
响应式微金所官网页面

# PC端
<div align=center><img src="https://github.com/Uncle-He/respond-weijinsuo/blob/master/media/images/PCindex.png" width=50% /></div>

# M端
<div align=center><img src="https://github.com/Uncle-He/respond-weijinsuo/blob/master/media/images/Mindex.png" width=50% /></div>

# 功能点
* 顶部通栏
   * 在中屏设备和大屏设备下显示一行四列，在小屏和超小屏设备下隐藏
* 导航栏
   * 在小屏设备下个人中心隐藏
   * 在移动端设备下导航栏变成按钮
* 轮播图
   * PC端高度固定，图片居中，容器铺满（背景图）
   * M端宽度100%，高度自适应
   * ajax请求图片数据（本地模拟JSON数据）
   * js控制在不同设备下，渲染不同图片
   * 方便后端进行动态渲染（行内样式）
   * 测试功能：拖动浏览器窗口改变大小到不同设配下显示对应设备的图片
   * 封装对应功能
   * 缓存ajax请求数据，避免多次请求，导致服务器压力过大
   * 手势切换
* 信息
   * 超小屏下隐藏
   * 中屏下三行两列
   * 大屏下两行两列
* 预约
   * 超小屏下企业宣传片隐藏
* 产品
   * 分页条在pc端正常显示，在移动端能够左右滑动
   * 在超小屏下一列，在小屏下两列，中屏三列
* 新闻
   * 大屏，中屏显示效果相同
   * 小屏，分页栏横着排版
   * 移动设备自适应
* 合作伙伴
   * 使用字体图标
   * 响应式布局
* 固定导航栏
   * 当页面下滑到200px的距离时，导航栏固定在页面顶部
