import db from '#root/src/config/database.js'
import bcrypt from 'bcryptjs'

async function encryptedPassword(pwd){
    let salt = await bcrypt.genSalt(9)
    return await bcrypt.hash(pwd.toString(), salt)
}

export const createUser = async function(data){
    let hashed = await encryptedPassword(data.password)
    let result = await db.query(`INSERT INTO tb_users (username, password) VALUES('${data.username}', '${hashed}')`)
    return result.rowAffected
}

export const dupUsername = async function(username){
    let result = await db.query(`SELECT username FROM tb_users WHERE username = '${username}' AND deleted_at is NULL`)
    return result.recordset.length >= 1
}

export const login = async function(username, password){
    let qry = await db.query(`SELECT * FROM tb_users WHERE username = '${username}' AND deleted_at is NULL`)
    if(qry.recordset.length == 0){
        return false
    }

    let user = qry.recordset.pop()
    let match = await bcrypt.compare(password.toString(), user.password)
    if(!match) return false
    return user
}