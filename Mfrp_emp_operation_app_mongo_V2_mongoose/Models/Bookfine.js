var mongoose = require('mongoose');

const empbookSchema=mongoose.Schema({
        student_id: {type: Number, 
            // required: [true, "Student id is a mandatory field."]
        },
        student_name: {
            type: String, 
            // required: [true, "Student name is a mandatory field."],
            // minLength: [3, "Book_name field minimum length should be 3"]
        },
        book_id: {type: Number, 
            // required: [true, "Book id is a mandatory field."]
        },
        book_name: {
            type: String, 
            // required: [true, "Book name is a mandatory field."],
            // minLength: [3, "Book_name field minimum length should be 3"]
        }, 
        year: {
            type: String,
            // required: [true, "year is a mandatory field."],
            // maxLength: [20, "year field maximum length should be 20"]
        }, 
        branch: {type: String, 
            // required: [true, "branch is a mandatory field."]
        }, 
        date: {
            type: Date,
            // required: [true, "Date is a mandatory field."],
        },
        fine: {
            type: String,
            // required: [true, "Fine is a mandatory field."],
        }
    
    })

const Empbookfine = mongoose.model("studentfine_details", empbookSchema);

module.exports = Empbookfine;
