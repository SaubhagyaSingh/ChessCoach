const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var t = gsap.timeline();

  t.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.25,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      stagger: 0.2,
    })

    .from("#herofooter", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      stagger: 0.2,
    });
}

function circleBend() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mouseFollower(xscale, yscale);
  });
}

function mouseFollower(scalex, scaley) {
  var x = scalex;
  var y = scaley;
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${x},${y})`;
  });
}

mouseFollower();

firstPageAnim();

circleBend();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diff = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.75,
    });
  });
  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientX - rotate;
    rotate = dets.clientX;

    var difference = elem.getBoundingClientRect().top - dets.clientY;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: difference,
      right: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diff * 0.8),
    });
  });
});
