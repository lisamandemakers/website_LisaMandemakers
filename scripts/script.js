gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1500, rotate: -30 },
    ];

    let tween = gsap.to(".wrapper-404", {
        x: "-300vw",
        ease: "power3.out",
        duration: 1,
        paused: true
    });

    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            tween.progress(self.progress);
        }
    });
    
});
z