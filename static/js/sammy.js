var samButtons = document.getElementsByClassName("samButton");
//var samButton = document.getElementById('samButton');

for(var i = 0; i < samButtons.length; i++)
{
	samButtons[i].onclick = function()
	{
	    document.location.href=this.getAttribute("href");
	};
	
	samButtons[i].onmouseover = function()
	{
	    this.style.backgroundColor = '#300768';
	    this.style.color = 'white';
	};
	samButtons[i].onmouseout = function()
	{
	    this.style.backgroundColor = '';
	    this.style.color = '';
	};
}


	
// carousel controls
$('#showcase_carousel').carousel({
	interval: 8000
    
});
	