import ClienteSql from "./models/sql.js";
import { config } from "./config/sqlite3.js";


const sql = new ClienteSql(config)


sql.createTable()
    .then(()=>{
        console.log("tabla creada")

        const messages = [
            { user: 'Pepito', message: "hola que tal" },
            { user: 'Juansito', message: "bien bien" }
        ]
        return sql.insertMessages(messages)
    })
    .then(()=>{
        console.log("productos insertados")
        return sql.getMessages()
    })
    .then((x)=>{
        console.log(x)
    })
    .catch((err)=>{
        console.log(err)
        throw err
    })
    .finally(()=>{
        sql.close()
    })