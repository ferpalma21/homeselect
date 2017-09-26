let basket = [];

function scanItem(code){
  basket.push(code);
}

var greenTea = 0;
var strawberries = 0;
var coffee = 0;
var priceTotalStraw, priceTotalGreen, priceTotalCoffee, total;

function discount(){
  for (var i = 0; i < basket.length; i++) {
      if(basket[i] === 'GR1'){
        greenTea++;
      }else if(basket[i] === 'SR1'){
        strawberries ++;
      }else{
        coffee++;
      }
  }
  if(greenTea % 2 === 0){
    console.log('par');
    priceTotalGreen = (greenTea * 3.11) / 2;
  }else{
    console.log('impar');
    priceTotalGreen = (((greenTea - 1) * 3.11)/2) + 3.11;
    console.log(priceTotalGreen);
  }
  if(strawberries >= 3){
    priceTotalStraw = (strawberries * 4.50);
  }else if(strawberries < 3){
    priceTotalStraw = (strawberries * 5);
  }
  priceTotalCoffee = coffee * 11.23;

  return total = priceTotalCoffee + priceTotalGreen + priceTotalStraw;
}
