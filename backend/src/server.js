const postgresPool = require("./common/database/postgress.js");
console.log("Connecting to database...");
postgresPool
  .connect()
  .then(() => {
  })
  .catch((err) => {
    console.log(
      "Database connection error\n" + process.env.NODE_ENV === "development"
        ? err
        : ""
    );
  });
