const addPost = (req,res) => {
    res.send("create");
}
const getPosts = (req,res) => {
    res.send("get");
}
const updatePost = (req,res) => {
    res.send("update");
}
const deletePost = (req,res) => {
    res.send("delete");
}
const getPostById = (req,res) => {
    res.send("get by id");
}
const getPostBySender = (req,res) => {
    res.send("get by sender");
}
module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost,
    getPostById,
    getPostBySender

}