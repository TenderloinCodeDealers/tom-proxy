var express = require("express");
var url = require("url");
var app = express();

app.use("/:id", express.static(__dirname + "/../client/dist"));

const carouselServer = "http://54.183.146.159/";
const sidebarServer = "http://18.191.153.175:3004";
const ratingsAndReviewsServer = "http://13.57.214.131:30";
const rVDealsServer = "http://54.193.11.2:3000";

app.get(`/:id/api/recently-viewed-product-data`, function(req, res) {
  const id = req.params.id;
  res.redirect(`${rVDealsServer}/${id}/api/recently-viewed-product-data`);
});

app.get("/:dealId/api/ratings", function(req, res) {
  const dealId = req.params.dealId;
  res.redirect(
    url.format({
      pathname: `${ratingsAndReviewsServer}/${dealId}/api/ratings`,
      query: req.query
    })
  );
});

app.get("/:dealId/api/reviews", function(req, res) {
  const dealId = req.params.dealId;
  res.redirect(`${ratingsAndReviewsServer}/${dealId}/api/reviews`);
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
