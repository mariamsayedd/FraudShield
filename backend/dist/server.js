"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./env");
const cors = require("cors");
app_1.default.use(cors({ origin: "http://localhost:3000" }));
app_1.default.listen(env_1.config.port, () => {
    console.log(`Server is running on port ${env_1.config.port}`);
});
