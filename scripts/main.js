require("frameClss.js");
var frames;
var numberOfFrames;
function create(){
    numberOfFrames = parseInt(document.getElementById("fname").value);
    frames = [numberOfFrames];
    for(let i = 0; i < numberOfFrames; i++){
        let para = document.createElement("div");
        para.id=i;
        para.style.display = 'inline-block';
        para.style.padding = '20px';
        para.style.borderBlockStyle = "solid";
        para.style.borderRightStyle="Solid";
        para.style.borderLeftStyle="Solid";
        para.contentEditable = "true";
        let topElement = document.getElementById("innerContainer").innerHTML = document.getElementById("innerContainer").innerHTML + para.outerHTML;
        frames[i] = new Frame(0, document.getElementById(i.toString()));
    }
}

function play(){

}   

function save(){
    for(let i = 0; i < numberOfFrames; i++){
        console.log(frames[i].element.innerHTML);
        frames[i].button = document.getElementById(i.toString()).innerText;
    }
    console.log(frames);
}