import { Router } from 'express';
import * as model from './users.model.js'
import helper from '#root/src/utils/helper.js'
const controller = Router();

controller.post('/register', async (req, res) => {
    
    const { username, password } = req.body
    if(!username || !password || username?.length < 6 || password?.length < 6){
        return res.status(400).send({
            status: 400,
            message: 'Username & password must be 6 characters or more.',
            data: null
        })
    }

    let validUser = await helper.isAlphaNumeric(username)
    if (!validUser){
        return res.status(400).send({
            status: 400,
            message: 'Username must be A-Z, 0-9',
            data: null
        })
    }

    let dupUser = await model.dupUsername(username)
    if(dupUser){
        return res.status(400).send({
            status: 400,
            message: 'This username is already in use.',
            data: null
        })
    }

    let result = await model.createUser({username, password})
    return res.status(200).send({
        status: 200,
        message: 'OK',
        data: result
    })
})

controller.post('/login', async(req, res) => {
    const { username, password } = req.body
    if (!username || !password || username?.length < 6 || password?.length < 6) {
        return res.status(401).send({
            status: 401,
            message: 'Invalid username or password.',
            data: null
        })
    }

    let user = await model.login(username, password)
    if(!user){
        return res.status(401).send({
            status: 401,
            message: 'Invalid username or password.',
            data: null
        })
    }
    
    delete user.password
    return res.status(200).send({
        status: 200,
        message: 'OK',
        data: user
    })
})

export default controller