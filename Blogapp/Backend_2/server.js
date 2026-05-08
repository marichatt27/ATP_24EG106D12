import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import { userApp } from "./APIs/userAPI.js";
import { adminApp } from "./APIs/adminAPI.js";
import { authorApp } from "./APIs/authorAPI.js";
import { commonApp } from "./APIs/commonAPI.js";

config();

const app = exp();

app.use(exp.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/user-api", userApp);
app.use("/admin-api", adminApp);
app.use("/author-api", authorApp);
app.use("/common-api", commonApp);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

connect(process.env.DB_URL)
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log("DB connection failed:", err);
  });