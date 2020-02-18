// 回到顶部按钮逻辑
window.addEventListener('load', function() {
  var gtaUrl = "https://cdn.jsdelivr.net/gh/itboos/static-file-2020@master/js/gta20191212.min.js",
      issoUrl = 'https://cdn.jsdelivr.net/gh/itboos/static-file-2020@master/js/embed.min.js?v=2'
  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-154494583-1');
  
  appendScript(gtaUrl, null)

  var isShowComment = /technology|life|other/.test(location.pathname)
  // console.log('isShowComment:', isShowComment)
  if (isShowComment) {
    appendScript(issoUrl, {
      'data-isso-lang': "zh_CN",
      'data-isso-css': 'false',
      'data-isso': '/',
      'data-isso-require-author': 'true',
      'data-isso-require-email': 'true',
      'data-isso-max-comments-top': 30,
      'data-isso-max-comments-nested': 10
    })
  }

  function appendScript(src, otherAttrs) {
    var script = document.createElement('script');
    script.src = src
    if (otherAttrs) {
      for ( var p in otherAttrs) {
        script.setAttribute(p, otherAttrs[p])
      }
    }
    document.body.appendChild(script);
  }

  // backBtn
  var backBtn = document.getElementById('back-to-top');
  window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (backBtn) {
      scrollTop > 1000 ?  backBtn.style.display="block" : backBtn.style.display="none";
    }
  }
  backBtn && backBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
    backBtn.style.display="none"
  }, false)
  

  // menu
  var body =  document.getElementsByTagName('body')[0]
  var navMask =  document.getElementsByClassName('mobile-cover')[0]
  var navCloseBtn =  document.getElementsByClassName('nav-close')[0]
  var navMenu = document.getElementsByClassName('mobile-menu')[0]
  
  navMenu.addEventListener('click', function(){
    body.classList.remove('mobile-nav-closed')
    body.classList.add('mobile-nav-opened')
  }, false)

  navMask.addEventListener('click', function(){
    body.classList.remove('mobile-nav-opened')
    body.classList.add('mobile-nav-closed')
  }, false)

  navCloseBtn.addEventListener('click', function(){
    body.classList.remove('mobile-nav-opened')
    body.classList.add('mobile-nav-closed')
  }, false)
  // console.info('> 评论功能开发中，如需交流，欢迎 Email: admin@zhongdonglin.com <')
}, false)