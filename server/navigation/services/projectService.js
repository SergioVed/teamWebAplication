const ProjectModel = require('../../models/Project')
const UserModel = require('../../models/User')

module.exports.create = async (title, description, role, link, image, userId) => {
    const project = await ProjectModel.create({title, description, role, link, image})

    await UserModel.findByIdAndUpdate(userId, {$push: {projects: project._id}}, {new: true})
    return project
}
module.exports.delete = async (projectId, userId) => {
    const project = await ProjectModel.findByIdAndDelete(projectId)

    await UserModel.findByIdAndUpdate(userId, {$pull: {projects: projectId}}, {new: true})
    return project
}
module.exports.update = async (projectId, title, description) => {
    const project = ProjectModel.findByIdAndUpdate(projectId, {title, description})
    
    return project
}