const express = require("express")
const router =express.Router()
const Contact = require("../modele/Contact")

//localhost:5000/contact/test

router.get('/test',(req,res)=>{
    res.send("tested")
})
//add contact
    router.post('/addContact',(req,res)=>{
        const{name,email,phon}=req.body
        const newContact = new Contact({name,email,phon})
        newContact.save()
        .then(contacts=>res.send(contacts))
        .catch(err=>console.log(err))
    })
    //get all contacts
    router.get('all',(req,res)=>{
        Contact.find()
        .then(contacts=>res.send(contacts))
        .catch(err=>console.log(err))
    })
    //delet contact
    router.delete("deleteContact/:id",(req,res)=>{
    const {_id}=req.parames
    contact.findoneAndDelete({_id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})
//get contact by id
router.get("/:_id",(req,res)=>{
    const{_id}=req.params
    Contact.findOne({id})
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

//edit contact
router.put("/editContact/:id",(req,res)=>{
    const{_id}=req.params
const{name,email,phon}=req.body
Contact.findOneUpdate({_id},{$set:{name,email,phon}})
.then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))



})
    module.exports=router
