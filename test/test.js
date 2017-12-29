var assert = require('assert');
const path = require('path')
var fs = require('fs');

Csv_To_Json = require ('./../Csv_To_Json')

const csvFilePath = path.join(__dirname, './../customer-data.csv')
const jsonFilePath = path.join(__dirname, './../customer-data.json')

describe('Verify Converter csv to json', function() {

  before(function() {
    var exists = fs.existsSync(jsonFilePath);
    if (exists) fs.unlinkSync(jsonFilePath);
    Csv_To_Json.converter()

    this.timeout(900);
    setTimeout(function(){}, 700);
  });

  describe('customer-data.csv exists', function() {
    it('should the file custome-dat.csv exist', function(){
      var exists = fs.existsSync(csvFilePath);
      assert.equal(true, exists);
    });
  });
  
  describe('customer-data.json exists', function() {
    it('should the file custome-dat.json exists', function(){
      var exists = fs.existsSync(jsonFilePath);
      assert.equal(true, exists);
    });
  });

  describe('Verify content of json File', function() {
    it('should the json file have 1000 objects', function(){
      var contents = fs.readFileSync(jsonFilePath, 'utf8').toString();
      obj = JSON.parse(contents)
      assert.equal(1000, obj.length);

    });
  });
});

