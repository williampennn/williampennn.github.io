var myObj = { "FrameRepair":"$75",
             "TireRepair":"$55",
             "HandlebarRepair":"$15",
             "LightRepair":"$30",
             "BrakesRepair":"$50",
             "SpokesRepair":"$25",
             "PedalRepair":"$45",
             "ChainReplacent":"$35",
             "SeatRepair":"$43",
             "PaintJob":"$35"};
var myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving
var text = localStorage.getItem("testJSON");
var obj = JSON.parse(text);

$(function(){
    $("#test").text(obj.FrameRepair);
    $("#test1").text(obj.TireRepair);
    $("#test2").text(obj.HandlebarRepair);
    $("#test3").text(obj.LightRepair);
    $("#test4").text(obj.BrakesRepair);
    $("#test5").text(obj.SpokesRepair);
    $("#test6").text(obj.PedalRepair);
    $("#test7").text(obj.ChainReplacent);
    $("#test8").text(obj.SeatRepair);
    $("#test9").text(obj.PaintJob);
    
})

