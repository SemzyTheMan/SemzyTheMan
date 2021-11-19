const navBar= document.querySelector('.nav-bar')
const nav=document.querySelector('.nav')
const body =document.querySelector('body')
const humanize=document.querySelector('.introduction')
const fourthSection= document.querySelector('.fourth-section')
const secondSection= document.querySelector('.second-section')
const thirdSection= document.querySelector('.third-section')
const footer= document.querySelector('.footer')
const work = document.querySelector('.work')
let hamburger=true
navBar.addEventListener("click",function(){
     if(hamburger==true){
         navBar.classList.add('close')
         nav.style.display='block'
        secondSection.classList.add('none')
        humanize.classList.add('none')
        thirdSection.classList.add('none')
        fourthSection.classList.add('none')
        footer.classList.add('none')
        work.classList.add('none')
         hamburger=false
        
     }
     else{
         navBar.classList.remove('close')
         nav.style.display='none'
        secondSection.classList.remove('none')
        humanize.classList.remove('none')
        thirdSection.classList.remove('none')
        fourthSection.classList.remove('none')
        footer.classList.remove('none')
         work.classList.remove('none')
         hamburger=true
         
     }
    
})
