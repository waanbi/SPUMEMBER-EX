import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
 
dotenv.config();
 
const app = express()
 
app.use(express.json())
app.use(cors())
app.use(helmet())
 

  
  
  
  const studentPoints: Record<string, number> = {};
  
  app.post('/api/reward/points', (req, res) => {
    const { student_id, amount } = req.body 
  
    if (!student_id) {
     res.status(400).json({ status: 400, message: 'กรุณากรอกรหัสนักศึกษา' });
    }
    if (amount <= 0) {
       res.status(400).json({ status: 400, message: 'จำนวนเงินต้องมากกว่า 0' });
    }
  
    const pointsEarned = Math.floor(amount / 100) * 10;
    if (!studentPoints[student_id]) {
      studentPoints[student_id] = 1000;
    }
    studentPoints[student_id] += pointsEarned;
  
   res.status(200).json({ status: 200,
     message: 'สะสมแต้มสำเร็จ',
      data: { student_id, points_earned: pointsEarned, total_points: studentPoints[student_id] } });
     
  });
  
 
 app.listen(3100, ()=>{
        console.log("Server listen 3001")
    })

