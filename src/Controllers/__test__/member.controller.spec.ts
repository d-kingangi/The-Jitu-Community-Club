import mssql from 'mssql'
import { createmember, getallmembers, getsinglemember } from '../member.controller'
import { Request, Response } from 'express';

//test for createmember

describe("Member created successfully", ()=>{

    let res: any

    beforeEach(()=>{
        res={
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('Successfully create member',async () => {
        const req = {
            body:{
                firstname: "Kelvin",
                lastname: "Kimani",
                email: "kelvin.kimani@thejitu.com",
                cohortno: 22,
            }
        }

        const mockedInput = jest.fn().mockReturnThis() 

        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

        const mockedRequest ={
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool ={
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

        await createmember(req as any, res)

        expect(res.json).toHaveBeenCalledWith({message: "Member created successfully"})
    })
})

//test for getallmembers

describe('Fetches all members', ()=>{

    let res: any
    let req: any

    beforeEach(()=>{

        req={
            body:{}
        }
        res={
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('Successfully fetches members',async () => {
        const mockedResult = [
            { id: '353545-43495835-458347575', firstname: 'Kevin', lastname: 'Kimani', email: 'Kevin.Kimani@thejitu.com', cohortno: 22 },
            { id: '353545-43495835-458347575', firstname: 'Kevin', lastname: 'Kimani', email: 'Kevin.Kimani@thejitu.com', cohortno: 22 }
        ]

        const mockedInput = jest.fn().mockReturnThis() 

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult })

        const mockedRequest ={
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool ={
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

        await getallmembers(req as any, res)

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ users: mockedResult });
    })
})

//test for getsinglemember
describe('Gets a single member', ()=>{

    let req: any
    let res: any

    beforeEach(()=>{
        req = {
            params: {
                id: '353545-43495835-458347575', 
            },
        };
        res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
    })

    it('Successful fetch for a single member',async () => {
        const mockedResult = [
            { id: '353545-43495835-458347575', firstname: 'Kevin', lastname: 'Kimani', email: 'Kevin.Kimani@thejitu.com', cohortno: 22 }
        ]

        const mockedInput = jest.fn().mockReturnThis() 

        const mockedExecute = jest.fn().mockResolvedValue({ recordset: mockedResult })

        const mockedRequest ={
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool ={
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

        await getsinglemember(req as any, res)

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ users: mockedResult[0] });
    })
})
