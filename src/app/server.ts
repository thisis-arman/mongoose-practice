import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    // console.log("mongo", config.database_url);
    console.log(process.env.PORT);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

server().catch((err) => console.log(err));
