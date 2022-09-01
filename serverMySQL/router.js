import express from 'express';
import  {  getAllDiners, getByIdDiners, deleteByIdDiners, postDataDiners, updateDiners, sitByPeriority, createTableDiners}  from "./controllers/Diners.js";
import {getAllTasbles, getByIdTasbles, postDataTasbles, updateTasbles, createTableTasbles, deleteByKeyTasbles} from "./controllers/TablesFood.js";
import {getAllMenu, getByIdMenu, postDataMenu, updateMenu, createTableMenu, deleteByKeyMenu} from "./controllers/Menu.js";
import { getReservation, getSum, postReservation } from './controllers/reservation.js';
 

const router  = express.Router();
router.get("/diners", getAllDiners)
router.post("/diners", postDataDiners)
router.get("/diners/sitbyperiority", sitByPeriority)
router.put('/diners/:id', updateDiners)
router.get("/diners/:id", getByIdDiners)
router.post("/diners/createtable", createTableDiners);
router.delete('/diners/:id', deleteByIdDiners)
router.get('/diners/sum/:id', getSum)


router.post("/tables/createtable", createTableTasbles);
router.post("/tables", postDataTasbles)
router.get("/tables", getAllTasbles)
router.delete('/tables', deleteByKeyTasbles)
router.put('/tables/:id', updateTasbles)
router.get("/tables/:id", getByIdTasbles)
router.delete('/tables/:id', deleteByKeyTasbles)
router.post('/diners/:category/:id/reservation', postReservation)
router.get('/diners/:category/:id/reservation', getReservation)


router.post("/menu/createtable", createTableMenu);
router.post("/menu", postDataMenu)
router.get("/menu", getAllMenu)
router.put('/menu/:id', updateMenu)
router.get("/menu/:id", getByIdMenu)
router.delete('/menu/:id', deleteByKeyMenu)

 
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

export default router;


