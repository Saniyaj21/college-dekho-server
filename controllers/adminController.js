import { User } from "../models/userModel.js"

export const getAllUsers = async (req, res) => {

    try {
        const allUsers = await User.find()

        res.json({
            message: 'all users',
            allUsers
        })
    } catch (error) {
        res.status(400).json({
            message: 'try again',
        })
    }
}
export const makeUser = async (req, res) => {

    try {
        const { userid } = req.params
        const user = await User.findById(userid)
        
        user.role = 'user'
        await user.save()

        const allUsers = await User.find()

        res.json({
            message: 'all users',
            allUsers
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'try again',
        })
    }
}
export const makeAdmin = async (req, res) => {

    try {
        const { userid } = req.params
        const user = await User.findById(userid)
        
        
        user.role = 'admin'
        await user.save()
        
        const allUsers = await User.find()

        res.json({
            message: 'all users',
            allUsers
        })
    } catch (error) {
        res.status(400).json({
            message: 'try again',
        })
    }
}
