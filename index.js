document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      ease: Expo.easeOut,
      scrollTo: { y: ".heading-2", offsetY: 70 }
    });
  });
});


