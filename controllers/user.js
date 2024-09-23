const express = require("express");
const User = require('../models/user.js');

async function handleGetAllUsers(req, res) {
    const allData = await User.find({});
    res.json(allData);
}

async function handleCreateNewUser(req, res) {
    const body = req.body;

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender
    })
    return res.status(201).json({ msg: "Data is Inserted successfully" });
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ Error: "User not Found" });
    }
    else {
        return res.json(user);
    }
}

async function handleUpdateUserById(req, res) {
    const result = await User.findByIdAndUpdate(req.params.id, { email: "defdoshi@gmail.com" }, { new: true })
    res.json({ status: "Success", result });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    res.json({ status: "Success" })
}


module.exports = { handleGetAllUsers, handleCreateNewUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById }