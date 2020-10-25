function sendtowhatsapp()
{
var mytext = getUrlVars()["text"];
	var inputVal = document.getElementById("textboxid").value;
	var outputVal = inputVal.replace(" ", "~");
	var outputVal2 = outputVal.replace(" ", "~");
	var outputVal3 = outputVal2.replace(" ", "~");
	var outputVal4 = outputVal3.replace(" ", "~");
window.location = 'http://wa.me/?text='+inputVal+' wishing you a Happy Deepavali 2020 %0A%0AOpen this ðŸ‘‡ %0A%0Adcs5604.com/cny2020.html?name='+outputVal4;
}

function loadname() {
	var mytext = getUrlVars()["text"];
	var mytext2 = mytext.replace("%20", "&nbsp");
	var mytext3 = mytext2.replace("%20", "&nbsp");
	var mytext4 = mytext3.replace("%20", "&nbsp");
	var mytext5 = mytext4.replace("%20", "&nbsp");
	document.write("<p class='aligncenter'><b><font size='600' face='verdana' color='#AF7AC5'> " + mytext5.big() + "</font></b></p>");
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}