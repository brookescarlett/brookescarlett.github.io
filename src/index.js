// import Typed from 'typed.js';

document.addEventListener("DOMContentLoaded", function() {

  let iAmArray = [
    "foodie",
    "nerd",
    "taurus",
    "full-stack web developer"
  ]

  let passionArray = [
    "yoga",
    "traveling",
    "learning",
    "clean design"
  ]

  let iCounter = 0
  let pCounter = 0

  // document.addEventListener('click', e => {
  //   if (e.target.id === "i-am") {
  //     e.preventDefault()
  //     e.target.innerText = iAmArray[iCounter % 4]
  //     iCounter++
  //   } else if (e.target.id === "passionate"){
  //     e.preventDefault()
  //     e.target.innerText = passionArray[pCounter % 4]
  //     pCounter++
  //   }
  // })

  // var t = setInterval(function() {
  //   let test = document.getElementById('i-am')
  //   test.innerText = iAmArray[iCounter % 4]
  //   iCounter++
  // }, 2000);

  var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
      }





})
