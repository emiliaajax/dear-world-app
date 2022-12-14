import express from 'express'
import { PostsController } from '../../../controllers/api/posts-controller.js'

export const router = express.Router()

const controller = new PostsController()

router.get('/',
  (req, res, next) => controller.findAllPosts(req, res, next)
)

router.post('/',
  (req, res, next) => controller.createPost(req, res, next)
)

router.get('/post/:id',
  (req, res, next) => controller.findPost(req, res, next)
)

router.get('/:subject',
  (req, res, next) => controller.findPostsBySubject(req, res, next)
)
