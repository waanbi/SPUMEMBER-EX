import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import jwt from "jsonwebtoken"; 

import { connectToDatabase } from './register/route';
import { users } from './schema/user'; 
import { error } from "console";


dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());


app.post('/register', async (req: Request, res: Response) => {
    const { firstname, lastname, birthDate, idCard, email, password } = req.body;

  
    if (!firstname || !lastname || !birthDate || !idCard || !email || !password) {
         res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบ' }); 
    }

  
  
    
    const newUser = new users({
        firstname,
        lastname,
        birthDate,
        idCard,
        email,
        password, 
    });

    try {
        
        await newUser.save();

        
        const token = jwt.sign(
             { username: newUser.username, email: newUser.email , password: newUser.password ,idCard : newUser.idCard },
            'secret-key', 
            { expiresIn: 30*30} 
        );

     
  

       
        res.status(201).json({
            message: 'User registered successfully',
            token, 
            
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});



app.post('/verifytoken', async (req: Request, res: Response) => {
    try { const Authorization : any = req.headers['authorization']?.toString();
      console.log(req.headers);
    
    jwt.verify(Authorization.split(' ')[1]||"", 'secret-key', (err: any, token: any) => {
      if (err) {
        res.status(401).json({ message: 'Invalid token' });
      } else {
        res.status(200).json({ message: 'Token is valid' ,
          data : token,
          
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

 
 app.listen(3100, ()=>{
        console.log("Server listen 3100")
    })

