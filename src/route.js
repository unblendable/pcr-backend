import { Router } from 'express';
import middle from './middleware/auth.js'
import directLinkController from './modules/direct-link/direct-link.controller.js'
import usersController from './modules/users/users.controller.js'

const router = Router()
const modules = [
    { path: '/direct-link', auth: middle.basicAuth, to: directLinkController },
    { path: '/users', auth: middle.guest, to: usersController },
]

modules.forEach((m) => {
    router.use(m.path, m.auth, m.to)
})

export default router