import { Router } from "express";
import { GetList } from "../controllers/priceController.js";


const route = Router()

//rota para listar tudo
route.get('/price', GetList)


/*rota para listar preços do AL
route.get('/price/al')
*/

export {route as price}