var express = require("express");
var app = express();

app.use("/:id", express.static(__dirname + "/../client/dist"));

const carouselServer = "http://localhost:3001";
const sidebarServer = "http://localhost:3004";
const ratingsAndReviewsServer = "http://localhost:3002";
const rVDealsServer = "http://localhost:3003";

app.get(`/:id/api/recently-viewed-product-data`, function(req, res) {
  const id = req.params.id;
  res.redirect(`${rVDealsServer}/${id}/api/recently-viewed-product-data`);
});

app.get(`/:id/api/recently-viewed-service-data`, function(req, res) {
  const id = req.params.id;
  res.redirect(`${rVDealsServer}/${id}/api/recently-viewed-service-data`);
});

app.get("/:dealId/api/ratings", function(req, res) {
  const dealId = req.params.dealId;
  console.log(req.query);
  res.redirect(
    url.format({
      pathname: `${ratingsAndReviewsServer}/${dealId}/api/reviews'`,
      params: req.query
    })
  );
});

app.get("/:dealId/api/reviews", function(req, res) {
  const dealId = req.params.dealId;
  res.redirect(`${ratingsAndReviewsServer}/${dealId}/api/reviews'`);
});

app.get("/:id/api/images", function(req, res) {
  const id = req.params.id;
  res.redirect(`${carouselServer}/${id}/api/images`);
});

app.get("/:id/api/products", function(req, res) {
  let productId = req.params.id;
  res.redirect(`${sidebarServer}/${productId}/api/products`);
});

let port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
