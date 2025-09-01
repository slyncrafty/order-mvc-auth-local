const mongoose = require('mongoose')

// define the schema for order model
const orderSchema = new mongoose.Schema({
  order: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  customerId: {
    type: String,
    required: true
  }, 
  barista: {
    type: String,
    required: true
  }, 
  priority: {
    type: Boolean,
    required: true,
  },
})

// create the model and export to app
module.exports = mongoose.model('order', orderSchema)
