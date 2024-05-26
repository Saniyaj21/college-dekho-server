
export const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role === 'admin') {
            next()
        } else {
            return res.status(401).json({
                error: 'You are not allowed'
            })
        }
    }
    catch (error) {
        return res.status(401).json({
            error: 'Please authenticate'
        })
    }
}
