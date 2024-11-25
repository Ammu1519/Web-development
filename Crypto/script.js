function showOpacity(show){
	var classes = document.getElementsByClassName(show)[0];
	classes.style.opacity = "1";
	classes.style.cursor= "pointer";
	classes.style.zIndex = "1";
}
function hideOpacity(show){
	var classes = document.getElementsByClassName(show)[0];
	classes.style.opacity = "0";
	classes.style.cursor= "context-menu";
	classes.style.zIndex = "-1";
}
function subscribeEmail(){
	var sub = document.getElementById("subscribe");
	var button = document.getElementById("but-subscribe");
	
	if(sub.value != ""){
		button.style.background = "hsla(0, 0%, 95%, 50%)";
	    button.style.cursor = "pointer";
		
	} else{ button.style.background = "transparent";
	    button.style.cursor = "not-allowed";
		  }
}
