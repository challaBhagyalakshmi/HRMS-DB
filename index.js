const { resolve } = require('path');
require('dotenv').config({
  path: resolve(__dirname, './config/dev.env')
});

const convertToJson = require('./xlsx/parse_xlsx');
const processJson = require('./process/process.js');

const json = convert_to_json(
  resolve(__dirname, './input/queries.xlsx'),
  'All Operations'
);

processJson(json);
