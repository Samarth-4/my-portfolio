var typed = new Typed(".typing-2", {
    strings: ["Web Developer.", "Programmer.", "Designer."],
    typeSpeed: 50,
  });

  var sidemenu = document.getElementById("sidemenu");
  function openMenu(){
    sidemenu.style.right = "0";
    
  }
  function closeMenu(){
    sidemenu.style.right = "-200px";

  }