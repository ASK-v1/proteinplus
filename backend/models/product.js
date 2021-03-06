const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  brand: String,
  name: String,
  price: Number,
  flavor: Array,
  qty: Number,
  servings: Number,
  info: String,
  img: String,
  review: Array,
  form: String,
  category: String
})

const Product = model('Product', productSchema)

module.exports = { Product }