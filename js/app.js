(function() {
	var app = angular.module('store',[]);
	
	app.controller('StoreController',  function () {
		this.product = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(newCurrent){
			this.current = newCurrent || 0;
		};
	});

	var gems = [
		{name: "Mi Nombre",	price: 2.99, description: "This is a test of what can be archive by using this type of libraries", 	canPurchase: true, 
		images: ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg"]},
		{name: "Tu Producto", price: 3.99, description: "Yet another test using this librarie", canPurchase: true, 
		images: ["img/pic4.jpg", "img/pic5.jpg", "img/pic7.jpg"]},
		{name: "Tu Producto", price: 3.99, description: "Yet another test using this librarie", canPurchase: true, 
		images: ["img/pic4.jpg", "img/pic5.jpg", "img/pic7.jpg"]}
	]

})();



