const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const client = require("..modules/db");
const addPage = require("../views/addPage");
//const postDetails = require("../views/postDetails");
//const addPost = require('../views/addPost')

router.get("/", async (req, res, next) => {

});

router.get("/:id", async (req, res, next) => {

});

router.post("/", async (req, res, next) => {

});

router.put("/:id", async (req, res, next) => {

});

router.delete("/:id", async (req, res, next) => {

});

module.exports = router;
