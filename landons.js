const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const faders = document.querySelectorAll('.fade-in');
    
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

const appearOptions = {};

    const appearOnScroll = new IntersectionObserver
    (function(entries,appearOnScroll) {
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    return;
  } else {
entry.target.classList.add("appear");
appearOnScroll.unobserve(entry.target);
  }
});
    },
     appearOptions);