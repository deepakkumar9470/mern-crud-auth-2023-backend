const express  = require('express')

const router = express.Router()

const {addPost,getPosts,getPostById,editPostById, deletePost}  = require('../controllers/postController')


// @ /api/post/create

router.post('/create', addPost)

// @ /api/post
router.get('/', getPosts)

// @ /api/post/123
router.get('/:id', getPostById)


// @ /api/post/123
router.put('/:id', editPostById)

// @ /api/post/123
router.delete('/:id', deletePost)

module.exports = router