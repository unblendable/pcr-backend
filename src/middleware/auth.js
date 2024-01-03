import helper from '#root/src/utils/helper.js'
import * as model from '#root/src/modules/users/users.model.js'

const { login } = model
const { base64_decode } = helper

export default {
    basicAuth: (req, res, next) => {
        
        let token = req.headers.authorization;
        if (!token || !token.includes('Basic ')) {
            return res.status(401).send('Unauthorized.')
        }

        token = token.replace('Basic ', '')
        let dc = base64_decode(token)
        if(!dc.includes(':')){
            return res.status(401).send('Unauthorized.')
        }

        dc = dc.split(':')
        if(dc.length !== 2){
            return res.status(401).send('Unauthorized.')
        }

        const [username, password] = dc
        return login(username, password).then((user)=>{
            if (!user) return res.status(401).send('Unauthorized.')
            return next()
        })
    },
    guest: (_req, _res, next) => {
        next();
    }
}