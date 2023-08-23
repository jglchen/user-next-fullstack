import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const APP_SECRET = process.env.NEXT_PUBLIC_JWT_APP_SECRET as string;
import type { NextApiRequest, NextApiResponse } from 'next';
import validateRegisterAPI from '@/validate/register-api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST'){
        // Handle any other HTTP method
        res.status(405).json({ status: 'fail', message: `Method '${req.method}' Not Allowed` });
        return;
    }
    try {
        const {name, email, password, password_confirmation} = req.body;
        const validateResult = await validateRegisterAPI({name, email, password, password_confirmation});
        if (!validateResult.valid){
            res.status(422).json(validateResult.errorMsg);
            return; 
        }
    
        const bcrytPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({ data: {
            name,
            email,
            password: bcrytPassword,
            created_at: new Date(),
            updated_at: new Date()
        }});
        user.password = '';
        const token = jwt.sign({ userId: user.id, email, issued_at: new Date() }, APP_SECRET);

        const result = {
            message: 'User created successfully',
            user,
            authorization: {
                token,
                type: 'bearer'
            }
        }
        res.status(200).json(result);
    
    } catch (e) {
        res.status(400).end();
    }
} 
