import dotenv from "dotenv";
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import ConnectionOptions from "./ormConfig";

dotenv.config();

console.log(process.env);

const PORT : number | string =process.env.PORT || 4000;
const PLAYGROUND : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const appOptions : Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT

}

const handleAppStart = () => console.log(`Listening on port ${PORT}`); 

createConnection(ConnectionOptions).then(() => {
    app.start(appOptions, handleAppStart);
})
.catch(error => console.log(error));

