var t1 = new TimelineLite;

function play() {
    t1.to(".square", 1, {x:270, ease: Power1.easeInOut}, "+=1");
}

