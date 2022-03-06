var employeesList = require("../data/employee");

const Emp= require("../Models/Emp");
const Empbookfine=require("../Models/Bookfine");
const findMaxId= require("../utils/utilities");

// get all books 
exports.getEmployeesBook = function (req, res) {
    Emp.find().exec(function (err, result) {
        console.log(result);
        return res.send(result);
    })
}

// add new books 
exports.addEmployeeBook = function (req, res) {
    let { body, params, query } = req;
    console.log("Body: ", body);
    console.log("Params: ", params);
    console.log("Query: ", query);
    
    let employee = body;
    
    Emp.find().select({ id: 1, _id: 0 }).sort({id:-1}).limit(1).exec(function (err, result) {
        console.log(result);
        let maxId = 0;
        if (result.length === 0)
            maxId = 0;
        else
            maxId = result[0].id;
        let newId = maxId + 1;
        employee.id = newId;
        const emp = new Emp(employee);
        emp.save(function (err, result) {
            console.log("result: ", result);;
            if (err) return res.status(400).send(err.message);
            return res.send({status: "success"});
        })
    })


    
}

// update book record
exports.updateEmployeeBook =  function (req, res) {
    let { body, params, query } = req;
    console.log("Params: ", params);;
    console.log("Body: ", body);;
    let modifiedEmployee = body;
    Emp.updateOne({ id: (params.id - 0) }, modifiedEmployee).exec(function (err, result) {
        if (err) return res.status(400).send(err.message);
        return res.send({status: "success"});
    })
    
}

// delete book record
exports.deleteEmployeeBook = function (req, res) {
    let { body, params, query } = req;
    console.log("Params: ", params);
    Emp.deleteOne({id: (params.id-0)}).exec(function (err, result) {
        console.log(result);
        return res.send({status: "success"});
    })
}
// get all employees fine
exports.getEmployeesBookissue = function (req, res) {
    Empbookfine.find().exec(function (err, result) {
        console.log(result);
        return res.send(result);
    })
}

//add book fine details

exports.addEmployeeBookissue = function (req, res) {
    // let { body, params, query } = req;
    // console.log("Body: ", body);;
    // console.log("Params: ", params);;
    // console.log("Query: ", query);
    // let employee = body;
    
    // Empbookfine.insertOne(employee, function (err, result) {
    //         if (err) return res.send({ status: "fail", message: err.toString() });
    //         return res.send({ status: "success", data: employee });
    //     })
    let { body, params, query } = req;
    console.log("Body: ", body);;
    console.log("Params: ", params);;
    console.log("Query: ", query);
    
    let employee = body;
    

    
    Empbookfine.find().select({ id: 1, _id: 0 }).sort({id:-1}).limit(1).exec(function (err, result) {
        console.log(result);
        let maxId = 0;
        if (result.length === 0)
            maxId = 0;
        else
            maxId = result[0].id;
        let newId = maxId + 1;
        employee.id = newId;
        const emp = new Empbookfine(employee);
        emp.save(function (err, result) {
            console.log("result: ", result);;
            if (err) return res.status(400).send(err.message);
            return res.send({status: "success"});
        })
    })

    
    

}

// db.collection("studentfine_details")

// update record of fine
exports.updateEmployeeBookissue =  function (req, res) {
    let { body, params, query } = req;
    console.log("Params: ", params);;
    console.log("Body: ", body);;
    let modifiedEmployee = body;
    Empbookfine.updateOne({ id: (params.id - 0) }, modifiedEmployee).exec(function (err, result) {
        if (err) return res.status(400).send(err.message);
        return res.send({status: "success"});
    })
    
}

// delete record of fine
exports.deleteEmployeeBookissue = function (req, res) {
    let { body, params, query } = req;
    console.log("Params: ", params);
    Empbookfine.deleteOne({id: (params.id-0)}).exec(function (err, result) {
        console.log(result);
        return res.send({status: "success"});
    })
}
