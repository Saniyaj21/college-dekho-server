import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    logo: {
        public_id: String,
        url: String,
    },
    courses: [
        {
            courseName: String,
            courseFees: String,
            sit: String,
        }
    ]

},
    { timestamps: true }
)

export const College = mongoose.model('College', collegeSchema);