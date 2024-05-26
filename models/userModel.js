import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    },
    // likedColleges: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'College'
    //     }
    // ],
    token: String
},
    { timestamps: true }
)

export const User = mongoose.model('User', userSchema);