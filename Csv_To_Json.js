const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')

const csvFilePath=path.join(__dirname, '/customer-data.csv')

let jsonArray = []
let countCSV = 0

exports.converter = function() {

    csv()
    .fromFile(csvFilePath, {encoding: 'utf-8'})
    .on('json',(jsonObj)=>{
        countCSV++
        jsonArray.push(jsonObj)
    })
    .on('done',(error)=>{
        if (jsonArray.length > 0) {
            var json = JSON.stringify(jsonArray);
            fs.writeFile('customer-data.json', json, {encoding: 'utf-8'}, function (error) {
                if (error) return // console.error(error)
                return // console.log('Writing is done.')
            })
        }
    })
    .on('error',(err)=>{
        return // console.log('Error File', err)
    })
    
 
}


