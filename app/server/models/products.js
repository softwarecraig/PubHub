const products = require('../stubs/products.json');

class Products {

  get(bar_id) {
    return new Promise((resolve, reject) => {
    	const beverages = products.filter((product) => product.bar_id == bar_id);

    	if (!beverages.length) {
    		reject(new Error('Invalid bar id'));
    		return;
    	}
 			
 			resolve(beverages[0].products);
    });
  }

}

module.exports = new Products();
