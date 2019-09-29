
var firebaseConfig = {
    apiKey: "AIzaSyBG9NoF8G2pBUFM9CPzn9kASlz4LfX03VE",
    authDomain: "naturalization-c76e1.firebaseapp.com",
    databaseURL: "https://naturalization-c76e1.firebaseio.com",
    projectId: "naturalization-c76e1",
    storageBucket: "",
    messagingSenderId: "57838735625",
    appId: "1:57838735625:web:fde2a70bc1df1cdd5503d8",
    measurementId: "G-CRTCRT1DEB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var database = firebase.database();

var nameIn = $("#I1").val();

var correctAnswer = 0;

var wrongAnswer = 1;

var unAnswered = 0;

var number = 120;

var intervalId;

$("#B1").on("click", function(){
    $("#introBox").hide();
    $("#questions").show();
});

$("#B1").on("click", run);

// run();
function run() {
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
}

function decrement() {
number--;

$("#timeRem").html(number);

if (number === 0) {
    $("#questions").css("display", "none");
    $("#results").show();

    var nameIn = $("#I1").val();

    let answer1 = $( ".q1:checked" ).val();
    console.log(answer1);
    if(answer1 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
    }
    else if (answer1 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
    }
    else{
        unAnswered++;
        $("#UA").html(unAnswered);
        answer1 = "blank"
    }
    
    
    let answer2 = $( ".q2:checked" ).val();
    if(answer2 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer2 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer2 = "blank"
        }
    
    let answer3 = $( ".q3:checked" ).val();
    if(answer3 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer3 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer3 = "blank"
        }
    let answer4 = $( ".q4:checked" ).val();
    if(answer4 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer4 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer4 = "blank"
        }
    let answer5 = $( ".q5:checked" ).val();
    if(answer5 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer5 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer5 = "blank"
        }
    let answer6 = $( ".q6:checked" ).val();
    if(answer6 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer6 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer6 = "blank"
        }
    let answer7 = $( ".q7:checked" ).val();
    if(answer7 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer7 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer7 = "blank"
        }
    let answer8 = $( ".q8:checked" ).val();
    if(answer8 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer8 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer8 = "blank"
        }
    let answer9 = $( ".q9:checked" ).val();
    if(answer9 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer9 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer9 = "blank"
        }
    let answer10 = $( ".q10:checked" ).val();
    if(answer10 == "C"){
    
        correctAnswer++;
        $("#CA").html(correctAnswer);
        console.log(correctAnswer);
    
        }
        else if (answer10 == "F"){
    
        $("#IA").html(wrongAnswer);
        wrongAnswer++;
        console.log(wrongAnswer);
        }
        else {
        unAnswered++;
        $("#UA").html(unAnswered);
        answer10 = "blank"
        }

        if(correctAnswer > 5) {
        $("#pass").html("<p>You Passed!</p>" + "<img id='flag2' src='assets/images/flag2.gif' alt=''>");

            }
        else{
        $("#fail").html("You Failed");
        $("#fail").css("color", "red");
        }

        var checkedAnswers = {
            Name:nameIn,
            Q1:answer1,
            Q2:answer2,
            Q3:answer3,
            Q4:answer4,
            Q5:answer5,
            Q6:answer6,
            Q7:answer7,
            Q8:answer8,
            Q9:answer9,
            Q_10:answer10,
        
        
        }
        
        database.ref().push(checkedAnswers);
        
        console.log(checkedAnswers.Name);
        console.log(checkedAnswers.Q2);
  }
}




$("#B2").on("click", function(){

    // $("#introBox").hide();
    $("#questions").hide();
    $("#results").show();

    var nameIn = $("#I1").val();

let answer1 = $( ".q1:checked" ).val();
console.log(answer1);
if(answer1 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

}
else if (answer1 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
}
else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer1 = "blank";
}


let answer2 = $( ".q2:checked" ).val();
if(answer2 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer2 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer2 = "blank"
    }

let answer3 = $( ".q3:checked" ).val();
if(answer3 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer3 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer3 = "blank"
    }
let answer4 = $( ".q4:checked" ).val();
if(answer4 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer4 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer4 = "blank"
    }
let answer5 = $( ".q5:checked" ).val();
if(answer5 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer5 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer5 = "blank"
    }
let answer6 = $( ".q6:checked" ).val();
if(answer6 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer6 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer6 = "blank"
    }
let answer7 = $( ".q7:checked" ).val();
if(answer7 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer7 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer7 = "blank"
    }
let answer8 = $( ".q8:checked" ).val();
if(answer8 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer8 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer8 = "blank"
    }
let answer9 = $( ".q9:checked" ).val();
if(answer9 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer9 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer9 = "blank"
    }
let answer10 = $( ".q10:checked" ).val();
if(answer10 == "C"){

    correctAnswer++;
    $("#CA").html(correctAnswer);
    console.log(correctAnswer);

    }
    else if (answer10 == "F"){

    $("#IA").html(wrongAnswer);
    wrongAnswer++;
    console.log(wrongAnswer);
    }
    else {
    unAnswered++;
    $("#UA").html(unAnswered);
    answer10 = "blank"
    }

if(correctAnswer > 5) {
$("#pass").html("<p>You Passed!</p>" + "<img id='flag2' src='assets/images/flag2.gif' alt=''>");

    }
else{
$("#pass").html("You Failed");
$("#pass").css("color", "red");
}

$("#questions").css("display", "none");
$("#results").css("visibility", "visible");


clearTimeout(intervalId);

var checkedAnswers = {
    Name:nameIn,
    Q1:answer1,
    Q2:answer2,
    Q3:answer3,
    Q4:answer4,
    Q5:answer5,
    Q6:answer6,
    Q7:answer7,
    Q8:answer8,
    Q9:answer9,
    Q_10:answer10,


}
database.ref().push(checkedAnswers);

// database.ref().push(checkedAnswers);

console.log(checkedAnswers.Name);
console.log(checkedAnswers.Q2);
});