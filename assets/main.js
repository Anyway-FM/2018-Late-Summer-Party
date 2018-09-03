var g = new Vue({
  el: '#party',
  data: {
    numbers: 100,
    hNumber: 18,
    rawHNumber: 18,
    midWidth: 200,
    midHeight: 200,
    midX: -200,
    midY: -200,
    vNumber: 6,
    isLoaded: false
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
      if (this.vNumber % 2 == 0) {
        if (Math.abs(Math.floor(x / this.hNumber) + 1 - ( this.vNumber / 2 + 0.5) ) < 2) {
          if (Math.abs(x % this.hNumber - this.hNumber / 2 - 0.5) < 3) {
            return "removed"
          }
        }

      }
      else {
        if (Math.abs(Math.floor(x / this.hNumber) + 1 - ( this.vNumber / 2 + 0.5) ) < 2.5) {
          if (Math.abs(x % this.hNumber - this.hNumber / 2 - 0.5) < 3) {
            return "removed"
          }
        }

      }


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

  // g.hNumber = Math.floor( fullWidth / singleWidth / 2) * 2
  g.hNumber = Math.floor( fullWidth / singleWidth )
  g.vNumber = Math.floor( fullHeight / singleHeight )
  g.numbers = g.hNumber * g.vNumber
  console.log( "hNumber: " + g.hNumber + " vNumber: " + g.vNumber);


  if (g.hNumber %2 == 0) {
    g.midX = fullWidth / 2 - singleWidth * 3
    g.midWidth = singleWidth * 6
  }
  else {
    g.midX = fullWidth / 2 - singleWidth * 2.5
    g.midWidth = singleWidth * 5
  }

  if (g.vNumber%2==0) {
    g.midY =( g.vNumber - 4 ) * singleHeight / 2
    g.midHeight = singleHeight * 4
  }
  else {
    g.midY =( g.vNumber - 5 ) * singleHeight / 2
    g.midHeight = singleHeight * 5
  }

  g.isLoaded = true;
}
window.onload = function(){
  initProcess()
}
window.onresize = function(){
  initProcess()
}
