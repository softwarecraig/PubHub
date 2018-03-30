const Main = require('./controllers/main');
const Bars = require('./models/bars');
const Products = require('./models/products');

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    const controller = new Main(app);
    return controller.main(req, res, next);
  });

  app.get('/api/bars', (req, res, next) => {
    Bars.get(req.query.s)
      .then(
        (response) => res.send(response),
        (err) => res.status(500).send(err)
      )
  });

  app.get('/api/bars/:bar_id/products', (req, res, next) => {
    Products.get(req.params.bar_id)
      .then(
        (response) => res.send(response),
        (err) => res.status(404).send({error: err.message})
      )
  });

  // wildcard for 404 handling
  app.get('*', (req, res, next) => {
    const controller = new Main(app);
    return controller.main(req, res, next);
  });

};
