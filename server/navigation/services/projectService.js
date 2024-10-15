const ProjectModel = require('../../models/Project')

module.exports.create = async (title, description, role, link, images, user) => {
    const project = await ProjectModel.create({title, description, role, link, images, user })

    return project
}
module.exports.getAll = async () => {
    const projects = await ProjectModel.find().populate('user').exec()
    return projects
}
module.exports.edit = async (id, updatedData) => {
    const project = await ProjectModel.findByIdAndUpdate(id, updatedData, {new: true})
    return project
}