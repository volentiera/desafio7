
import {Router} from 'express'
const router = Router();

import ClienteSql from "../sql.js";
import { config } from "../config/mariaDB.js";
const jsScript = '../public/main.js';

const sql = new ClienteSql(config)


router.get('/', async (req, res) => {
    const products = await sql.getProducts()
    res.render('index', {products, jsScript} );
});





export default router