import { db } from "../index.js";

var data = null;

export const createTableDiners = (req, res, next) => {
  var sql =
    "CREATE TABLE Diners (id INT AUTO_INCREMENT PRIMARY KEY,`lastUpdated` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, name VARCHAR(255), size VARCHAR(255), queue VARCHAR(255), reservations VARCHAR(255), table1 VARCHAR(255), sum VARCHAR(255))";

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Table created");
  });
};

export const getAllDiners = (req, res, next) => {
  db.query("SELECT * FROM Diners", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
};

export const getByIdDiners = (req, res, next) => {
  const { id } = req.params;
  let category = "id"
  const num = Number(id)
  if (String(num) == String(NaN)) {
    category = "queue"
  }
  
  
  db.query(`SELECT * FROM Diners WHERE ${category} = '${id}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

export const postDataDiners = (req, res, next) => {
  console.log('jjjjjjjj')
  console.log(req.body.name, req.body.size)
  var userData = {

    name: req.body.name,
    size: req.body.size,
    queue: "tobesited",
    reservations: "{}",
    sum: 0,
  };
  var sql = `INSERT INTO Diners (name, size, queue, reservations , sum ) VALUES ('${userData.name}', ${userData.size}, '${userData.queue}', '${userData.reservations}' , '${userData.sum}')`;
  db.query(sql, function (err, result) {
    if (err) {
      throw err

      // var msg = err.sqlMessage
      // res.send({msg: msg});
    }
    else {
      console.log("test")
      res.send(userData)
    };
    // throw err
  });

};


// function find(table_name, field) {
//   var sql = `select * from ${table_name} where status =${field}`;
//   db.query(sql, function (db_error, result) {
//     if (db_error) throw db_error;
//     return result;
//   });
// }

export const sitByPeriority = (req, res, next) => {
  db.query(
    `SELECT * FROM Diners WHERE queue ='tobesited' ORDER BY size DESC ,lastUpdated`,
    function (err, result) {
      if (err) throw err;
      sortTables(result);
    }
  );

  function sortTables(value) {
    var someVar = value;
    db.query(
      `SELECT * FROM TablesFood ORDER BY capacity `,
      function (err, result) {
        if (err) throw err;
        sortDiners(result, someVar);
      }
    );
  }
  function sortDiners(tables, dinerss) {

    tables.sort((a, b) => (Number(a.capacity) > Number(b.capacity)) ? 1 : ((Number(b.capacity) > Number(a.capacity)) ? -1 : 0));
    dinerss.sort((a, b) => (Number(a.size) > Number(b.size)) ? -1 : ((Number(b.size) > Number(a.size)) ? 1 : 0));

    const tab = tables.filter((dish) => dish.status == null);


    for (let diners of dinerss) {
      for (let table of tab) {
        console.log(diners.size, table.capacity)
        if (diners.size <= table.capacity) {
          const query = `UPDATE Diners SET queue = 'sit' WHERE id = ${diners.id} `;
          const query1 = `UPDATE Diners SET nameTable =  '${table.id}' WHERE id = ${diners.id} `;
          const query2 = `UPDATE TablesFood SET status = '${diners.id}' WHERE id = ${table.id} `;

          db.query(query, function (err, data) {
            if (err) throw err;
          });

          db.query(query1, function (err, data) {
            if (err) throw err;
          });

          db.query(query2, function (err, data) {
            if (err) throw err;
          });
          console.log("success" + diners.id + table.id)
          res.send(`${diners.id},${table.id}`);
          return
          
        }
      }
    }
    console.log("No place to sit for any group");
    res.send("No place to sit for any group");
  }
};

export const updateDiners = (req, res, next) => {
  const { id } = req.params;
  const name = req.body.name;
  const size = req.body.size;
  const queue = req.body.queue;
  const i = JSON.stringify(id);

  const query = `UPDATE Diners SET name = '${name}', size = '${size}', queue = '${queue}' WHERE id = ${i} `;

  db.query(query, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
};

export const deleteByIdDiners = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const query = `UPDATE TablesFood SET status = null  WHERE status = ${id} `;

  db.query(query, function (err, data) {
    if (err) throw err;
  });

  var sql = `DELETE FROM Diners WHERE id = ${id}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Number of records deleted: " + result.affectedRows);
  });
};




