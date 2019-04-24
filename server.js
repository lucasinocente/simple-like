const express = require('express')
const app = express()
const { Datastore } = require('@google-cloud/datastore')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const datastore = new Datastore()

app.set('view engine', 'ejs')

app.get('/like', async function (req, res) {
  const { url } = req.query
  console.log(req.query)
  const likes = await countLikes(url)
  const APP_URL = process.env.APP_URL || 'http://localhost:8080'
  res.render('like', { likes, APP_URL })
})

app.post('/like', async function (req, res) {
  const { url } = req.query
  console.log(url)
  await likeUrl(url)
  res.sendStatus(200)
})

const countLikes = async (url) => {
  const query = datastore.createQuery('likes').filter('url', url)
  const result = await datastore.runQuery(query)
  if (!result[0][0]) {
    return 0
  }
  const likes = result[0][0].likes
  return likes
}

const likeUrl = async (url) => {
  console.log('url', url)
  const likes = await countLikes(url)
  const data = { url, likes: likes + 1 }
  const entityKey = url
  const key = datastore.key(['likes', entityKey])
  const entity = { key, data }
  try {
    await datastore.upsert(entity)
    console.log('Like editado', data)
    return true
  } catch (err) {
    console.log('error', err)
    return false
  }
}

app.listen(process.env.POST || 8080)
console.log(`http://localhost:${process.env.POST || 8080}`)