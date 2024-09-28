const projectService = require('../services/projectService')
const { validationResult } = require('express-validator');
const ApiError = require('../../exceptions/apiError');

module.exports.create = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const extractedErrors = errors.array().map(err => err.msg);
            return next(ApiError.BadRequest(`${extractedErrors}`, errors.array()));
        } 
        // check for errors

        const {title, description, role, link} = req.body
        const imageUrls = req.files.map((e) => e.path)

        const project = await projectService.create(title, description, role, link, imageUrls, req.userId)
    
        if (!project) {
            return res.status(400).json({message: "No project has been found"})
        }

        return res.json(project)
    } catch (err) {
        return res.status(500).json({message: `Server error ${err}`})
    }
}
module.exports.getAll = async (req, res) => {
    try {
        const projects = await projectService.getAll()

        return res.json(projects)
    } catch (err) {
        return res.status(500).json({message: `Server error ${err}`})
    }
}