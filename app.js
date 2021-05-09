// let controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//     duration: window.innerHeight,
//     triggerElement: '.section-pi3',
//     triggerHook: 0
// })
//     .addIndicators({
//         name: "pi3",
//         colorEnd: "red"
//     })
//     .addTo(controller);

// scene.on("update", e => {
//     console.log(e.scrollPos);
// })


// let scene2 = new ScrollMagic.Scene({
//     duration: window.innerHeight,
//     triggerElement: '.section-pi4',
//     triggerHook: 0,
// })
//     .addIndicators({ name: "pi4", colorEnd: "red" })
//     .addTo(controller)

new fullpage("#fullPage", { autoScrolling: true })