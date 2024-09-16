const projectService = require('../services/projectService')

module.exports.create = async (req, res, next) => {
    try {

        const {title, description, role, link} = req.body
        const imageUrl = req.file.path

        const project = await projectService.create(title, description, role, link, imageUrl, req.userId)
    
        if (!project) {
            return res.status(400).json({message: "No project has been found"})
        }

        return res.json(project)
    } catch (err) {
        return res.status(500).json({message: "Server error"})
    }
}
module.exports.delete = async (req, res, next) => {
    try {
        const projectId = req.params.projectId
        if (!projectId) {
            return res.status(400).json({message: "project was not found"})
        }
        await projectService.delete(projectId, req.userId)
        return res.json({message: "successfull"})
    } catch (err) {
        return res.status(500).json({message: "Server error"})
    }
}
module.exports.update = async (req, res, next) => {
    try {
        const projectId = req.params.projectId
        const {title, description, role, link} = req.body

        const project = await projectService.update(projectId, title, description, role, link)
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.json(project)
    } catch (err) {
        return res.status(500).json({message: `Server error ${err}`})
    }
}