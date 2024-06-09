import dotenv from 'dotenv';
dotenv.config();


const credentials={
    postgres:{
                USERNAME: process.env.USER || "",
                DATABASE: process.env.DATABASE || "",
                HOST: process.env.HOST || "",
                PASSWORD: process.env.PASSWORD || "",
                DBPORT: Number(process.env.DBPORT) || 5432,
             }
};

export default credentials;

