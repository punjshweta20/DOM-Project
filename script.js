let abc = document.querySelector("h5");
let xyz = document.querySelector('#add');

let temp = 0;
 

xyz.addEventListener('click', function(){
    if(temp==0){
    abc.innerHTML="Following";
    abc.style.fontWeight=600;
    xyz.innerHTML="Unfollow";
    temp = 1;
    }else{
        abc.innerHTML="Suggested For You";
        abc.style.fontWeight=600;
        xyz.innerHTML="Follow";
        temp =0;
        

    }
});

