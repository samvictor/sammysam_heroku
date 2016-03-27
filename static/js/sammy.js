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
	interval: 6000,
	pause: "no"
    
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


// Modal control
var info_modal = document.getElementById('info_modal');
var info_button = document.getElementById("info_button");
var close_modal = document.getElementById("close_modal");

// When the user clicks on the button, open the modal 
info_button.onclick = function() {
    info_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close_modal.onclick = function() {
    info_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == info_modal) {
        info_modal.style.display = "none";
    }
}
//$("div.modal-bg").fadeTo("slow", .5);

