
import { db } from "../index.js";





export const createTableTasbles = (req, res, next) => {


  var sql = "CREATE TABLE TablesFood (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, capacity VARCHAR(255), status VARCHAR(255))";

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Table created");
  });
};



export const getAllTasbles = (req, res, next) => {

  db.query("SELECT * FROM TablesFood", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
};



export const getByIdTasbles = (req, res, next) => {
  const { id } = req.params;

  db.query(`SELECT * FROM TablesFood WHERE id = ${id}`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });

}


export const postDataTasbles = (req, res, next) => {

  var userData = {

    capacity: req.body.capacity,
    
  }


  var sql = `INSERT INTO TablesFood (capacity) VALUES ('${userData.capacity}') `
  //, '${userData.status}')`
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);;
  })
}


export const updateTasbles = (req, res, next) => {

  const { id } = req.params;
  const capacity = req.body.capacity
  const status = req.body.status || null
  const i = JSON.stringify(id)


  const query = `UPDATE TablesFood SET capacity = ${capacity}, status = ${status} WHERE id = ${i} `;


  db.query(query, function (err, data) {

    if (err) throw err;
    res.send(data);;
  });

};



export const deleteByKeyTasbles = (req, res, next) => {

  const { id } = req.params;

  var sql = `DELETE FROM TablesFood WHERE id = ${id}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Number of records deleted: " + result.affectedRows);
  });
}

