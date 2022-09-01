import { db } from "../index.js";



export const calculateSumOrder = (id) => {
    db.query(`SELECT * FROM Diners WHERE id =${id}`, function (err, result) {
      if (err) throw err;
      var data = [JSON.parse(result[0].reservations)];
      let finalAmount = caculatePrice(data, id);
      console.log("sum1", finalAmount)
      return finalAmount;
    });
  };
  
  function caculatePrice(data, id) {
    var finalAmount = 0;
    for (const [key, value] of Object.entries(data[0])) {
  
      if (key == undefined) {
      }
      if (key != undefined) {
        db.query(
          `SELECT price FROM Menu WHERE id ='${key}'`,
          function (err, result) {
            if (err) throw err;
            finalAmount += calculateSumPrice(value, result, key)
            console.log("sum5", finalAmount)
            // updateCalculate(result, finalAmount, id, key, value);
            return updateCalculate(finalAmount, id);
          } 
        );
      }
    }
  }
  
  
  function calculateSumPrice(value, result, key){
    console.log("value", value, "key", key)
    let finalAmount = Object.values(result[0]) * value;
    console.log("sum3", finalAmount)
    return finalAmount
  }
  
  function updateCalculate(finalAmount, id) {
  
    const query = `UPDATE Diners SET sum = '${finalAmount}' WHERE id = ${id} `;
    console.log("id", id);
    db.query(query, function (err, data) {
      if (err) throw err;
    });
  }
  
  export const postReservation = (req, res, next) => {
    console.log(req.params, req.body)
    const { id } = req.params;
    const reservations = JSON.stringify(req.body);
    console.log('1234564879', JSON.stringify(reservations))

    const i = JSON.stringify(id);
  
    const query = `UPDATE Diners SET reservations = '${reservations}' WHERE id = ${i} `;
  
    db.query(query, function (err, data) {
      if (err) throw err;
      console.log("secsass sending");
      //   let finalAmount = calculateSumOrder(id);
      //   console.log("sum", finalAmount)
      //   updateCalculate(finalAmount, id)
      res.send(reservations);
    });
  };
  
  export const getReservation = (req, res, next) => {
    const { id } = req.params;
  
    db.query(`SELECT * FROM Diners WHERE id =${id}`, function (err, result) {
      if (err) throw err;

      res.send(JSON.parse(result[0].reservations)); 
      console.log("secsses geting");
    });
  };

  export const getSum = (req, res, next) => {
    console.log("ojnjnj");
    const { id } = req.params;
    var finalAmount = 0;
    db.query(`SELECT * FROM Diners WHERE id =${id}`, function (err, result) {
      if (err) throw err;
      var a = result[0].sum;
      console.log(a);
  
      res.send(a);
    });
  };
