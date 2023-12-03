const mysql= require('mysql2/promise');
require('dotenv').config();
 class dbSQL {
 host = process.env.db_host; 
 user = process.env.db_user;
  password = process.env.db_password ;
  database  = process.env.db_db ;
  static connection = null;
  dbSQL(){
    this.host =host;
    this.user = user;
    this.password = password;
    this.database = database;
  }
    connect (){
    if(this.connection == null){
      this.connection =  mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
        
        });
        console.log("connected first time!")
        return this.connection;
  }
 else
  {
    console.log('already connected')
return this.connection;
  }
}
}
obj = new dbSQL();

module.exports = obj.connect();