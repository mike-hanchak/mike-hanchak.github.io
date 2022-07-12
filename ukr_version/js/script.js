/*--Cursor Animation------------*/

const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
  constructor() {
    // config
    this.target = { x: 0.5, y: 0.5 }; // mouse position
    this.cursor = { x: 0.5, y: 0.5 }; // cursor position
    this.speed = 0.2;
    this.init();
  }
  bindAll() {
    ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }
  onMouseMove(e) {
    //get normalized mouse coordinates [0, 1]
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    // trigger loop if no loop is active
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  }
  render() {
    //calculate lerped values
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
    document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
    //cancel loop if mouse stops moving
    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
      Math.pow(this.target.y - this.cursor.y, 2)
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    //or continue looping if mouse is moving
    this.raf = requestAnimationFrame(this.render);
  }
  init() {
    this.bindAll();
    window.addEventListener("mousemove", this.onMouseMove);
    this.raf = requestAnimationFrame(this.render);
  }
}

new Cursor();

/*--Scroll Animation 1-----------------------------*/

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.main_page_2');
for (let elm of elements) {
  observer.observe(elm);
}
let options2 = { threshold: [0.5] };
let observer2 = new IntersectionObserver(onEntry, options2);
let elements2 = document.querySelectorAll('.main_page_3');
for (let elm of elements2) {
  observer2.observe(elm);
}
let options3 = { threshold: [0.5] };
let observer3 = new IntersectionObserver(onEntry, options3);
let elements3 = document.querySelectorAll('.btn_20_dolars');
for (let elm of elements3) {
  observer3.observe(elm);
}
let options4 = { threshold: [0.5] };
let observer4 = new IntersectionObserver(onEntry, options4);
let elements4 = document.querySelectorAll('.btn_100_dolars');
for (let elm of elements4) {
  observer4.observe(elm);
}
let options5 = { threshold: [0.5] };
let observer5 = new IntersectionObserver(onEntry, options5);
let elements5 = document.querySelectorAll('.btn_150_dolars');
for (let elm of elements5) {
  observer5.observe(elm);
}
let options6 = { threshold: [0.5] };
let observer6 = new IntersectionObserver(onEntry, options6);
let elements6 = document.querySelectorAll('.main_page_4');
for (let elm of elements6) {
  observer6.observe(elm);
}
let options7 = { threshold: [0.5] };
let observer7 = new IntersectionObserver(onEntry, options7);
let elements7 = document.querySelectorAll('.name_horrible');
for (let elm of elements7) {
  observer7.observe(elm);
}
let options8 = { threshold: [0.5] };
let observer8 = new IntersectionObserver(onEntry, options8);
let elements8 = document.querySelectorAll('.main_page_1_1');
for (let elm of elements8) {
  observer8.observe(elm);
}
let options9 = { threshold: [0.5] };
let observer9 = new IntersectionObserver(onEntry, options9);
let elements9 = document.querySelectorAll('.header_main');
for (let elm of elements9) {
  observer9.observe(elm);
}
let options10 = { threshold: [0.5] };
let observer10 = new IntersectionObserver(onEntry, options10);
let elements10 = document.querySelectorAll('.slider');
for (let elm of elements10) {
  observer10.observe(elm);
}
let options11 = { threshold: [0.5] };
let observer11 = new IntersectionObserver(onEntry, options11);
let elements11 = document.querySelectorAll('.footer_1_1');
for (let elm of elements11) {
  observer11.observe(elm);
}
let options12 = { threshold: [0.5] };
let observer12 = new IntersectionObserver(onEntry, options12);
let elements12 = document.querySelectorAll('.footer_1_2');
for (let elm of elements12) {
  observer12.observe(elm);
}
let options13 = { threshold: [0.5] };
let observer13 = new IntersectionObserver(onEntry, options13);
let elements13 = document.querySelectorAll('.text_on_lines');
for (let elm of elements13) {
  observer13.observe(elm);
}
let options14 = { threshold: [0.5] };
let observer14 = new IntersectionObserver(onEntry, options14);
let elements14 = document.querySelectorAll('.bg_lines');
for (let elm of elements14) {
  observer14.observe(elm);
}


/*--SLIDER REVIEWS-----------------------------*/

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:3,
  });
});

