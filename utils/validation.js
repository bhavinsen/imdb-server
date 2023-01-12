const { body, validationResult } = require('express-validator');

module.exports.validations = [
    body("name").not().isEmpty().trim().withMessage("All fields are required!"),
    body("yearOfRelease")
        .not()
        .isEmpty()
        .trim()
        .withMessage("All fields are required!"),
    body("poster")
        .not()
        .isEmpty()
        .withMessage("All fields are required!"),
    body("plot")
        .not()
        .isEmpty()
        .withMessage("All fields are required!"),
    body("actor")
        .not()
        .isEmpty()
        .withMessage("All fields are required!"),
    body("producer")
        .not()
        .isEmpty()
        .withMessage("All fields are required!"),

];