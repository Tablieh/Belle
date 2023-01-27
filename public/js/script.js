window.onscroll = function() {myFunction1()};

var header = document.getElementById("nav");
var sticky = header.offsetTop;
let mobile =(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
function myFunction1() {
  if (window.pageYOffset > sticky && document.body.scrollTop > 1570 && document.body.scrollTop < 2000) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    myBtn.style.opacity = "1";
  } else {
    myBtn.style.opacity = "0";
  }
  
  if (mobile && window.pageYOffset > sticky) {
    header.classList.add("sticky-mobile");
  }
  else{
    header.classList.remove("sticky-mobile");
  }
}; 


function goup(x){

const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
  //window.scrollTo(0, 0);
  window.scrollTo(
    {
      top: 0,
      left: 0,
      behavior: "smooth"
    }
  );
});
}
// Set the date we're counting down to
var countDownDate = new Date("Mar 01, 2023 12:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "  " + hours + "  "
  + minutes + "  " + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    setTimeout(() => {
      panel.style.display = "none";
    }, 1100);
  });
  
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }


document.addEventListener("click", (e) => {
  const elem = e.target;
  if (elem.id==="myImg") {
    modal.style.display = "block";
    modalImg.src = elem.dataset.biggerSrc || elem.src;
    captionText.innerHTML = elem.alt; 
  }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

const grayImage = document.querySelector('.img-box')
const grayImage1 = document.querySelector('.img-box1')
const grayImage2 = document.querySelector('.img-box2')
const grayImage3 = document.querySelector('.img-box3')
const grayImage4 = document.querySelector('.img-box4')
const grayImage5 = document.querySelector('.img-box5')
const grayImage6 = document.querySelector('.img-box6')
const grayImage7 = document.querySelector('.img-box7')
// change from gray to color
function colorgray(x) {
  grayImage.style.filter= "grayscale(0)";
  grayImage.style.transition= "0.5s";
  setTimeout(() => {
    grayImage.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray1(x) {
  grayImage1.style.filter= "grayscale(0)";
  grayImage1.style.transition= "0.5s";
  setTimeout(() => {
    grayImage1.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray2(x) {
  grayImage2.style.filter= "grayscale(0)";
  grayImage2.style.transition= "0.5s";
  setTimeout(() => {
    grayImage2.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray3(x) {
  grayImage3.style.filter= "grayscale(0)";
  grayImage3.style.transition= "0.5s";
  setTimeout(() => {
    grayImage3.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray4(x) {
  grayImage4.style.filter= "grayscale(0)";
  grayImage4.style.transition= "0.5s";
  setTimeout(() => {
    grayImage4.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray5(x) {
  grayImage5.style.filter= "grayscale(0)";
  grayImage5.style.transition= "0.5s";
  setTimeout(() => {
    grayImage5.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray6(x) {
  grayImage6.style.filter= "grayscale(0)";
  grayImage6.style.transition= "0.5s";
  setTimeout(() => {
    grayImage6.style.filter= "grayscale(1)";
    }, 700);
}
function colorgray7(x) {
  grayImage7.style.filter= "grayscale(0)";
  grayImage7.style.transition= "0.5s";
  setTimeout(() => {
    grayImage7.style.filter= "grayscale(1)";
    }, 700);
}
let party = document.querySelector(".party")

  party.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content div")
        for (const image of images) {
            if(!image.classList.contains("party")){
               image.style.display="none"
            }
             else{
                image.style.display="block"
            }
        }
})
let friends = document.querySelector(".friends")
let box = document.querySelector(".box-content")
friends.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content div")
    for (const image of images) {
        if(!image.classList.contains("friends")){
           image.style.display="none"
        }
        else{
            image.style.display="block"
        }
    }
})
let family = document.querySelector(".family")

    family.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content div")
        for (const image of images) {
            if(!image.classList.contains("family")){
               image.style.display="none"
            }
             else{
                image.style.display="block"
            }
        }
})
let tous = document.querySelector(".tous")
tous.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content div")
    for (const image of images) {
        image.style.display="block"
    }
})
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
function refrech(reload)
   {
    window.location.hash = '#here';
    const ref = window.location.reload(true)
    setTimeout("ref;", 5000);
 }
 var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function changeColorButton()
   {
  let no = document.querySelector('.no')
  let yes = document.querySelector('.yes')
  yes.style.border ="dashed #88f988 3px";
    yes.style.background="#ddffdd";
    yes.style.color="#88f988";
    no.style.border ="dashed rgb(175, 175, 175) 3px";
    no.style.color="rgb(3, 3, 3)";
    no.style.background="none";
}
function changeColorButton1()
   {
    let no = document.querySelector('.no')
    let yes = document.querySelector('.yes')
    no.style.border ="dashed #db3c3c 3px";
    no.style.background="#ea8484";
    no.style.color="#db3c3c";
    yes.style.border ="dashed rgb(175, 175, 175) 3px";
    yes.style.color="rgb(3, 3, 3)";
    yes.style.background="none";
}
function navi() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}