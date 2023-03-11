var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[0].addEventListener("click",function()
    {
        var audio = new Audio("./images/tom-1.mp3");
        audio.play();
    });
}

for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[1].addEventListener("click",function()
    {
        var audio = new Audio("./images/tom-2.mp3");
        audio.play();
    });
}
for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[2].addEventListener("click",function()
    {
        var audio = new Audio("./images/tom-3.mp3");
        audio.play();
    });
}
for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[3].addEventListener("click",function()
    {
        var audio = new Audio("./images/tom-4.mp3");
        audio.play();
    });
}
for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[4].addEventListener("click",function()
    {
        var audio = new Audio("./images/tom-3.mp3");
        audio.play();
    });
}
for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[5].addEventListener("click",function()
    {
        var audio = new Audio("./images/snare.mp3");
        audio.play();
    });
}
for(i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[6].addEventListener("click",function()
    {
        var audio = new Audio("./images/homy.mp3");
        audio.play();
    });
}