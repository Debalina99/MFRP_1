var mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    id: {type: Number, 
        // required: [true, "id is a mandatory field."]
    },
    
    book_id: {type: Number, 
        // required: [true, 
        // "Book id is a mandatory field."]
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
    author: {
        type: String,
        // required: [true, "Author is a mandatory field."],
    },
    edition: {
        type: String,
        // required: [true, "Edition is a mandatory field."],
    },
    availability: {
        type: String,
        // required: [true, "Availability is a mandatory field."],
    }

})




const Emp = mongoose.model("book_details", empSchema);


module.exports = Emp;
