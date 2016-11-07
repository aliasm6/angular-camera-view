(function() {
  'use strict';
  const app = angular.module('cameraApp');
  const camerasArray = [{id: 1,name: 'Nikon D3100 DSLR',image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',rating: 4,price: 369.99,onSale: true},
  {id: 2,name: 'Canon EOS 70D',image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',rating: 2,price: 1099.0,onSale: false},
  {id: 3,name: 'Nikon D810A',image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg', rating: 3, price: 3796.95, onSale: true}]

  app.controller('CameraControl', function($rootScope) {
    this.cameras = camerasArray;
    $rootScope.shoppingCart = [];

    this.addToCart = function(cam) {
      $rootScope.shoppingCart.push(cam)

      $rootScope.shoppingCartPrices =
      $rootScope.shoppingCart.map((e) => { return e.price });

      $rootScope.shoppingCartSubTotal = $rootScope.shoppingCartPrices.reduce((current, previous) => {
        return current + previous
      });

      $rootScope.shoppingCartTax = $rootScope.shoppingCartSubTotal * .0877899;

      $rootScope.shoppingCartTotal = $rootScope.shoppingCartSubTotal + $rootScope.shoppingCartTax;
    };
  })
  app.controller('CartControl', function($rootScope) {
    let shoppingCartPrices = 0;



    this.subTotal = function() {
      if (shoppingCartPrices === 0) {
        return 0;
      } else {
        return shoppingCartPrices.reduce((current, previous)=> {
          return current + previous
        })
      }
    }
  })

})();
