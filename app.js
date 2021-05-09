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

new fullpage("#fullPage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const timeLine = new TimelineMax({ delay: 0.5 });
        timeLine.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })

        if (destination.index === 1) {
            const pi = document.querySelectorAll('.image-pi3');
            const description = document.querySelectorAll('.description');

            timeLine
                .fromTo(description, 0.3, { opacity: 0 }, { opacity: 1 })
                .fromTo(pi, 0.5, { x: "300%" }, { x: "-40%" })
        }
        else if (destination.index === 2) {
            console.log("sds")
            const pi = document.querySelectorAll('.image-pi4');
            const description = document.querySelectorAll('.description');

            timeLine
                .fromTo(description, 0.3, { opacity: 0 }, { opacity: 1 })
                .fromTo(pi, 0.5, { x: "300%" }, { x: "-40%" })
        }
    }
})