const XLSX = require('xlsx');

const convertToJSON = (fileName, sheetName) => {
  const workbook = XLSX.readFile(fileName);
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
};

module.exports = convertToJSON;
