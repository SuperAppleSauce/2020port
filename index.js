document.getElementById("workButton").addEventListener("click", function () {
  console.log("hola");
  gsap.to(window, {
    duration: 1,
    ease: Expo.easeOut,
    scrollTo: { y: ".heading-2", offsetY: 70 }
  });
});

document.getElementById("section1Btn").addEventListener("click", function () {
  console.log("hola");
  gsap.to(window, {
    duration: 1,
    ease: Expo.easeOut,
    scrollTo: { y: ".landing", offsetY: 70 }
  });
});

gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline();
gsap.from("#section1Btn", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".heading-2",
    scrub: true,
    // markers: true,
    start: "top center",
    end: "top top"
  }
});
