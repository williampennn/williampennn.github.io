var t = 30;
var s = 50;
var f = windChill(t,s);
console.log(f);
document.getElementById("windchill").innerHTML = f;


function windChill(t,s)
{
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16); 
    
    return Math.round(f);
}