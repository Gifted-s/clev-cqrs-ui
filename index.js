let generatePage = (
  function () {
    let _this = {}
    let eventStore = require('clev-cqrs').eventStore
    let schemaName = require('clev-cqrs').schemaName
    let hbs = require('express-handlebars')
    let express = require('./express')
    let app = express()
    let path = require('path')
    let router = express.Router()
    app.engine('.hbs', hbs({ defaultLayout: 'layout', extname: '.hbs' }))
    app.set('view engine', '.hbs')
    app.use('/cqrs', router)
    app.use(express.static(path.join(__dirname, 'public')))
    _this.generatePage = app
    router.get('/', async function (req, res, next) {
      const docs = await eventStore.getAll()
      for (let i in docs) {
        for (let j in docs[i].events) {
          docs[i].events[j].eventTime = new Date(docs[i].events[j].eventTime).toUTCString()
        }
      }
      let ar = []
      for (let i in docs) {
        for (let j in docs[i].events) {
          for (let k of Object.keys(docs[i].events[j]).values()) {
            if (k !== 'eventName' && k !== 'aggregateId' && k !== 'eventId' && k !== 'eventVersion' && k !== 'eventTime') {
              ar.push(k + ' : ' + docs[i].events[j][k])
              docs[i].events[j].data = ar
            }
          }
          ar = []
        }
      }
      res.render('home/start', { title: 'Event Store', name: schemaName, event: docs })
      setTimeout(() => {
        for (let i in docs) {
          for (let j in docs[i].events) {
            delete docs[i].events[j].data
          }
        }
      }, 1000)
    })
    return _this
  }
)()

module.exports = generatePage
