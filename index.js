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

function updatepage() {
  var elem = document.getElementById("firsth1");
  elem.innerHTML = "CHESS";
  elem = document.getElementById("secondh1");
  elem.innerHTML = "COACH";
  elem = document.getElementById("mydis");
  elem.innerHTML = "Based in Pune";
  elem = document.getElementById("myinfo");
  elem.innerHTML = "WORK EXPERIENCE OF 4+ YEARS";
  elem = document.getElementById("jobprofile");
  elem.innerHTML =
    "PREVIOUSLY WORKED AT ZUGZWANG ACADEMY <i class=ri-arrow-right-up-fill></i>";
  elem.href = "https://www.zugzwang.in";
  elem = document.getElementById("t1");
  elem.innerHTML = "BEGINNER";
  elem = document.getElementById("t2");
  elem.innerHTML = "INTERMEDIATE";
  elem = document.getElementById("aboutmexd");
  elem.innerHTML = "ADVANCED";
  elem = document.getElementById("infoaboutme");
  elem.innerHTML =
    "I am Saubhagya, a chess enthusiast and coach based in Pune, India. With a profound love for the game, I guide aspiring players through intricate strategies, openings, middlegames, and endgames. My personalized approach aims to nurture both skill and passion, creating lasting connections to the world of chess.";
  elem = document.getElementById("mybtn");
  elem.innerHTML = "LICHESS";
  elem.href = "https://lichess.org/@/saubhagya";
  elem = document.getElementById("btn");
  elem.innerHTML = "CHESS.COM";
  elem.href = "https://www.chess.com/member/saubhi65";
  elem = document.getElementById("img1");
  elem.src = "../assets/img/c1.png";
  elem = document.getElementById("img2");
  elem.src = "../assets/img/c2.png";
  elem = document.getElementById("img3");
  elem.src = "../assets/img/c3.png";
}

function checkpage() {
  const value = sessionStorage.getItem("value");
  if (value == 1) {
    updatepage();
  }
}

function fun() {
  sessionStorage.setItem("value", 1);
  window.location.href = "./main.html";
}
function fun2() {
  sessionStorage.setItem("value", 2);
  window.location.href = "./main.html";
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
