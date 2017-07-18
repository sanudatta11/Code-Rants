/**
 * Created by stuxnet on 7/17/17.
 */

var colour_n = Math.floor(Math.random() * colours.length);
document.getElementById("promo-3").style.backgroundColor = colours[colour_n];

var n = Math.floor(Math.random() * data.data.length);
document.getElementById("inner_text").innerText = data.data[n].rant;
document.getElementById("author").innerText = data.data[n].author;

