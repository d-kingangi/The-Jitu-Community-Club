import { Router } from "express";
import { createmember, deletemembers, getsinglemember, updatemember, getallmembers } from "../Controllers/member.controller";

const membersRouter = Router()

membersRouter.post('/', createmember)
membersRouter.get('/:id', getsinglemember)
membersRouter.get('/', getallmembers)
membersRouter.put('/:id', updatemember)
membersRouter.delete('/:id', deletemembers)

export default membersRouter