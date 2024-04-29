class Repository {
  qr(type, model) {
    let query = "";
    switch (type) {
      case "get":
        query = `SELECT * FROM ${model}`;
        break;
      case "create":
        query = `INSERT INTO ${model} RETURNING *`;
        break;
      default:
        query = `NOT EXISTENT TYPE`;
    }

    return query;
  }
}

module.exports = Repository;
