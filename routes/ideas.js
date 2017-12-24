const {getIdeas, addIdeas} = require('../controllers/ideasController')

module.exports = app => {
  app.get('/api/ideas', getIdeas)
  app.post('/api/ideas', addIdeas)
}
