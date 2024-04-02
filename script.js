// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let myAP = 100;
let fungusHP=100;

function arcayneScepter(){
    myAP-=12
    fungusHP-=14
    //prevent AP from going below zero
    if (myAP<0) {
        myAP =0
    }
    if (fungusHP<0) {
        fungusHP =0
    }
    RenderAP()
    RenderHP()
}

function entangle() {
    myAP-=23
    fungusHP-= -9
    if (myAP<0) {
        myAP =0
    }
    if (fungusHP<0) {
        fungusHP =0
    }
    RenderAP()
    RenderHP()
}
function DragonBlade() {
    myAP-=33
    fungusHP-=25
    if (myAP<0) {
        myAP =0
    }
    if (fungusHP<0) {
        fungusHP =0
    }
    RenderAP()
    RenderHP()
}
function Starfire(){
    myAP-=23
    fungusHP-=25
    if (myAP<0) {
        myAP =0
    }
    if (fungusHP<0) {
        fungusHP =0
    }
    RenderAP()
    RenderHP()
}
//What appears is line of span rather than the value
function RenderAP() {
let APvalue = document.getElementById("ap-value")
APvalue.textContent = myAP
}

function RenderHP() {
    let HPvalue = document.getElementById("hp-value")
HPvalue.textContent = fungusHP
    
}



function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()