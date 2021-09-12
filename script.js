    
    let numberRandom1 = Math.floor((Math.random() * 6)+ 1)  
    let numberRandom2 = Math.floor((Math.random() * 6)+ 1)  
    
    let images1 = 'images/dice'+ numberRandom1 +'.png'
    let images2 = 'images/dice'+ numberRandom2 +'.png'
    
    document.querySelector(".dice .img1").setAttribute("src",images1)
    document.querySelector(".dice .img2").setAttribute("src",images2)
    
    if (numberRandom1 > numberRandom2) {
        document.querySelector("h1").textContent = "Player1 Win!";    
    }else if(numberRandom2 > numberRandom1){
        document.querySelector("h1").textContent = "Player2 Win!"; 
    }else{
        document.querySelector("h1").textContent = "Drawn!";
    }
    console.log()
