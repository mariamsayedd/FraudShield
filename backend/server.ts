import app from "./app";
import { config } from "./env";
import * as cors from "cors";

app.use(cors({ origin: "http://localhost:3000" })); 


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});