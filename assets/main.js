var g = new Vue({
  el: '#demo',
  data: {
    y: 0,
    numbers: 400,
    ramdom: Math.random(),
    oldY: 0,
    newY: 0,
    pageSpeed: 3,
    currentSlide: 1
  },
  methods: {
    doNothing: function () {
      event.preventDefault()
      g.arrowStatus = 'none'
    }
  }
})

window.onload = function(){
  initProcess()
}
window.onresize = function(){
  initProcess()
}

lastY = 0
lastTime = new Date()

document.addEventListener('touchstart', function(e) {
  g.oldY = e.changedTouches[0].pageY;
}, false);

document.addEventListener('touchend', function(e) {
  console.log('222');
  g.newY = e.changedTouches[0].pageY;
  yOffset = g.newY - g.oldY
  if ( yOffset < -g.pageSpeed) {
    g.currentSlide ++
    console.log('321');
  }
  else if (yOffset > g.pageSpeed) {
    g.currentSlide --
    console.log('321');
  }
}, false);


// window.onscroll = function(){
//   g.y = window.pageYOffset
//   console.log('滑动距离：' + g.y + '，当前页：' + g.currentSlide)
//   if (g.y > 1700) {
//     g.currentSlide = 5;
//   }
//   else if (g.y > 1200) {
//     g.currentSlide = 4;
//   }
//   else if (g.y > 700) {
//     g.currentSlide = 3;
//   }
//   else if (g.y > 200) {
//     g.currentSlide = 2;
//   }
//   else {
//     g.currentSlide = 1
//   }
// }

initProcess = function() {

}
