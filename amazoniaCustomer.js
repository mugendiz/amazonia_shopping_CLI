var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "amazonia_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  productSearch();
});

// Prompt for product ordering

function productSearch() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    pickProduct(res);
  })
}

function pickProduct(products) {

  inquirer
    .prompt([
      {
      name: "choice",
      type: "input",
      message: "What would you like to order?",
    }
  ])
    .then(function(answer) {
      var itemSelected = parseInt(answer.choice);
      console.log(itemSelected);

      var product = productList(itemSelected, products);
      console.log(product);

        if (product) {
          showStock(product);
        }
        else {
          console.log("Product is not listed");
          productSearch();
        }
    })
}


// Quantity of items
function showStock(product) {
  inquirer
  .prompt ([
    {
    name: "quantity",
    type: "input",
    message: "How many items would you want to order?"
  }
  ])
  .then(function(answer){
    var quantity = parseInt(answer.quantity)
    console.log('inside quantity prompt', quantity);
    if (quantity > product.stock_quantity) { console.log("Sorry, we do not have enough in stock");
    showItemList();
  }
  else {
    buy(product, quantity)
  }
})
}


function buy(product, quantity) {
  console.log(product.item_id);
  connection.query(
    "update items set stock_quantity = stock_quantity - " + quantity + "  where id =  " + product.item_id,
    function(err,res) {
      console.log(err,res);
      console.log("\n nice purchase" + quantity + " "  + product.product_name + "$ for $" + product.price * quantity);
      productSearch();    }
  )
}



function productList(itemSelected, products) {
    for (var i = 0; i < products.length; i++) {
      console.log(products.length);
      if (products[i].item_id === itemSelected) {
        return products[i];
      }
      console.log(itemSelected, products[i]);
    }
    return null;
  };
