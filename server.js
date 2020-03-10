const express = require("express")
const faker = require("faker")
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended:true}));


class User {
    constructor(){
        this._id = faker.random.uuid()
        this.firstName = faker.name.firstName()
        this.lasName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email =faker.internet.email()
        this.pasword = faker.internet.password()
    }}

class Company {
    constructor(){
        this._id = faker.random.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }}



app.get('/api', (req,res) => {
    res.send("Hello World");
})

app.get('/api/users/new', (req,res) => {
    res.send(new User());
})

app.get('/api/companies/new', (req,res) => {
    res.send(new Company());
})

app.get("/api/user", (req,res) => {
    res.send({
        user: new User(),
        company: new Company(),
    });
})

app.listen(8000,() => {
    console.log("EXPRESS SERVER ON 8000")
})