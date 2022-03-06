var express= require('express');
var router= express.Router()
// var employeesList = require("../data/employee");
var employeesController = require('../controllers/employees_controller.js');

console.log("employeesController: ", employeesController);
// get all employees 
router.get("/employees", employeesController.getEmployeesBook)
// add new employees 
router.post("/employees", employeesController.addEmployeeBook)
// update record 
router.put("/employees/:id", employeesController.updateEmployeeBook)
// delete record
router.delete("/employees/:id", employeesController.deleteEmployeeBook)



// get all employees fine
router.get("/employees", employeesController.getEmployeesBookissue)
// add new employees fine
router.post("/employees", employeesController.addEmployeeBookissue)
// update record fine
router.put("/employees/:id", employeesController.updateEmployeeBookissue)
// delete record fine
router.delete("/employees/:id", employeesController.deleteEmployeeBookissue)






module.exports= router;