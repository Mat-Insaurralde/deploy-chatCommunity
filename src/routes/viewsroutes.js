
import  express  from "express";

const viewsRoute = express();

viewsRoute.get('/',(req,res) => {

res.render('index',{})


} )

export default viewsRoute;