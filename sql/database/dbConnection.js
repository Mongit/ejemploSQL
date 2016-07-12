/*var config = require('./db-config');
module.exports = require('mysql').createConnection(config);
*/

var DbConnection = (function() {
    var DbConnection = function(config, mysql) {
        this.mysqlObj = mysql.module;
        this.conf = config;
        this.connection;
    };

    DbConnection.prototype.connect = function () {
      this.connection = this.mysqlObj.createConnection(this.conf);
      return this.connection;
    }
    return DbConnection;
})();
module.exports = DbConnection;
