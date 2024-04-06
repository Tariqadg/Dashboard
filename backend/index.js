const express = require('express')
const cors =require("cors")
const app = express()

app.use(express.json())
app.use(cors())


let orders = [
    {
        trackingId: 123,
        product: "Laptop",
        customer: "John Doe",
        date: "2024-04-01",
        amount: 1200,
        paymentMode: "Credit Card",
        status: "Delivered"
    },
    {
        trackingId: 124,
        product: "Smartphone",
        customer: "Jane Smith",
        date: "2024-04-02",
        amount: 800,
        paymentMode: "PayPal",
        status: "Process"
    },
    {
        trackingId: 125,
        product: "Headphones",
        customer: "Bob Johnson",
        date: "2024-04-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Delivered"
    },
     {
        trackingId: 126,
        product: "Earphone",
        customer: "Tom Johnson",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 127,
        product: "hat",
        customer: "Tom John",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    },
    {
        trackingId: 128,
        product: "Bat",
        customer: "Tariq Ahmad",
        date: "2024-09-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 129,
        product: "hat",
        customer: "Anurag yadav",
        date: "2024-11-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    }, {
        trackingId: 130,
        product: "Earphone",
        customer: "Tom Johnson",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 131,
        product: "hat",
        customer: "Bobby deol",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    },
    {
        trackingId: 132,
        product: "Bat",
        customer: "Faizan Ahmad",
        date: "2024-09-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 133,
        product: "hat",
        customer: "Anshu yadav",
        date: "2024-11-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    },
    {
        trackingId: 123,
        product: "Laptop",
        customer: "John Doe",
        date: "2024-04-01",
        amount: 1200,
        paymentMode: "Credit Card",
        status: "Delivered"
    },
    {
        trackingId: 124,
        product: "Smartphone",
        customer: "Jane Smith",
        date: "2024-04-02",
        amount: 800,
        paymentMode: "PayPal",
        status: "Process"
    },
    {
        trackingId: 125,
        product: "Headphones",
        customer: "Bob Johnson",
        date: "2024-04-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Delivered"
    },
     {
        trackingId: 126,
        product: "Earphone",
        customer: "Tom Johnson",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 127,
        product: "hat",
        customer: "Tom John",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    },
    {
        trackingId: 128,
        product: "Bat",
        customer: "Tariq Ahmad",
        date: "2024-09-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 129,
        product: "hat",
        customer: "Anurag yadav",
        date: "2024-11-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    }, {
        trackingId: 130,
        product: "Earphone",
        customer: "Tom Johnson",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 131,
        product: "hat",
        customer: "Bobby deol",
        date: "2024-07-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    },
    {
        trackingId: 132,
        product: "Bat",
        customer: "Faizan Ahmad",
        date: "2024-09-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Process"
    },
    {
        trackingId: 133,
        product: "hat",
        customer: "Anshu yadav",
        date: "2024-11-03",
        amount: 100,
        paymentMode: "Debit Card",
        status: "Cancelled"
    }
];

function getDataForPage(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return orders.slice(startIndex, endIndex);
}
app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/item/:page', (req, res) => {
    


let page=req.params.page
let pageNumber = page; 
const pageSize = 10; 
const orders = getDataForPage(pageNumber, pageSize);
res.send(orders)
})

app.get('/length', (req, res) => {
    // console.log(orders.length-1)
    const totallength={length:orders.length}
    res.send(totallength)
})

app.post('/item', (req, res) => {
    const item = req.body;
    console.log(item)
    const index = orders.findIndex(it => it.trackingId === item.trackingId);
    if(index !== -1) return res.status(400).send("Item with tracking id already exists")
    orders.push(item);
    res.status(201).send(item)
})


app.put('/item', (req, res) => {
    const item = req.body;

    const index = orders.findIndex(it => it.trackingId === item.trackingId);
    if (index === -1) return res.status(404).send("Item with tracking id dose not exists")
    
    // orders[ index ].trackingId = item.trackingId;
    orders[ index ].customer = item.customer;
    orders[ index ].paymentMode = item.paymentMode;




    orders[ index ].amount = item.amount;
    orders[ index ].date = item.date;
    orders[ index ].status = item.status;
    // orders[ index ].product = item.product;

    res.send(item)
})

app.delete('/item/:trackingId', (req, res) => {
    const trackingId = req.params.trackingId;

    const index = orders.findIndex(it => it.trackingId === parseInt(trackingId));
    if (index === -1) return res.status(404).send("Item with tracking id dose not exists")
    const deletedOrder = orders[index]
    
    orders.splice(index, 1)
    res.send(deletedOrder)
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log( `Listening on port ${PORT}` )}) 