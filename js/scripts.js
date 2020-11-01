var elTimeForm = document.querySelector('.time__form');
var elResultWalk = document.querySelector('.result-walk');
var elResultBike = document.querySelector('.result-bike');
var elResultCar = document.querySelector('.result-car');
var elResultPlane = document.querySelector('.result-plane');

elTimeForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var elDistanceInput = parseFloat(elTimeForm.querySelector('.distance__input').value.trim(), 10);
  
  
  var speedFoot = 0.06;
  var speedBike = 20.1 / 60;
  var speedCar = 70 / 60;
  var speedPlane = 800 / 60;
  
  
  // var byFoot = Math.floor(elDistanceInput/speedFoot) + "hour" + Math.abs(elDistanceInput/speedFoot);
  
  
  if (elDistanceInput <=0 ) {
    alert('Please enter only positive numbers!');
   
  } else {
    var byFoot = Math.floor((elDistanceInput/speedFoot) / 24 / 60) + ' days ' + Math.floor((elDistanceInput/speedFoot) / 60 % 24) + ' h ' + (Math.floor(elDistanceInput/speedFoot) % 60) + ' min';
    
    var byBike = Math.floor((elDistanceInput/speedBike) / 24 / 60) + ' days ' + Math.floor((elDistanceInput/speedBike) / 60 % 24) + ' h ' + (Math.floor(elDistanceInput/speedBike) % 60) + ' min';
    
    var byCar = Math.floor((elDistanceInput/speedCar) / 24 / 60) + ' days ' + Math.floor((elDistanceInput/speedCar) / 60 % 24) + ' h ' + (Math.floor(elDistanceInput/speedCar) % 60) + ' min';
    
    var byPlane = Math.floor((elDistanceInput/speedPlane) / 24 / 60) + ' days ' + Math.floor((elDistanceInput/speedPlane) / 60 % 24) + ' h ' + (Math.floor(elDistanceInput/speedPlane) % 60) + ' min';
    
    
    elResultWalk.textContent = byFoot;
    elResultBike.textContent = byBike;
    elResultCar.textContent = byCar;
    elResultPlane.textContent = byPlane;
  }
  
  
  
});