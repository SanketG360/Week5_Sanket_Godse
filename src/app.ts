import express , { Request ,Response} from 'express';
import dotenv from 'dotenv';
import { employeeRoutes } from "./routes/employeeRoutes";
import { shiftRoutes } from "./routes/shiftRoutes";
import { timesheetRoutes } from "./routes/timesheetRoutes";
import { claimsRoutes } from "./routes/claimsRoutes";
import { reportingRoutes } from "./routes/reportingRoutes";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/',(req,res)=>{
    console.log('Hello.........')
});

app.use('/api/employee',employeeRoutes);
app.use('/api/shifts', shiftRoutes);
app.use('/api/timesheets', timesheetRoutes);
app.use('/api/claims', claimsRoutes);
app.use('/api/report', reportingRoutes);



app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})