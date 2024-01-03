import { Router } from 'express';
const controller = Router();

controller.get('/', async (req, res) => {
    return res.send({
        status: 200,
        message: 'OK',
        data: 'Token is valid.'
    })
})

controller.post('/Approval', async (req, res) => {
    let body = req.body
    return res.send({
        tranxId: "1111123456",
        bankRef: "K00002 00009876",
        respCode: 0,
        respMsg: "Successful",
        balance: 1000.00,
        cusName: "Davis John",
        info: "information",
        print1: "Print 1",
        print2: "Print 2",
        print3: "Print 3",
        print4: "Print 4",
        print5: "Print 5",
        print6: "Print 6",
        print7: "Print 7"
    })
})

controller.post('/Payment', async (req, res) => {
    let body = req.body
    return res.send({
        tranxId: "1111123456",
        bankRef: "K00002 00009876",
        respCode: 0,
        respMsg: "Successful",
        balance: 1000.00,
        cusName: "Davis John",
        info: "information",
        print1: "Print 1",
        print2: "Print 2",
        print3: "Print 3",
        print4: "Print 4",
        print5: "Print 5",
        print6: "Print 6",
        print7: "Print 7"
    })
})

export default controller