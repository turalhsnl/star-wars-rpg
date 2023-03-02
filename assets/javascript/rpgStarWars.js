var r1=function (){
    return Math.round(Math.random()*100+90);
};
var r2=function (){
    return Math.round(Math.random()*100+80);
};
var r3=function (){
    return Math.round(Math.random()*100+80);
};
var r4=function (){
    return Math.round(Math.random()*100+80);
};




var randomhit=function(){
    return Math.round(Math.random()*40+10);
}


document.querySelector('.dart-maul .char-health').innerHTML=r1();
document.querySelector('.dart-sidious .char-health').innerHTML=r2();
document.querySelector('.obi-wan .char-health').innerHTML=r3();
document.querySelector('.luke-skywalker .char-health').innerHTML=r4();




document.querySelector('#attack-button').addEventListener('click',()=>{ 
    if(document.querySelector('#selected-character .char-health').innerHTML<=0){
        document.querySelector('#selected-character .char-health').innerHTML=0;
        document.querySelector('#selected-character').remove();
        lose();
        
        
    }
    
    if(document.querySelector('#defender .char-health').innerHTML<=0){
        document.querySelector('#defender .char-health').value=0;
        document.querySelector('#defender').remove();
        win();
    

    }
    

    document.querySelector('#selected-character .char-health').innerHTML-=randomhit();
    document.querySelector('#defender .char-health').innerHTML-=randomhit();
    
})

function win(){ 
    alert("qelebe qazandiniz");
}

function lose(){
    alert("meglub oldunuz")
}

// if(document.querySelector('#selected-character .char-health').innerHTML<=0){
//     document.querySelector('#selected-character .char-health').innerHTML=0;
//     document.querySelector('#selected-character').remove();
// }


// if(document.querySelector('#defender .char-health').innerHTML<=0){
//     document.querySelector('#defender .char-health').innerHTML=0;
//     document.querySelector('#defender').remove();
// }



document.querySelectorAll('.select .character').forEach(element => {
    element.addEventListener("click",()=>{
        // console.log(document.querySelector('#selected-character').innerHTML)
        selectedChar=element.innerHTML;
        console.log(document.getElementById(element.id))


    if(document.querySelector('#selected-character').innerHTML==''){
        document.querySelector('#selected-character').innerHTML=selectedChar
        document.getElementById(element.id).remove();
    }
    else{
        document.querySelector('#defender').innerHTML=selectedChar;
        document.getElementById(element.id).remove();
    }



   

    })





});


   
















