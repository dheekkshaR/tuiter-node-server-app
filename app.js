import express from 'express';
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";
//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
mongoose.connect("mongodb+srv://dheekksha20:dheekksha20@cluster0.dkacg8o.mongodb.net/?retryWrites=true&w=majority");
/*const st1 = "mongodb+srv://<dheekksha20>:<dheekksha20>@cluster0.dkacg8o.mongodb.net/?retryWrites=true&w=majority";
const CONNECTION_STRING = st1 || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);*/
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000)