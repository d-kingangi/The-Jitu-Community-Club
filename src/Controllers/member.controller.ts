import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid';
import { member } from "../Interfaces/members";
import { sqlConfig } from "../Config/sql.config";
import { registermemberSchema } from '../Validators/members.validator';
import validator from 'validator';

function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
        const parts = email.split('@');
        if (parts.length === 2 && parts[1] === 'thejitu.com') {
            const namePart = parts[0];
            const nameParts = namePart.split('.');
            if (nameParts.length === 2 && nameParts[0].length > 0 && nameParts[1].length > 0) {
                return true;
            }
        }
    }
}


export const createmember = async(req: Request, res: Response)=>{
    try{
        const id = v4()

        const {firstname, lastname, email, cohortno }:member = req.body

        let {error} = registermemberSchema.validate(req.body)

        if(error){
            return res.status(400).json({
                error: error
            })
        }
        console.log(req.body);
        const pool = await mssql.connect(sqlConfig)

        let result = await(await pool.request()
        .input("memberId", mssql.VarChar, id)
        .input("firstname", mssql.VarChar, firstname)
        .input("lastname", mssql.VarChar, lastname)
        .input("email", mssql.VarChar, email)
        .input("cohortno", mssql.Int, cohortno)
        .execute('createmembers')).rowsAffected

        return res.json({
            message:"Member created successfully",
        })
    } catch(error) {
        return res.status(500).json({error: error})
    }
}

export const getallmembers =  async(req: Request, res:Response)=>{
    try {
        
        const pool = await mssql.connect(sqlConfig);
        let allmembers = (await pool.request().execute('getallmembers')).recordset

        return res.status(200).json({
            users: allmembers
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getsinglemember = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request().input("memberId", id).execute('getsinglemember')).recordset

        return res.json({
            user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updatemember = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {firstname, lastname, email, cohortno}:member = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("memberId", id)
        .input("firstname", mssql.VarChar, firstname)
        .input("lastname", mssql.VarChar, lastname)
        .input("email", mssql.VarChar, email)
        .input("cohortno", mssql.VarChar, cohortno)
        .execute('updateuser')).rowsAffected

        console.log(result);
        

        return res.status(200).json({
            message: "Member updated successfully"
        })
    } catch (error) {
        return res.json({error})
    }
}

export const deletemembers = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("memberId", mssql.VarChar, id)
        .execute('deletemembers')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.status(201).json({
                error: "Member not found"
            })
        }else{
            return res.status(200).json({
                message: "Account deleted successfully"
            })
        }   
    } catch (error) {
        return res.json({error})
    }
}

