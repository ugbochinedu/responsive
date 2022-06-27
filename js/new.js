
// menuButton.addEventListener("click",function(){
//   navBar.classList.toggle("show");
//   menuButton.classList.toggle("fa-cross");
// });

// $(document).ready(function(){
//   $('.menu').click(function(){
//     $('navbar').toggleClass('show');
//   });
// });

// navBar.style.top =='-100px';
// menuButton.onclick = function () {
//   if (navBar.style.right== '-100vw') {
//          sidenav.style.right = "0";

//   } else {

//   }
// }

const menuButton = document.querySelector(".header #menu");

menuButton.onclick = function toggleMenu(){
  document.querySelector("#menu").classList.toggle("show");
  document.querySelector(".navbar").classList.toggle("show");
}

document.onscroll = () => {
  document.querySelector("#menu").classList.remove("show");
  document.querySelector(".navbar").classList.remove("show");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
