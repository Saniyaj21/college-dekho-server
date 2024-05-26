import { College } from "../models/collegeModel.js"
import { User } from "../models/userModel.js"
import { v2 as cloudinary } from 'cloudinary';

export const getAllColleges = async (req, res) => {

    try {
        const allColleges = await College.find()

        res.json({
            message: 'all users',
            allColleges
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'try again',
        })
    }
}
export const getCollegesDetails = async (req, res) => {

    try {
        const { collegeid } = req.params
        const college = await College.findById(collegeid)

        res.json({
            message: 'Colleges details',
            college
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'try again',
        })
    }
}
export const addColleges = async (req, res) => {

    try {
        const { collegeName, address, logo, courses } = req.body

        // logo upload 
        const myCloud = await cloudinary.uploader.upload(logo, {
            folder: "college-dekho",
            width: 250,
            crop: "scale",
        });
        const college = await College.create({
            collegeName,
            logo: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url
            },
            address,
            courses
        })

        res.json({
            message: 'all users',
            college
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'try again',
        })
    }
}
export const deleteCollege = async (req, res) => {

    try {
        const { collegeid } = req.params
        const deletedCollege = await College.findByIdAndDelete(collegeid, { new: true })
        await cloudinary.uploader.destroy(deletedCollege.logo.public_id);
        const allColleges = await College.find()


        res.json({
            message: 'all users',
            allColleges,
            deletedCollege
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'try again',
        })
    }
}
export const searchByCourse = async (req, res) => {

    try {
        const { keyword } = req.params // Extract the search query from the request query parameters

        // Use a MongoDB query to search for playlists by name
        const searchResult = await College.find({ 'courses.courseName': { $regex: keyword, $options: 'i' } })





        res.json({
            message: 'all colleges',
            searchResult
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'try again',
        })
    }
}