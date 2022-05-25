const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./db');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleswares
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/students',require('./routes/students.routes'));
app.use('/qualifications',require('./routes/qualifications.routes'));

app.listen(3000, ()=> {
    console.log("Server On Port ", app.get('port'));
});