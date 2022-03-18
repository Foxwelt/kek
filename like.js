let like = document.querySelector('.heart');
let likeAdded = document.querySelector('.heart-added');
let button = document.querySelector('button');
let likeNumbers = document.querySelector('.counter');

likeNumbers.textContent = 0;


button.onclick =  function(){
like.classList.toggle('heart');
like.classList.toggle('heart-added');

if(like.classList.contains('heart-added')){

    likeNumbers.textContent++;
    

}

else{

    likeNumbers.textContent--;

}


}

