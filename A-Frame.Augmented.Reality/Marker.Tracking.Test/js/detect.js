var timer = setInterval(testHere, 500);

function testHere(){
    var message = document.getElementById("message");
    if(document.querySelector("#one").object3D.visible != true){
        message.style.visibility = "hidden";
    }else{
        message.style.visibility = "visible";
    }
}
