const EmployeeController = require('../controller/employee');
const ProjectController = require('../controller/project');
const CompanyController = require('../controller/company');

const processJson = data => {
  data.forEach(record => {
    let params = [];
    for (let key in record) {
      if (/P.*/.test(key)) {
        params.push(record[key]);
      }
    }
    let resources = record['Resource']
      .split(',')
      .map(resource => resource.trim());
    let queryType = record['Query type'];

    switch (resources[0]) {
      case 'employee':
        EmployeeController.handleQuery(queryType, resources, params);
        break;
      case 'company':
        CompanyController.handleQuery(queryType, resources, params);
        break;
      case 'project':
        ProjectController.handleQuery(queryType, resources, params);
    }
  });
};

module.exports = processJson;
