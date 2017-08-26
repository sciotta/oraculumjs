var introQuestionArray = new Array(
	"Grande oráculo poderia me responder",
	"Oráculo, com toda sua sabedoria",
	"Senhor oráculo, me responda",
	"Oráculo, me diga por favor"
);

var nullAnswers = new Array(
	"Quem achas que es para falar comigo?",
	"Você não é um escolhido para que eu possa te responder!"
);

var randomizeArray = function(array)
{
	var number = Math.floor(Math.random()*array.length);
	return array[number];
}

$(document).ready(function ()
{
	$("#answer").hide();
	var answer = "";
	var isAnswer = false;
	var used = false;
	
	var introQuestion = randomizeArray(introQuestionArray);
	
	var count = 0;
	$("#question").keypress(function(e)
	{
		var textValue = $(this).val();
		//COMMA
		if(e.keyCode ==59)
		{
			isAnswer = isAnswer ? false : true;
			
			if(!isAnswer)
			{
				used = true;
			}
			
			e.preventDefault();
			return;
		}
		//ENTER
		if(e.keyCode ==13)
		{
			if(answer == "")
			{
				answer = randomizeArray(nullAnswers);
			}
			
			$("#answer").html(answer.replace(';',''));
			$("#answer").fadeIn(3000);
		}
		if(isAnswer && !used)
		{		
			var intro = introQuestion.split("");
			answer+= String.fromCharCode(e.keyCode);
			
			$(this).val(textValue + intro[count]);
			count++;
			
			e.preventDefault();
		}
	});
	
	$("#reload").click(function()
	{
		answer = "";
		isAnswer = false;
		used = false;
		$("#answer").hide();
		
		$("#question").val("");		
	});
});		