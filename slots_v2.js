/*
	Javascript program created by Yovanny Henao on 09/25/19
	Professor Albayram helped create the getBet function
	HW3 
	Program used for slot machine running on html
*/

var pot = 50;
var bet;

function getBet()
{
	let inputs = document.getElementsByTagName("input");	//grabs input by tagname 
	for(let i = 0; i < inputs.length; i++)					
	{
		if(inputs[i].checked)							//checks value of input
		{
			bet = inputs[i].value;						//assigns value to bet
			break;										//value found, breaks iteration to continue program
		}
	}
	if(bet > pot && pot > 0)
		{
			alert("Invalid bet amount, you do not have enough money to bet $"+ bet);
			bet = 0;
		}	
	console.log(bet);								//For testing purposes, to verify correct bet amount was assigned
}
function spin()
{
    getBet();
	if(pot > 0 && bet > 0)
		checkWinner();
	else if(pot == 0)
		alert("Game Over! Reload page to start again!");
}
function checkWinner()
{
    var imageArray = ['img/cherry.png', 'img/grape.png', 'img/heart.png', 'img/lemon.png', 'img/num7.png', 'img/orange.png', 'img/strawberry.png'];
    
    x = Math.floor(Math.random() * 7);							//random value (within range) assigned to variables
    y = Math.floor(Math.random() * 7);
    z = Math.floor(Math.random() * 7);
    
    document.getElementById('fruit1').src = imageArray[x];		//images from slots change to another image based on subscript value inside imageArrray
    document.getElementById('fruit2').src = imageArray[y];
    document.getElementById('fruit3').src = imageArray[z]; 
    
    if(x == y && y == z)										//jackpot condition, all three images match
        { 
            alert("Congratulations! You hit the jackpot!");
            pot = pot + (15 * bet);
            console.log(pot);
            var num = pot;
            var n = num.toString();
            var text = document.getElementById('pot');			//text representing pot value gets updated
            text.textContent = n;
        }
    else
        {
            pot = pot - bet;
            console.log(pot);
            var num = pot;
            var n = num.toString();
            var text = document.getElementById('pot');
            text.textContent = n;
			
			if(pot == 0)										//Game Over condition
			{
				var zero = 0;
				var z = zero.toString();
				var text = document.getElementById('pot');
				text.textContent = z;
				alert("Game Over! YOU LOST ALL YOUR MONEY! Reload page to start over");
			}
        }
}