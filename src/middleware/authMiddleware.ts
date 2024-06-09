import { Request,Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { decode } from "punycode";
import { nextTick } from "process";

const Jwt_Secret_Key= process.env.JWT_SecretKey || 'fhrbdhasd';

const authToken =  async (req:Request,res:Response,next:NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    console.log("Token :"+token);
    if(!token){
        return res.status(401).json({error:'unauthorized'});
    }

    try{
            const decoded = jwt.verify(token,Jwt_Secret_Key);
            (req as any).user = decoded;
            next();
    }catch(err){
        res.status(401).json({error:'invalid token'});
    }
}

export default authToken;



