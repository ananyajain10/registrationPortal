import userModel from '../model/userModel.js'

export const userRegistration = async(req, res) => {
    const {firstName, lastName, email} = req.body;
    const newUser = new userModel({ firstName, lastName, email});


    try {
       await newUser.save()
       res.status(200).json("data saved successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}