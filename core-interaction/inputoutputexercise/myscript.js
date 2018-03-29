function myFunction()
{
var str=document.getElementById("B").innerHTML;
var n=str.replace("beep","boop");
var n=str.replace("bop","bop");
var n=str.replace("boop","beep");
document.getElementById("B").innerHTML=n;
}
