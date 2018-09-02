var g = new Vue({
  el: '#party',
  data: {
    numbers: 100,
    seedCount: 0,
    hNumber: 18,
    rawHNumber: 18,
    midWidth: 200,
    midHeight: 200,
    midX: 200,
    midY: 200,
    vNumber: 6,
    globalSeed: 1
  },
  methods: {
    randomNumber: function (x) {
      x = Math.random() * x
      return (x.toFixed(0))
    },
    randomPercentage: function (x) {
      x = Math.random() * x * 2  - x
      return (x.toFixed(0))
    },
    isRemoved: function(x) {
      // console.log(x)
      // console.log(this.rawHNumber);
      if (Math.abs(Math.floor(x / this.hNumber) - this.vNumber / 2 + 0.5) < 2) {
        if (Math.abs(x % this.hNumber - this.hNumber / 2 - 0.5) < 3) {
          return "removed"
        }
      }


    },
    reSeed: function() {
      this.globalSeed = this.globalSeed / 2
    }
  }
})

initProcess = function() {
  singleWidth = window.getComputedStyle(document.getElementById('w1')).width.replace(/[^-\d\.]/g, '')
  singleHeight = window.getComputedStyle(document.getElementById('w1')).height.replace(/[^-\d\.]/g, '')

  fullWidth = window.getComputedStyle(document.getElementById('content')).width.replace(/[^-\d\.]/g, '')
  fullHeight = window.getComputedStyle(document.getElementById('content')).height.replace(/[^-\d\.]/g, '')

  screenWidth = window.getComputedStyle(document.getElementById('party')).width.replace(/[^-\d\.]/g, '')
  screenHeight = window.getComputedStyle(document.getElementById('party')).height.replace(/[^-\d\.]/g, '')

  g.rawHNumber = fullWidth / singleWidth

  g.hNumber = Math.floor( fullWidth / singleWidth / 2) * 2
  g.vNumber = Math.floor( fullHeight / singleHeight )
  g.numbers = g.hNumber * g.vNumber
  console.log( "/" + g.rawHNumber + "/" + g.numbers + "/" + g.hNumber);

  g.midX = ( screenWidth - singleWidth * 6 ) /2
  g.midY = ( screenHeight - singleHeight * 3 ) /2
  g.midWidth = singleWidth * 6
  g.midHeight = singleHeight * 3
}
window.onload = function(){
  initProcess()
}
window.onresize = function(){
  initProcess()
}
