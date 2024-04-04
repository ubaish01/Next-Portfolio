export const GET = (req, res) => {
    return res.status(200).json({
        succcess: true,
        message: "seems to be fine"
    })
}