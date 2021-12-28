const fs = require('fs')
const csv = require('csv-parser')

const whitelist = {}
fs.createReadStream('genesis.csv')
  .pipe(csv())
  .on('data', (row) => {
    whitelist[row['Address']] = row['Number']
  })
  .on('end', () => {
    fs.writeFileSync(
      'whitelist.json',
      JSON.stringify(whitelist, null, 4)
    )
  })
