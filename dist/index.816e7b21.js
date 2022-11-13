gsap.registerPlugin(ScrollTrigger);
// gsap.to(window, { duration: 2, scrollTo: 10 });
const items = gsap.utils.toArray("#container > *");
const itemWidth = items[0].querySelector(".circle").offsetWidth;
const timeline = gsap.timeline({
    paused: true
});
const createItemTl = (item)=>{
    return gsap.fromTo(item, 1, {
        scale: 0.38,
        x: "-20.75%"
    }, {
        scale: 1,
        x: 0,
        yoyo: true,
        repeat: 1
    });
};
items.forEach((item, index)=>{
    const tl = createItemTl(item);
    timeline.add(tl).addLabel("tl-" + index);
});
const trigger = ScrollTrigger.create({
    animation: timeline,
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self)=>{}
});
console.log(timeline.getChildren());
const appendSection = ()=>{
    const firstPost = document.querySelector(".post:first-child");
    const lastPost = document.querySelector(".post:last-child");
    const el = document.createElement("div");
    el.classList.add("post");
    el.innerHTML = lastPost.innerHTML;
    firstPost.after(el);
    const tl = createItemTl(el);
    timeline.shiftChildren(1, false, 1);
    timeline.add(tl, 1);
    trigger.refresh();
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: el.offsetTop
        },
        overwrite: "auto"
    });
};
document.querySelector("button").addEventListener("click", appendSection);

//# sourceMappingURL=index.816e7b21.js.map
