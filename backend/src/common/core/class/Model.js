class Model {
  constructor({ table, columns }) {
    this.table = table;
    this.columns = columns;
  }

  generateValuesInjectionString(columns) {
    let valuesString = `$1`;

    if (Array.isArray(columns) && this.columns.length > 0) {
      valuesString = "";
      columns.forEach((element, index) => {
        valuesString += `$${index + 1}, `;
      });

      valuesString = valuesString.slice(0, -2);
    }

    return valuesString;
  }

  injectionModel() {
    return `${this.table} ( ${
      this.columns
    } ) VALUES ( ${this.generateValuesInjectionString(this.columns)})`;
  }
}

module.exports = Model;
