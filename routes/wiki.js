const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const { db, Page, User } = require("../models");
const addPage = require("../views/addPage");
//const postDetails = require("../views/postDetails");
//const addPost = require('../views/addPost')

function generateSlug (title) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

router.get("/", async (req, res, next) => {

});

router.get("/add", (req, res) => {
  res.send(addPage())
});

router.post("/", async (req, res, next) => {
  console.log(req.body.title)
  try {
    const page = await Page.create({
      title: req.body.title,
      slug: generateSlug(req.body.title),
      content: req.body.content,
      status: req.body.status

    });

    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = router;
