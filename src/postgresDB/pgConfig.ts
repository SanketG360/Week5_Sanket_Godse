import {Sequelize} from 'sequelize';
import credentials from '../common/credentials';



const sequelize = new Sequelize({
        username:credentials.postgres.USERNAME,
        password:credentials.postgres.PASSWORD,
        host:credentials.postgres.HOST,
        database:credentials.postgres.DATABASE,
        port:credentials.postgres.DBPORT,
        dialect:'postgres'
});

sequelize.authenticate().then(()=>{
    console.log('Database Connection Established Successfully .......');
}).catch((err)=>{
    console.log("Unable to connect to the database!!", err);
});

sequelize.sync().then(()=>{
    console.log('table created successfully.');
}).catch((err)=>{
    console.log("Unable to synchronize models...", err);
});

export default sequelize;