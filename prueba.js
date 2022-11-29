import ClienteSql from "./sql.js";
import { config } from "./config/mariaDB.js";


const sql = new ClienteSql(config)

// sql.getArticles()
//     .then((x)=>{
//         console.log(x)
//     })
//     .catch((err)=>{
//         console.log(err)
//         throw err
//     })
//     .finally(()=>{
//         sql.close()
//     })
sql.createTable()
    .then(()=>{
        console.log("tabla creada")

        const products = [
            { name: 'Botines Adiddas', price: 25000, image: "https://i.postimg.cc/LXXXXXmB/botines-Addidas.jpg" },
            { name: 'Raqueta Tennis', price: 125000, image: "https://i.postimg.cc/BtWQMBHM/raqueta-Head.jpg" },
        ]
        return sql.insertProducts(products)
    })
    .then(()=>{
        console.log("productos insertados")
        return sql.getProducts()
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