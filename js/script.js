// $(document).ready(function () {
//   $("#hide1").hide();
//   $("#show1").mouseenter(function () {
//     $("#hide1").show();
//   });
//   $("body").click(function () {
//     $("#hide1").hide();
//   });

//   $("#show1").click(function () {
//     $("#hide1").toggle();
//   });

//   $("#hide2").hide();
//   $("#show2").mouseenter(function () {
//     $("#hide2").show();
//   });
//   $("body").click(function () {
//     $("#hide2").hide();
//   });

//   $("#show2").click(function () {
//     $("#hide2").toggle();
//   });

//   $(".barbtn_hide1").hide();
//   $(".down_angle11").hide();
//   $(".barbtn_show1").click(function () {
//     $(".barbtn_hide1").toggle();
//     $(".down_angle1").toggle();
//     $(".down_angle11").toggle();
//   });
//   $(".barbtn_hide2").hide();
//   $(".down_angle22").hide();
//   $(".barbtn_show2").click(function () {
//     $(".barbtn_hide2").toggle();
//     $(".down_angle2").toggle();
//     $(".down_angle22").toggle();
//   });
// });

// function openNav() {
//   document.getElementById("shutter").style.width = "80%";
//   document.getElementById("menu_toggle_cross").style.display = "block";
//   document.getElementById("menu_toggle_cross").style.transition = "0.8s";
//   document.getElementById("nav").classList.add("blur");
//   document.getElementById("header").classList.add("blur");
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("shutter").style.width = "0%";
//   document.getElementById("menu_toggle_cross").style.display = "none";
//   document.getElementById("menu_toggle_cross").style.transition = "0.8s";
//   document.getElementById("nav").classList.remove("blur");
//   document.getElementById("header").classList.remove("blur");
//   document.body.style.backgroundColor = "white";
// }

// $(document).ready(function () {
//     $(".menu-toggle_bar").click(function(){
//         $(".nav").addClass("navblur");
//     })
// }

// function card1MessageIn() {
//   document.getElementById("tag_data1").style.display = "none";
//   document.getElementById("content_data1").style.display = "block";
// }
// function card1MessageOut() {
//   document.getElementById("tag_data1").style.display = "block";
//   document.getElementById("content_data1").style.display = "none";
// }
// function card2MessageIn() {
//   document.getElementById("tag_data2").style.display = "none";
//   document.getElementById("content_data2").style.display = "block";
// }
// function card2MessageOut() {
//   document.getElementById("tag_data2").style.display = "block";
//   document.getElementById("content_data2").style.display = "none";
// }
// function card3MessageIn() {
//   document.getElementById("tag_data3").style.display = "none";
//   document.getElementById("content_data3").style.display = "block";
// }
// function card3MessageOut() {
//   document.getElementById("tag_data3").style.display = "block";
//   document.getElementById("content_data3").style.display = "none";
// }

// // Scroll Button Start
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}
// // Scroll Button End
