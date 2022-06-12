let drum_list = document.querySelectorAll(".drum");
// function handleClick () {
// 	alert("i got clicked");
// }
// for (let i = 0; i < drum_list.length; i++) {
// 	drum_list[i].addEventListener("click", handleClick)
// }
for (let i = 0; i < drum_list.length; i++) {
    drum_list[i].addEventListener("click", function() {
        playAudio(this.textContent);
        btnAnim(this.textContent);
    })
}
document.addEventListener("keydown", function(e) {
    playAudio(e.key.toLowerCase());
    btnAnim(e.key.toLowerCase());
});

function playAudio(key) {
    switch (key) {
        case "w":
            let tom_1 = new Audio("sounds/tom-1.mp3"); //constructor
            tom_1.play();
            break;
        case "a":
            let tom_2 = new Audio("sounds/tom-2.mp3"); //constructor
            tom_2.play();
            break;
        case "s":
            let tom_3 = new Audio("sounds/tom-3.mp3"); //constructor
            tom_3.play();
            break;
        case "d":
            let tom_4 = new Audio("sounds/tom-4.mp3"); //constructor
            tom_4.play();
            break;
        case "j":
            let crash_s = new Audio("sounds/crash.mp3"); //constructor
            crash_s.play();
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3"); //constructor
            kick.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3"); //constructor
            snare.play();
            break;
        default:
            console.log("input to playAudio : " + key);
            break;
    }
}

function btnAnim(key) {
    if (key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
        document.querySelector("." + key).classList.add("pressed");
        setTimeout(function() {
            document.querySelector("." + key).classList.remove("pressed");
        }, 200);
    }
}