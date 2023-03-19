let submitButton = document.getElementById("button");
let starGroup1 = document.getElementById("star1").children;
let starGroup2 = document.getElementById("star2").children;
let starGroup3 = document.getElementById("star3").children;

let score = 0;

for(i = 0; i< starGroup1.length; i++){
    starGroup1[i].addEventListener("click", starLight, false)
    starGroup2[i].addEventListener("click", starLight, false)
    starGroup3[i].addEventListener("click", starLight, false)
}

submitButton.addEventListener("click", alertBox, false)


function starLight(){
    let prevSib = this.previousElementSibling;
    let nextSib = this.nextElementSibling;
    console.log(this.style.fontVariationSettings)
    if(this.style.fontVariationSettings == '"FILL" 1'){
        score -= 1;
        while(nextSib){
            if(nextSib.style.fontVariationSettings == '"FILL" 1'){
                score -= 1;
            }
            nextSib = nextSib.nextElementSibling;
        }
        while(prevSib){
            if(prevSib.style.fontVariationSettings == '"FILL" 1'){
                score -= 1;
            }
            prevSib = prevSib.previousElementSibling;
        }
    }
    revSib = this.previousElementSibling;
    nextSib = this.nextElementSibling;
    let scoreFix = 0;
    if(this.style.fontVariationSettings == '"FILL" 0'){
        while(prevSib){
            if(prevSib.style.fontVariationSettings == '"FILL" 1'){
                scoreFix += 1;
            }
            prevSib = prevSib.previousElementSibling;
        }
        score -= scoreFix;
    }

    prevSib = this.previousElementSibling;
    nextSib = this.nextElementSibling;

    this.style.fontVariationSettings = "'FILL' 1"
    score += 1
    while(prevSib){
        prevSib.style.fontVariationSettings = "'FILL' 1"
        score +=1 
        prevSib = prevSib.previousElementSibling
    }
    while(nextSib){
        nextSib.style.fontVariationSettings = "'FILL' 0"
        nextSib = nextSib.nextElementSibling
    }
}

function alertBox(){
    let percentage = (score/15)*100
    let alertText = "Your point to my website is: " + percentage.toPrecision(3) + "%" + "  Thanks buddy :D"
    alert(alertText)
}