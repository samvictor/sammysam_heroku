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
	    this.style.backgroundColor = 'rgba(0,0,0,0.4)';
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
	interval: 6000,
	pause: "no"
}).on('slide.bs.carousel', function (e)
{
    var nextH = $(e.relatedTarget).height();
    $(this).find('.active.item').parent().animate({ height: nextH }, 500);
});

	
var carousel_paused = false
function PauseClicked(id)
{
	if (carousel_paused)
	{
		carousel_paused = false
		id.innerHTML = "Pause <span class='glyphicon glyphicon-pause' aria-hidden='true'></span>"
		$('#showcase_carousel').carousel('cycle');
		$('#showcase_carousel').carousel('next');
	}
	else
	{
		carousel_paused = true
		id.innerHTML = "Play <span class='glyphicon glyphicon-play' aria-hidden='true'></span>";
		id.innerHTML = "Play <span class='glyphicon glyphicon-play' aria-hidden='true'></span>";
		$('#showcase_carousel').carousel('pause');
	}
}
