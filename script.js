const game = document.querySelector(".game")
const title = document.querySelector(".title");
const resetBtn = document.getElementById("reset-btn");
let xCount = document.getElementById("count-x").value;
let x = document.getElementById("count-x");

let oCount = document.getElementById("count-o").value;
let o = document.getElementById("count-o");





function end(num1,num2,num3) {

    for (let i = 1; i < 10; i++) {
        items[i].disabled = "disabled"
    }


    title.innerHTML =` ${items[num1].innerHTML} winner`;
    document.getElementById("item"+num1).style.backgroundColor="#fff";
    document.getElementById("item"+num2).style.backgroundColor="#fff";
    document.getElementById("item"+num3).style.backgroundColor="#fff";



  let baba =  setInterval(() => {
        title.innerHTML+= "."
        
    }, 500);

    setTimeout(() => {

        for (let i = 1; i < 10; i++) {
            items[i].innerHTML = "";
            document.getElementById("item"+num1).style.backgroundColor="";
            document.getElementById("item"+num2).style.backgroundColor="";
            document.getElementById("item"+num3).style.backgroundColor="";
            clearInterval(baba);
            title.innerHTML = "Player X’s turn"
            mood = "x";
            items[i].disabled = "";

        }

        
    }, 2000)
    // setTimeout(() => {
    //  location.reload();
        
    // }, 4000);

}

function count(num0) {
    
    if (items[num0].innerHTML == "X") {
        xCount++

        x.value = xCount

    }else {
        oCount++
        o.value = oCount

    }
    
}


let items = [];


function winer() {

    for (let i = 1; i < 10; i++) {
      items[i] = document.getElementById("item"+ i) ; 

    }

    if (items[1].innerHTML == items[2].innerHTML && items[2].innerHTML ==items[3].innerHTML && items[2].innerHTML != "") {
        end(1,2,3);

        count(1);
         
        
    }
    else if(items[4].innerHTML == items[5].innerHTML && items[5].innerHTML ==items[6].innerHTML && items[5].innerHTML != ""){
        end(4,5,6); 
        count(5);

    }
    else if(items[7].innerHTML == items[8].innerHTML && items[8].innerHTML ==items[9].innerHTML && items[8].innerHTML != ""){

        end(7,8,9); 
        count(8);

    }
    else if(items[1].innerHTML == items[4].innerHTML && items[4].innerHTML ==items[7].innerHTML && items[1].innerHTML != ""){
        end(1,4,7); 
        count(4);

    }
    else if(items[3].innerHTML == items[6].innerHTML && items[6].innerHTML ==items[9].innerHTML && items[6].innerHTML != ""){
        end(3,6,9); 
        count(6);

    }
    else if(items[1].innerHTML == items[5].innerHTML && items[5].innerHTML ==items[9].innerHTML && items[5].innerHTML != ""){
        end(1,5,9); 
        count(9);

    }
    else if(items[3].innerHTML == items[5].innerHTML && items[5].innerHTML ==items[7].innerHTML && items[5].innerHTML != ""){
        end(3,5,7);
        count(3);

    }
    else if(items[2].innerHTML == items[5].innerHTML && items[5].innerHTML ==items[8].innerHTML && items[5].innerHTML != ""){
        end(2,5,8); 
        count(2);
    }

    else if(items[1].innerHTML != "" && items[2].innerHTML != "" && items[3].innerHTML != "" && items[4].innerHTML != "" && items[5].innerHTML != ""&&items[6].innerHTML != ""&&items[7].innerHTML != ""&&items[8].innerHTML != "" &&items[9].innerHTML != ""){

        for (let i = 1; i < 10; i++) {
            items[i].disabled = "disabled";
        
        }

        title.innerHTML = "==="
        setTimeout(() => {

            for (let i = 1; i < 10; i++) {
                items[i].innerHTML = "";
                items[i].disabled = "";
 
            } 
            title.innerHTML = "Player X’s turn";
            mood = "x";
        }, 2000);

    }

     
}




let mood = "x";

function xOrO(id) {

    let element = document.getElementById(id);

    if (element.innerHTML ==="" && mood ==="x") {
        title.innerHTML = "Player O’s turn"
        element.innerHTML = "X";
        element.style.color ="rgb(9, 255, 0) "
        mood="o";
        
    } else if(element.innerHTML =="" && mood ==="o") {
        title.innerHTML = "Player X’s turn";
        element.innerHTML = "O";
        element.style.color ="yellow"

        mood="x";
    }

    winer();
}






const card = document.getElementById("card");
// click on reset Btn
function cardConfirm() {
    card.style.top = "30%";
    game.style.filter = "blur(5px)"
    resetBtn.disabled = "disabled"
for (let i = 1; i < 10; i++) {

   
  
    document.getElementById("item"+i).disabled="disabled";
} 
}


let items22 =[];

// click on yes 
function resetYes() {
    card.style.top = "-110px";
    game.style.filter = "blur(0px)";

    resetBtn.disabled=""
    location.reload()


    // for (let i = 1; i < 10; i++) {
    //     items22[i] = document.getElementById("item"+i);
    //     items22[i].innerHTML=""
    //     items22[i].disabled=""
    // }
}

// click on No
function resetNo(){
    card.style.top = "-110px";
    game.style.filter = "blur(0px)";

    resetBtn.disabled = "";
    for (let i = 1; i < 10; i++) { 
        items22[i] = document.getElementById("item"+i);
        items22[i].disabled=""

    } 

}


