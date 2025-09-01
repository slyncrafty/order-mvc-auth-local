const deleteBtn = document.querySelectorAll('.del')
const orderItem = document.querySelectorAll('.check')
// const orderComplete = document.querySelectorAll('span.completed')
const orderPriority = document.querySelectorAll('.flag')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteOrder)
})

Array.from(orderItem).forEach((el)=>{
    el.addEventListener('change', markComplete)
})

// Array.from(orderComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

Array.from(orderPriority).forEach((el) => {
    el.addEventListener('click', markPriority)
})

async function deleteOrder(){
    const orderId = this.parentNode.dataset.id
    try{
        const response = await fetch('orders/deleteOrder', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'orderIdFromJSFile': orderId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const orderId = this.parentNode.dataset.id
    const isChecked = this.checked
    try{
        const response = await fetch('orders/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'orderIdFromJSFile': orderId,
                'completed': isChecked
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// async function markIncomplete(){
//     const orderId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('orders/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'orderIdFromJSFile': orderId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

async function markPriority() {
    const orderId = this.parentNode.dataset.id
    try {
        const response = await fetch('orders/markPriority', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'orderIdFromJSFile': orderId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}