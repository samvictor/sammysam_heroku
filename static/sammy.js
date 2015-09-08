var samButtons = document.getElementsByClassName("samButton");
//var samButton = document.getElementById('samButton');

for(var i = 0; i < samButtons.length; i++)
{
	samButtons[i].style.cursor = 'pointer';
	samButtons[i].style.border = '1px solid black';
	samButtons[i].style.display = 'inline-block';
	samButtons[i].style.padding = '10px';
	samButtons[i].style.paddingTop = '1px';
	samButtons[i].style.paddingBottom = '0px';
	samButtons[i].style.font = 'sans-serif';
	
	
	samButtons[i].onclick = function()
	{
	    document.location.href=this.getAttribute("href");
	};
	
	samButtons[i].onmouseover = function()
	{
	    this.style.backgroundColor = '#9060ff';
	    this.style.color = 'white';
	};
	samButtons[i].onmouseout = function()
	{
	    this.style.backgroundColor = '';
	    this.style.color = '';
	};
}