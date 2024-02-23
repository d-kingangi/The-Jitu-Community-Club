import { Router } from "express";
import { createmember, deletemembers, getsinglemember, updatemember, getallmembers } from "../Controllers/member.controller";

const membersRouter = Router()

membersRouter.post('/', createmember)
membersRouter.get('/', getsinglemember)
membersRouter.get('/', getallmembers)
membersRouter.put('/', updatemember)
membersRouter.delete('/', deletemembers)

export default membersRouter