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
      res.render('home/start', { title: 'Event Store', name: schemaName, event: docs })
    })
    return _this
  }
)()

module.exports = generatePage
