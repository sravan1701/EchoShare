import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


// User Schema Definition
// This schema defines the structure of the User document in MongoDB
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }, 
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    bio: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "",
    },
    nativeLanguage: {
        type: String,
        default: "",
    },
    learningLanguage: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    },
    isOnboarded: {
        type: Boolean,
        default: false,
    },

    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {timestamps: true});

    // Middleware to hash password before saving the user
    userSchema.pre("save",async function (next){
    // Check if the password is modified or new
    if(!this.isModified("password")) {
        return next();
    }
    // Hash the password using bcrypt
    try {
        const salt=await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})

userSchema.methods.matchPassword=async function (enteredPassword) {

    const isPasswordCorrect=await bcrypt.compare(enteredPassword,this.password);
    return isPasswordCorrect;
}


// Create User model from the schema
// This model will be used to interact with the 'users' collection in MongoDB
const User = mongoose.model('User', userSchema);




export default User;