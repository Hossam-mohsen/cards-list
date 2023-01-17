const Data =document.querySelector('.row');
import{DataContainer} from "../js/json.js";
console.log(DataContainer[1].author)
showData()

const heartIcones =document.querySelectorAll('.fa-heart')
const heartNumbers =document.querySelectorAll('.heart-number')







// async function getData(){
//   let myResponse = await fetch('cards.json');
//   let myData = await myResponse.json();
//   console.log(myData)

// }

// getData();


 function showData(){
  let divs='';
  for(let i=0; i<DataContainer.length; i++){
    console.log(DataContainer)
    divs +=`
    <div class="col-lg-6 ">
        <div class="Data rounded bg-white rounded shadow ">
          <div class="img-part position-relative   ">
            <img src="${DataContainer[i].src}" class=" rounded-top " alt="">
            <button class="btn btn-dark py-0 rounded-pill">${DataContainer[i].name}</button>
            <i class="fa-solid fa-ellipsis-vertical text-white "></i>
          </div>

          <div class="p-3">
            <div class='d-flex '>
              <span class="iqone${i} ${DataContainer[i].rating}">
                <i class="fa-regular fa-star opacity-25"></i>
                <i class="fa-regular fa-star opacity-25"></i>
                <i class="fa-regular fa-star opacity-25"></i>
                <i class="fa-regular fa-star opacity-25"></i>
                <i class="fa-regular fa-star opacity-25 pe-3"></i>
              </span class='ratingNumber'>
              <span>${DataContainer[i].date}</span>
              
            </div>
            <h5>${DataContainer[i].h5}</h5>
            <p>${DataContainer[i].p}</p>
            <p class="author">${DataContainer[i].author}</p>
            <hr>
            <div class="iqone-part ">
              <i class="fa-solid fa-heart "></i><span class="heart-number me-4 p-1">275</span>
              <i class="fa-solid fa-message "></i><span class=" me-4  p-1">7</span>
              <i class="fa-solid fa-share"></i> <span class=" me-4 p-1"></span>
            </div>
          </div>
        </div>
      </div>
    `
    


  }
  Data.innerHTML=divs;
}





heartIcones.forEach((heart,i) => {
  

heart.addEventListener('click',function(e){
  if(heartNumbers[i].innerHTML=='275'){
    let number=heartNumbers[i].innerHTML;
      number++
      heartNumbers[i].innerHTML=number
      heartIcones[i].style.color = 'red'
  }else {
    let number=heartNumbers[i].innerHTML;
      number--
      heartNumbers[i].innerHTML=number
      heartIcones[i].style.color = 'rgba(0, 0, 0, 0.4)'
  }
});

});



// this loop to select which card will use its stars
for(let n=0; n<DataContainer.length; n++){
let starsGroup = document.querySelectorAll(`.iqone${n}>.fa-star`)




starsGroup.forEach((s,i) => {s.addEventListener('click',function(){

  starsGroup[i].classList.toggle('text-warning')
  starsGroup[i].classList.toggle('opacity-25')
  starsGroup[i].classList.toggle('fa-solid')
  for(let j=0; j<i; j++){
    starsGroup[j].classList.add('fa-solid')
    starsGroup[j].classList.add('text-warning')
    starsGroup[j].classList.remove('opacity-25')
  }
  for(let k=i+1; k<=starsGroup.length; k++ ){
  starsGroup[k].classList.remove('fa-solid')
  starsGroup[k].classList.remove('text-warning')
  starsGroup[k].classList.add('opacity-25')
}



})



  
});

}
