var path = require('path');

class Main {

  /**
  * Our constructor will pull in the app object
  * @param {object} application
  * @return void
  */
  constructor(app) {
    this.app = app;
  }

  /**
     * Main entry point into the controller
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @return {object} response - the response object.
    */
  main(req, res, next) {
    res.set('Cache-Control', 'max-age=60, public, s-maxage=60, stale-while-revalidate=30');
    res.sendFile(path.join(__dirname, '/../../../public/index.html'));
  }

}


module.exports = Main;
