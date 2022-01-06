require("frameClss.js");
require("https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.36/Tone.js");
var frames;
var numberOfFrames = 0;
function create(){
    if(numberOfFrames !== 0){
        document.getElementById("innerContainer").innerHTML = '';
    }
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
    const synth = new Tone.Synth().toDestination();
    var i = 0;                  //  set your counter to 1
    myLoop();
    function myLoop() {         //  create a loop function
      setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        if(frames[i].button !== ""){
            synth.triggerAttackRelease("C4", "8n");   //  your code here
            document.getElementById("currentFrameInner").innerText = (i + 1)
            i++;                    //  increment the counter
        }
        else{
            document.getElementById("currentFrameInner").innerText = (i + 1)
            i++;
        }

        if (i < numberOfFrames) {           //  if the counter < 10, call the loop function
          myLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
      }, 1000/60)
    }
}   

function save(){
    for(let i = 0; i < numberOfFrames; i++){
        console.log(frames[i].element.innerHTML);
        frames[i].button = document.getElementById(i.toString()).innerText;
    }
    console.log(frames);
}