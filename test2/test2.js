
var body = document.body;
var addBtn = document.getElementById('btn-create');
var deleteBtn = document.getElementsByClassName('btn-delete');
var getProduct = document.getElementsByClassName('product-name');
var productsArray = [];

function createRow() {
  addBtn.addEventListener('click', e => {
    var productNameValue = "<b>Name: </b>" + document.getElementById('productNameValue').value;
    var productPriceValue = "<b>Price: $</b>"+document.getElementById('productPriceValue').value;
    var productCodeValue = "<b>Code: </b>" + document.getElementById('productCodeValue').value;
    var newProductRow = document.createElement('div');
    if(productNameValue === '<b>Name: </b>'|| productPriceValue === '<b>Price: $</b>' || productCodeValue === '<b>Code: </b>'){

    }else{
    newProductRow.setAttribute('class','row');
    newProductRow.innerHTML = newProductHtml();
    newProductRow.querySelector('.product-name').innerHTML = productNameValue;
    newProductRow.querySelector('.product-price').innerHTML = productPriceValue;
    newProductRow.querySelector('.product-code').innerHTML = productCodeValue;
    document.getElementById('all').appendChild(newProductRow);


    if(getProduct.length%3===0){
      newProductRow.setAttribute('class','third-row');
    }

    deleteRow();
    }
  });
}

function newProductHtml(){
  return '<div class ="col-xs-4">'+
  '<span class="product-name"></span>'+
  '</div>' +
  '<div class="col-xs-4">' +
  '<span class="product-price"></span>'+
  '</div>'+
  '<div class="col-xs-4">' +
  '<span class="product-code"></span>' +
  '</div>'+
  '<button class="btn btn-delete">DELETE</button></div>';
}

  function deleteRow(){
    for( i = 0; i < getProduct.length; i++){
      console.log(getProduct.length, deleteBtn);
      deleteBtn[i].addEventListener('click', e => {
        e.currentTarget.parentNode.remove();
      });
    }
  }



createRow();
