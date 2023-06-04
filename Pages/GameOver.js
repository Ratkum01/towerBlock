let Max = document.getElementById("MaxScore")
let Result = document.getElementById("result");
Result.innerHTML += " " + localStorage.getItem("score");
localStorage.setItem("MaxScore", null);



function HigthScore() {
    if (localStorage.getItem("MaxScore") == null || Result > localStorage.getItem("MaxScore")) {
        localStorage.setItem("MaxScore", Result);
        localStorage.setItem("Resule", Result);
    }

}



