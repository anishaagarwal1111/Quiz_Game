let index=0;
let attempt=0;

let score =0;
let wrong=0;
let questions=myquestions.sort(function(){
  return 0.5 - Math.random();
});

let totalQuestions=questions.length;


$(function(){
  let totalTime=60;
  let min=0;
  let sec=0;
  let counter=0;

let timer=setInterval(function(){
  counter++;
  min=Math.floor((totalTime-counter)/60);
  sec=totalTime-min*60-counter;
  $(".timer span").text(min+":"+sec);

  if(counter === totalTime)
  {
   clearInterval(timer);
 }
  //console.log("min =" + min);
  //console.log("sec =" + sec);
},1000);


printQuestions(index);


});


function printQuestions(i)
{

  $(".question").text(questions[i].question);
  $(".options span").eq(0).text(questions[i].option[0]);
  $(".options span").eq(1).text(questions[i].option[1]);
    $(".options span").eq(2).text(questions[i].option[2]);
  $(".options span").eq(3).text(questions[i].option[3]);

 //console.log(questions[1]);
}



function showNext()
{
  if(index >= questions.length-1)
  {
    showResult();
    return;
  }
  index++;
  printQuestions(index);
  //console.log("next");
}

function checkAnswer(option){
  attempt++;
  let optionclicked=$(option).data("opt");
  console.log(questions[index]);
  //console.log(optionclicked);

  if(optionclicked==questions[index].answer)
  {
    $(option).addClass("right");
     score ++;
  }
  else{
    $(option).addClass("wrong");
    wrong ++;
  }
  $(".score span").text(score);
  

}


let remark=0;
function showResult(){
  $("#QuestionScreen").hide();
  $("#resultScreen").show();
$("#totalScore").text(score);
$("#totQuestion").text(totalQuestions);
$("#attemptQuestions").text(attempt);
$("#correctQuestions").text(score);
$("#wrongQuestions").text(wrong);

 if(score===1)
{
  $("#levelofknowledge").text("poor");
}
else if(score ===2)
{
  $("#levelofknowledge").text("bad");
}
else if(score ===3)
{
  $("#levelofknowledge").text("good");

}
else if(score ===4)
{
  $("#levelofknowledge").text("strong");
}
else if(score===5)
{
  $("#levelofknowledge").text("ver strong");
}
else
$("#levelofknowledge").text("ver poor");


}
