const heartIcone =document.querySelector('.fa-heart')
const heartNumber =document.querySelector('.heart-number')
const commentNumber=document.querySelector('.comment-number')
const shearNumber=document.querySelector('.share-number')
const stars = document.querySelectorAll('.fa-star')



heartIcone.addEventListener('click',function(e){

  let name =e.target;
  if(heartNumber.innerHTML=='275'){
    let number=heartNumber.innerHTML;
      number++
      heartNumber.innerHTML=number
      heartIcone.style.color = 'red'
  }else {
    let number=heartNumber.innerHTML;
      number--
      heartNumber.innerHTML=number
      heartIcone.style.color = 'rgba(0, 0, 0, 0.4)'
  }
});




stars.forEach((s,i) => {s.addEventListener('click',function(){
  
  for(let j=0; j<=i; j++){
    stars[j].classList.replace('fa-regular','fa-solid')
    stars[j].classList.add('text-warning')
    stars[j].classList.remove('opacity-25')
  }
  for(let k=i+1; k<=stars.length; k++ ){
  stars[k].classList.replace('fa-solid','fa-regular')
  stars[k].classList.remove('text-warning')
  stars[k].classList.add('opacity-25')
}
})
  
});


