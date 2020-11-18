const Airtable = require('airtable')

const at_api_key =  process.env.AIRTABLE_API_KEY || 'keyzS7KDvnGHCo6zg'
const at_base = process.env.AIRTABLE_BASE_ID || 'appMuTiv9bXqAhdaK'

const base = new Airtable({ apiKey: at_api_key }).base(at_base)

base('posts').select({view:'main'}).firstPage((err, records) => {
    if (err) {
      console.error(err)
      return
    }
    records.forEach(element => console.log(element['fields']))
})
