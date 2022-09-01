import { db } from "../index.js";


var table_name = 'Menu';
export const createTableMenu = (req, res, next) => {

  var sql = "CREATE TABLE Menu (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, category VARCHAR(255), name VARCHAR(255), price VARCHAR(255))";

  db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Table created");
  });

};



export const getAllMenu = (req, res, next) => {

  db.query(`SELECT * FROM ${table_name}`, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
};



export const getByIdMenu = (req, res, next) => {
  const { id } = req.params;
  let category = "id"
  const num = Number(id)
  if (String(num) == String(NaN)) {
    category = "category"
  }

  db.query(`SELECT * FROM ${table_name} WHERE ${category} = '${id}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });

}

export const postDataMenu = (req, res, next) => {
  var userData = {

    "category": req.body.category,
    "name": req.body.name,
    "price": req.body.price
  }

  var sql = `INSERT INTO ${table_name} (category, name, price) VALUES ('${userData.category}', '${userData.name}', '${userData.price}')`
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);;
  })
}


export const updateMenu = (req, res, next) => {

  const { id } = req.params;
  const category = JSON.stringify(req.body.category)
  const name = JSON.stringify(req.body.name)
  const price = JSON.stringify(req.body.price)

  const i = JSON.stringify(id)
  const query = `UPDATE ${table_name} SET category = '${category}', name = '${name}', price = '${price}' WHERE id = ${i} `;
  db.query(query, function (err, data) {

    if (err) throw err;
    res.send(data);;
  });

};


export const deleteByKeyMenu = (req, res, next) => {
  const { id } = req.params;
    var sql = `DELETE FROM ${table_name} WHERE id = ${id}`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.send("Number of records deleted: " + result.affectedRows);
    });

}

