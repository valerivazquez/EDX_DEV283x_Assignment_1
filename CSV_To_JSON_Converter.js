const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')

const csvFilePath=path.join(__dirname, '/customer-data.csv')

let jsonArray = []

csv()
.fromFile(csvFilePath, {encoding: 'utf-8'})
.on('json',(jsonObj)=>{
    jsonArray.push(jsonObj)
})
.on('done',(error)=>{
    var json = JSON.stringify(jsonArray);
    fs.writeFile('customer-data.json', json, {encoding: 'utf-8'}, function (error) {
        if (error) return console.error(error)
        console.log('Writing is done.')
      })
})
 

