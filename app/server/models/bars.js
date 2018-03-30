const bars = require('../stubs/bars.json');

class Bars {

  get(search) {
    return new Promise((resolve, reject) => {
    	if (search) {
    		const filteredBars = bars.filter((bar) => {
    			return bar.name.toLowerCase().indexOf(search) > -1;
    		});
    		resolve(filteredBars);
    		return;
    	}
      resolve(bars);
    });
  }

}

module.exports = new Bars();
