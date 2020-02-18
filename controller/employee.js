class EmployeeController {
  handleQuery(type, resources, params) {
    switch (type) {
      case 'POST':
        this.insert(resources, params);
        break;
      case 'GET':
        this.select(resources, params);
        break;
      case 'PATCH':
        this.select(resources, params);
        break;
      case 'DELETE':
        this.delete(resources, params);
        break;
    }
  }

  insert(resources, params) {}

  select(resources, params) {}

  update(resources, params) {}

  delete(resources, params) {}
}

let employeeController = new EmployeeController();
module.exports = employeeController;
