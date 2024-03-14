const express = require('express');
const router = express.Router();
const User = require('../dal/models/user.model');
const mongoose = require('mongoose');

router.post('/sendrequest/:id', async (req, res) => {
    try {
        const params = req.params.id;
        const loggedID = req.body.presentone;
        const paramsObjectId = mongoose.Types.ObjectId(loggedID);
        
        if (!loggedID || !params) {
            return res.status(400).json({
                error: "Missing required parameters."
            });
        }

        const user = await User.findById(params);
        //if the user agin press the send request ,it wont be shown two times in Show request  list 
        if (user && user.requests.includes(paramsObjectId)) {
            console.log("Hi Rahul"); // Modify this line as needed
            return res.redirect('/auth/google/success');
        }

        const pushedone = await User.findByIdAndUpdate(params, {
            $push: { requests: paramsObjectId }             //pushing into the requests array to show the requests the in the ShoW REQUESTS BUTTO
        });
        res.redirect('/auth/google/success');
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ error: "CANT FRIEND REQUET AGAIN" });
    }
});


router.post('/showfriendrequest/:id', async (req, res) => {
    try {
        const loggedID = req.params.id;
        console.log("loggedID", loggedID);
        const friendList = await User.findOne({ _id: loggedID }).populate({
            path: 'requests',
            options: { sort: '-createdAt' } // Sorting the requests by createdAt in descending order
        });

        console.log("friendslist", friendList.requests);
        const biewdata = {
            friendList: friendList.requests
        }
        res.render('requests', biewdata);


    } catch (error) {
        console.log("Error occured while getting friend request : ", error);

    }
})



module.exports = router;