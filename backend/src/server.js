const app = require("./app.js");
const { connect } = require("./common/database/postgress.js");

const port = process.env.API_PORT || "8081";

async () =>
  await connect()
    .then(() => {
      app.listen(port, () =>
        console.log("listening on port http://localhost:" + port)
      );
    })
    .catch((err) => {
      console.log(
        "Database connection error\n" + process.env.NODE_ENV === "development"
          ? err
          : ""
      );
    });
