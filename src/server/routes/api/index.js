import express from 'express';
import csv from 'csv-parser';
import fs from 'fs';

const router = express.Router();

const dateAndNumbers = (data) => {
  return Object.keys(data)
    .reduce((hash, d) => {
      if(d === 'Date') {
        hash[d] = data[d]
      } else {
        hash[d] = parseFloat(data[d])
      };
      return hash;
    }, {} )
}

router.get('/', (req, res) => res.send('API'));
router.get('/asx/:name', (req, res) => {
  const csvData = [];
  const file_path = './data/ncm_asx_history.csv';
  const headerList = [];
  fs.createReadStream(file_path)
    .pipe(csv())
    .on('headers', (headerLine) => {
      headerList.push(headerLine)
    })
    .on('data', (data) => (csvData.push(dateAndNumbers(data))))
    .on('end', () => {
      // TODO move to own component
      // TODO check speed from https://www.npmjs.com/package/fast-csv
      res.setHeader('Content-Type', 'application/json');
      res.send(csvData);
    });
});

export default ['/api', router];
