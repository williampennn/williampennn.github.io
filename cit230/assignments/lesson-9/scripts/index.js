var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var weather = request.response;
    townInformation(weather);
    
}
function townInformation(jsonObj) {
    var towns = jsonObj['towns'];
    
    for (var i = 0; i < towns.length; i++) {
        if(i == 2) {
            i = 3;
        }
       
        var myArticle = document.createElement('article'); //.setAttribute("class", "townarticle");
        var myH2 = document.createElement('h2'); //.setAttribute("class", "townh2");
        var myPara1 = document.createElement('p'); //.setAttribute("class", "townp");
        var myPara2 = document.createElement('p'); //.setAttribute("class", "townp");
        var myPara3 = document.createElement('p'); //.setAttribute("class", "townp");
        var myPara4 = document.createElement('p'); //.setAttribute("class", "townp");
        var myList = document.createElement('ul');
        
        myH2.textContent = towns[i].name;
        myPara1.textContent = 'Motto: ' + towns[i].motto;
        myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        
   

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
        

        
    }

// 25ccf8b03ebbb0ee api key

 
    
    

