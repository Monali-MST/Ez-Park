var connection = require('../../../service/connection');
const queries = require('../../../mysql/sql');

module.exports =async function get_pointActions(req , res){

    connection.query(queries.get_point_details, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });

}