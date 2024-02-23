import joi from 'joi';

export const registermemberSchema = joi.object({
    firstname: joi.string().min(3).required(),
    lastname: joi.string().min(3).required(),
    email: joi.string().email().required(),
    cohortno: joi.number().integer().required(),
})