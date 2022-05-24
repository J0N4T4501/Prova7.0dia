import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import end from 'serv.js'


server.use(end);

const server = express();
server.use(cors());

server.use(express.json());




server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));
