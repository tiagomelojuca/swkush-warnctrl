import "reflect-metadata"
import { DataSource } from "typeorm"
import { Warning } from "./Warning"

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "../db.sqlite",
    entities: [Warning],
    logging: true,
    synchronize: true
})

export default AppDataSource;
