let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}



// ---------------------------------------gallery----------------------------------



const fullImgBox = document.getElementById('fullImgBox')
const fullImg = document.getElementById('fullImg')


function openFullImg(pic) {
    fullImgBox.style.display = 'flex'
    fullImg.src = pic
}


function closeFullImg() {
    fullImgBox.style.display = 'none'

}