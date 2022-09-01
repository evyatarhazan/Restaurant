
import cors from "cors";
import express from "express";
import router from "./router.js";
import mysql from 'mysql'


const app = express();

let port = 4001


export const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "restaurantSQL"

})

db.connect((error) => {

    if (error) {
        console.log(error, ">>>>>run=>    sudo /opt/lampp/lampp start ** if start this project first time or restart copmuter<<<<") 

        throw error ;
        
    }
    console.log("MySql Connected");

});
 
app.use(cors());

app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


