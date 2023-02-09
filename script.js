"use strict";

function changeColor() 
{
	let color = document.body.style.color;
	if (color === 'black') 
    {
		document.body.style.color = 'white';
	}

	else if(color === 'white')
	{
		document.body.style.color = 'blue';
	}

	else if(color === 'blue')
	{
		document.body.style.color = 'red';
	}

	else if(color === 'red')
	{
		document.body.style.color = 'green';
	}

	else
	{
		document.body.style.color = 'black';
	}
}
