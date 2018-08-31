var g = new Vue({
  el: '#party',
  data: {
    numbers: 100,
    seedCount: 0,
    globalSeed: 1
  },
  methods: {
    randomNumber: function (x) {
      x = Math.random() * x
      return (x.toFixed(0))
    },
    reSeed: function() {
      this.globalSeed = this.globalSeed / 2
    }
  }
})

initProcess = function() {
  fullWidth = window.getComputedStyle(document.getElementById('content')).width.replace(/[^-\d\.]/g, '')
  fullHeight = window.getComputedStyle(document.getElementById('content')).height.replace(/[^-\d\.]/g, '')
  hNumber = Math.floor( fullWidth / 80 )
  vNumber = Math.floor( fullHeight / 110 )
  g.numbers = hNumber * vNumber
  console.log(g.numbers );
}
window.onload = function(){
  initProcess()

}
window.onresize = function(){
  initProcess()
}
