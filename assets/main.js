var g = new Vue({
  el: '#demo',
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

window.onload = function(){

}
