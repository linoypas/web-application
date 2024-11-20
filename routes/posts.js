const express = require('express');
const router = express.Router();
const postsContoller = require('../controllers/posts');

router.post('/',postsContoller.addPost);
router.get('/',postsContoller.getPosts);
router.get('/:id',postsContoller.getPostById);
router.get('/?sender=<sender_id>',postsContoller.getPostBySender);
router.put('/:id',postsContoller.updatePost);
router.get('/:id',postsContoller.deletePost);

module.exports = router;