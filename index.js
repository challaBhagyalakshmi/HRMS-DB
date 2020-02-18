const { resolve } = require('path');
const processJson = require('./process/process.js');

require('dotenv').config({
  path: resolve(__dirname, './config/dev.env')
});

const convert_to_json = require('./xlsx/parse_xlsx');

const json = convert_to_json(
  resolve(__dirname, './input/queries.xlsx'),
  'All Operations'
);

processJson(json);
