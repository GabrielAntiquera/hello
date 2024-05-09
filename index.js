let robo_text = document.querySelector('.robo_text');
let robo_text2 = document.querySelector('.robo_text2');
let robo_img = document.querySelector('.robo_img');

function imgHover(x,imgr)
{
  if(x==1){
  imgr.src= "images/Robo1.png";
  robo_text.classList.add('active');
  robo_text2.classList.add('active');
  robo_text.style.animation = 'fade-in 0.5s forwards';
  robo_text2.style.animation = 'fade-out 0.5s forwards';
  }
  if (x==2){
  imgr.src= "images/Robo2.png";
  robo_text.classList.remove('active');
  robo_text2.classList.remove('active');
  robo_text.style.animation = 'fade-out 1s forwards';
  robo_text2.style.animation = 'fade-in 0.5s forwards';
  }

}
window.addEventListener('hover', imgHover);

let ScrollItems = document.querySelector(".ScrollItems");

ScrollItems.addEventListener('wheel', (event) => {
  event.preventDefault();

  ScrollItems.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});

let nile = document.querySelector('.Sitem_text1');
function imghHover2(x,imgr)
{
  if(x==1){
  imgr.src= "images/nile_1.png";
  nile.classList.add('active');
  nile.style.animation = 'fade-in .5s forwards';
  }
  if (x==2){
    imgr.src= "images/nile_2.png";
    nile.classList.remove('active');
  }
}
window.addEventListener('hover', imghHover2);

let laza = document.querySelector('.Sitem_text2');
function imghHover3(x,imgr)
{
  if(x==1){
  imgr.src= "images/JuiceLaza/laza.png";
  laza.classList.add('active');
  laza.style.animation = 'fade-in .5s forwards';
  }
  if (x==2){
    imgr.src= "images/JuiceLaza/laza_2.png";
    laza.classList.remove('active');
  }
}
window.addEventListener('hover', imghHover3);

let poster = document.querySelector('.Sitem_text3');
function imghHover4(x,imgr)
{
  if(x==1){
  imgr.src= "images/posters/AYRFS_2.png";
  poster.classList.add('active');
  poster.style.animation = 'fade-in .5s forwards';
  }
  if (x==2){
    imgr.src= "images/posters/AYRFS_1.png";
    poster.classList.remove('active');
  }
}
window.addEventListener('hover', imghHover4);