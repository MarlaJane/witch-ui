import express from 'express'
import path from 'path'
import { getAllMonths, getMonthByName, getMonthBySlug } from './controllers/months'
import { getAllMoons, getMoonByName, getMoonByMonth } from './controllers/moons'
import
{ getAllActivities, getActivitiesByMonth,
  addActivities, deleteActivities }
  from './controllers/activities'

const app = express()

app.use(express.static('public'))

app.get('/api/months', getAllMonths)
app.get('/api/months/:name', getMonthByName)
app.get('/api/months/:slug', getMonthBySlug)

app.get('/api/moons', getAllMoons)
app.get('/api/moons/:name', getMoonByName)
app.get('/api/moons/:monthId', getMoonByMonth) // route not working

app.get('/api/activities', getAllActivities)
app.get('/api/activities/:monthId', getActivitiesByMonth) // route not working

app.post('/api/activities', addActivities)
app.delete('/api/activities/:id', deleteActivities)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
