
import { Request, Response } from "express";
import userRepository from '../user/user-repository'
import { Router } from "express";


const router = Router()

router.get('/me', async (req : Request,res : Response) =>{
    try {
        const user = userRepository.getOne(res.locals.userId)
        return res.json(user)
    } catch {
      return res.status(500).send()
    }
})


export default router
