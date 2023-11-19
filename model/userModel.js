import mongoose  from "mongoose";

const userSchema = mongoose.Schema(
    { 
        firstName:{
            type: String,
            required: true,
            default:"",
            trim: true,
            validate: {
                validator: function(value) {
                    return  value.length >= 3;
                },
                message: 'First name must be between 5 and 10 characters'
            }
        },
        lastName:{
            type: String,
            
            default:"",
            trim: true,
           
        },
        email: {
            type: String,
            required: true,
            default:"",
            trim: true,
            unique: true,
    
            
    
            validate: {
                validator: function (value) {
    
                    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
                },
                message: 'Invalid email format'
            }
        }

})

const userModel = mongoose.model('data', userSchema);
export default userModel;