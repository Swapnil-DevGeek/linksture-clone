gsap.to(".cards .item",{
  transform:"translateX(-450%)",
  scrollTrigger:{
    trigger:".scroll",
    scroller:"body",
    start:"top 0",
    end:"top -200%",
    scrub:2,
    pin:true
  }
})

gsap.from(".providings",{
  backgroundColor:"white",
  transform:"translateX(-100%)",
  duration:1.5,
  scrollTrigger:{
    trigger:".providings",
    scoller:"body",
    start:"top 60%"
  }
}) 

gsap.from(".providings h2",{
  transform:"translateX(-100%)",
  opacity:0,
  stagger:true,
  duration:1,
  delay:1,
  scrollTrigger:{
    trigger:".providings",
    scoller:"body",
    start:"top 60%"
  }
})

gsap.from(".experience h3,.experience h2",{
  transform:"translateY(-100%)",
  opacity:0,
  stagger:true,
  duration:1,
  delay:1,
  scrollTrigger:{
    trigger:".experience",
    scoller:"body",
    start:"top 90%"
  }
})


gsap.from(".scroll",{
  backgroundColor:"white",
  transform:"translateX(-100%)",
  duration:1.5,
  stagger:true,
  scrollTrigger:{
    trigger:".scroll",
    scoller:"body",
    start:"top 60%"
  }
}) 

gsap.from(".scroll .cards,.scroll h4",{
  opacity:0,
  duration:1,
  delay:1,
  scrollTrigger:{
    trigger:".scroll",
    scoller:"body",
    start:"top 60%"
  }
})
