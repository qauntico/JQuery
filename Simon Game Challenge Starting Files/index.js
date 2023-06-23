var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0
var playgame = false
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*3)+1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    level++
}
$('div[type="button"]').click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    CheckAnswer()
})
function playSound(name) {
    var playsound = new Audio('sounds/'+name+'.mp3')
    playsound.play()
}
function animatePress(currentColour){
    $("#"+currentColour).addClass('pressed');
    setTimeout(() => {
        $("#"+currentColour).removeClass('pressed')
    }, 100);
}
$(document).keydown(function(event){
    $('#level-title').text('level '+level)
    playgame = true
    nextSequence()
})
function CheckAnswer(currentLevel){
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            
        }
}

