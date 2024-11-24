const addComment = (req,res) => {
    res.send("create");
}
const getComments = (req,res) => {
    res.send("get");
}
const updateComment = (req,res) => {
    res.send("update");
}
const deleteComment = (req,res) => {
    res.send("delete");
}
const getCommentById = (req,res) => {
    res.send("get by id");
}

module.exports = {
    addComment,
    getComments,
    updateComment,
    deleteComment,
    getCommentById
}