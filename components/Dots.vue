<template>
  <canvas id="dots" ref="dots"></canvas>
</template>

<script>
  var circles = [],

// SETTINGS
    opacity = 0.9,                                      // the opacity of the circles 0 to 1
    colors = ['rgba(101, 162, 164,' + opacity + ')',       // an array of rgb colors for the circles
      'rgba(157, 193, 189,' + opacity + ')',
      'rgba(113, 158, 151,' + opacity + ')',
      'rgba(90, 142, 149,' + opacity + ')',
      'rgba(174, 192, 186,' + opacity + ')'
    ],
    minSize = 1,                                        // the minimum size of the circles in px
    maxSize = 10,                                       // the maximum size of the circles in px
    numCircles = 30,                                   // the number of circles
    minSpeed = -1,                                     // the minimum speed, recommended: -maxspeed
    maxSpeed = 1,                                    // the maximum speed of the circles
    expandState = true;                                      // the direction of expansion

  function buildArray() {
    'use strict';

    var  canvas = document.getElementById("dots"),
      context = canvas.getContext("2d");

    circles = [];

    for (var i =0; i < numCircles ; i++){
      var color = Math.floor(Math.random() * (colors.length - 1 + 1)) + 1,
        left = Math.floor(Math.random() * (canvas.width - 0 + 1)) + 0,
        top = Math.floor(Math.random() * (canvas.height - 0 + 1)) + 0,
        size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
        leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10,
        topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10,
        expandState = expandState;

      while(leftSpeed == 0 || topSpeed == 0){
        leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10,
          topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed)/10;
      }
      var circle = {color:color, left:left, top:top, size:size, leftSpeed:leftSpeed, topSpeed:topSpeed, expandState:expandState };
      circles.push(circle);
    }
  }

  function build(){
    'use strict';

    var  canvas = document.getElementById("dots"),
      context = canvas.getContext("2d");

    for(var h = 0; h < circles.length; h++){
      var curCircle = circles[h];
      context.fillStyle = colors[curCircle.color-1];
      context.beginPath();
      if(curCircle.left > canvas.width+curCircle.size){
        curCircle.left = 0-curCircle.size;
        context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
      }else if(curCircle.left < 0-curCircle.size){
        curCircle.left = canvas.width+curCircle.size;
        context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
      }else{
        curCircle.left = curCircle.left+curCircle.leftSpeed;
        context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
      }

      if(curCircle.top > canvas.height+curCircle.size){
        curCircle.top = 0-curCircle.size;
        context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);

      }else if(curCircle.top < 0-curCircle.size){
        curCircle.top = canvas.height+curCircle.size;
        context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
      }else{
        curCircle.top = curCircle.top+curCircle.topSpeed;
        if(curCircle.size != maxSize && curCircle.size != minSize && curCircle.expandState == false){
          curCircle.size = curCircle.size-0.1;
        }
        else if(curCircle.size != maxSize && curCircle.size != minSize && curCircle.expandState == true){
          curCircle.size = curCircle.size+0.1;
        }
        else if(curCircle.size == maxSize && curCircle.expandState == true){
          curCircle.expandState = false;
          curCircle.size = curCircle.size-0.1;
        }
        else if(curCircle.size == minSize && curCircle.expandState == false){
          curCircle.expandState = true;
          curCircle.size = curCircle.size+0.1;
        }
        context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
      }

      context.closePath();
      context.fill();
      context.ellipse;
    }
  }


  var xVal = 0;

  window.requestAnimFrame = (function (callback) {
    'use strict';
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000/60);
      };
  })();

  function animate() {
    'use strict';
    var canvas = document.getElementById("dots"),
      context = canvas.getContext("2d");

    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);


    // draw the next frame
    xVal++;
    build();

    //console.log("Prep: animate ==> requestAnimFrame");
    // request a new frame
    requestAnimFrame(function () {
      animate();
    });
  }
export default {
  data () {
    return {
      canvas: null,
      context: null
    }
  },
  props: ['theme'],
  computed: {

  },
  mounted () {
    this.canvas = this.$refs.dots;
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    if (this.theme === 'girl') {
      colors = ['rgba(255, 158, 162,' + opacity + ')',       // an array of rgb colors for the circles
        'rgba(253, 203, 233,' + opacity + ')',
        'rgba(249, 211, 130,' + opacity + ')',
        'rgba(222, 78, 78,' + opacity + ')',
        'rgba(247, 222, 231,' + opacity + ')'
      ]
    } else {
      colors = ['rgba(101, 162, 164,' + opacity + ')',       // an array of rgb colors for the circles
        'rgba(157, 193, 189,' + opacity + ')',
        'rgba(113, 158, 151,' + opacity + ')',
        'rgba(90, 142, 149,' + opacity + ')',
        'rgba(174, 192, 186,' + opacity + ')'
      ]
    }

    buildArray();
    animate();


    window.onresize = () => {
      console.log("resize");

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      buildArray();
    };
  },

  beforeDestroy () {
  },
}
</script>

<style lang="scss" scoped>
  #dots {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
</style>
