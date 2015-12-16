const low = require('lowdb')
const storage = require('low-file-sync')


const db = low('/Users/sang/workspace/xbm.im/hz-api/routes/api/db.json',{ storage })

db('posts').push({ title: 'lowdb is awesome2'})

console.log(db)
// db.save()