const low = require('lowdb')
const storage = require('low-file-sync')

const db = low('db.json',{ storage })

db('posts').push({ title: 'lowdb is awesome2'})

console.log(db('posts').find())
// db.save()