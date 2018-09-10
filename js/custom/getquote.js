/**
 * Created by stuxnet on 7/17/17.
 */

var colour_n = Math.floor(Math.random() * colours.length);
document.getElementById("promo-3").style.backgroundColor = colours[colour_n];

//XHR DevRant
var xhttp, url = "https://devrant.com/api/devrant/rants/surprise?app=3";
if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
} else {
    // code for old IE browsers
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
let rantText;
console.log("R");
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseObj = JSON.parse(this.responseText);
        console.log(responseObj.rant.text.length);
        // console.log(responseObj.rant.user_username);
        // console.log(responseObj.rant.user_avatar.i);
        rantText = responseObj.rant.text;
        if (rantText.length <= 250) {
            document.getElementById("inner_text").innerText = responseObj.rant.text;
            document.getElementById("author").innerText = responseObj.rant.user_username;
        }
        else {
            xhttp.open("GET", url, true);
            xhttp.send(null);
        }
    }
    else {
        //Taking Static Quotes
        var n = Math.floor(Math.random() * data.data.length);
        // document.getElementById("inner_text").innerText = data.data[n].rant;
        // document.getElementById("author").innerText = data.data[n].author;
    }
};
xhttp.open("GET", url, true);
xhttp.send(null);