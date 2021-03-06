const { Product } = require('../models/Product.model');
module.exports.createProduct = (request, response) => {
    const { title, description, price } = request.body;
    Product.create({
        title,
        description,
        price
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}

module.exports.getAllProduct = (request, response) => {
    product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

