const {getIdeas, addIdea, removeIdea} = require('../controllers/ideasController')

module.exports = app => {
  app.get('/api/ideas', getIdeas)
  // app.post('/api/ideas', addIdea)
  app.delete('/api/ideas', removeIdea)
}
