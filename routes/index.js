var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	navLinks: ['home','catalog','shipping and payment','price','contacts'],
  	slideCount: 3,
  	breadcrumbs: ['Home','Catalog','Category Name'],
  	sidebarMenu: [
  		{
  			menu: 'Cars',
  			submenu: ['Mersedes', 'BMV', 'Aston Martin']
  		},
  		{
  			menu: 'Household',
  			submenu: ['Microwaves', 'Dishwashes','Fridges']
  		},
  		{
  			menu: 'Computers',
  			submenu: ['PC','Laptops']
  		},
  		{
  			menu: 'Clothing',
  			submenu: ['Shirts','Shoes','Socks','Jeans']
  		}
  	],
  	itemPrice: ['550.95','350.95','850.95','550.95','350.95','850.95'],
  	paginationCount: 7
  	
  });
});

module.exports = router;
