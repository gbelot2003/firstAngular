(function() {
	var app = angular.module('store',[]);
	
	app.controller('StoreController',  function () {
		this.product = gems;
	});

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(newCurrent){
			this.current = newCurrent || 0;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.review.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function () {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function () {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	var gems = [
		{name: "Mi Nombre",	price: 2.99, description: "This is a test of what can be archive by using this type of libraries", 	canPurchase: true, 
			images: ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg"],
			review: [
				{stars: 5, body:"Risus elit nunc et? Vut duis ultrices in augue placerat hac enim scelerisque phasellus, ac urna nisi in nec nisi, rhoncus odio placerat pellentesque facilisis tincidunt nec odio parturient in porta proin, non, nunc augue porta! Amet et, lorem arcu augue penatibus, sed nec! Etiam. A nunc lectus ultrices nec", author:"Juan Doe"}
			]
		},
		{name: "Tu Producto", price: 3.99, description: "Yet another test using this librarie", canPurchase: true, 
			images: ["img/pic4.jpg", "img/pic5.jpg", "img/pic7.jpg"],
			review: [
				{stars: 4, body:"Risus elit nunc et? Vut duis ultrices in augue placerat hac enim scelerisque phasellus, ac urna nisi in nec nisi, rhoncus odio placerat pellentesque facilisis tincidunt nec odio parturient in porta proin, non, nunc augue porta! Amet et, lorem arcu augue penatibus, sed nec! Etiam. A nunc lectus ultrices nec", author:"Luis Doe"}
			]
		},
		{name: "Tu Producto", price: 3.99, description: "Yet another test using this librarie", canPurchase: true, 
			images: ["img/pic4.jpg", "img/pic5.jpg", "img/pic7.jpg"],
			review: [
				{stars: 3, body:"This is a test of review of this pane", author:"jane Doe"},
			]
		}
	]

})();



