const order = require('../models/Order')

module.exports = {
    getOrders: async (req,res)=>{
        console.log(req.user)
        try{
            const orderItems = await order.find({userId:req.user.id}).lean()     // find order item associated with userId
            const itemsLeft = await order.countDocuments({userId:req.user.id,completed: false})
            const ordersPriority = orderItems.filter(order => order.priority)
            const orders = orderItems.filter(order => !order.priority)
            res.render('orders.ejs', {
                ordersPriority: ordersPriority, orders: orders, left: itemsLeft, user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    createOrder: async (req, res)=>{
        try{
            await order.create({order: req.body.orderItem, completed: false, userId: req.user.id, customerId: req.body.orderCustomer, barista: req.body.orderBarista, priority: false})     // userId added to created order item
            console.log('order has been added!')
            res.redirect('/orders')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await order.findOneAndUpdate({_id:req.body.orderIdFromJSFile},{
                completed: req.body.completed
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },

    deleteOrder: async (req, res)=>{
        console.log(req.body.orderIdFromJSFile)
        try{
            await order.findOneAndDelete({_id:req.body.orderIdFromJSFile})
            console.log('Deleted order')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    markPriority: async (req, res)=>{
        try{
            await order.findById(req.body.orderIdFromJSFile)
            await order.findOneAndUpdate(
                { _id: req.body.orderIdFromJSFile },
                { priority: !order.priority }
            )
            console.log('Toggled Priority')
            res.json({ status: 'success', priority: !order.priority })
        }catch(err){
            console.log(err)
        }
    },

}    