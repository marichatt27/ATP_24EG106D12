import exp from "express";
import { userApp } from "./API/UserAPI.js";
import { productApp } from "./API/ProductAPI.js";

// use body parser middleware

const app = exp();

app.use('/user-api', userApp)
app.use('/product-api', productApp)

function mid1(request, response, next){
    console.log('')
}
function mid2(request, response, next){
    console.log("mid 1 executed")
}
app.use(mid1)
app.use(mid2)

app.use(exp.json());
const port = 6767;
app.listen(port, () => console.log(`server listning port : ${port} ...`));