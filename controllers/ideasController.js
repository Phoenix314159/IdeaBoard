const ideas = [{id: 1, title: 'cool man', body: 'aOPKJsdfnb'},
  {id: 2, title: 'yo dude', body: 'aOPKJsdfnb'},
  {id: 3, title: 'tubular bro', body: 'aOPKJsdfnb'}
]

module.exports = {
  getIdeas (req, res) {
    const {db} = req
    console.log(db)
    res.status(200).send(ideas)
  },
  addIdeas (req, res) {
    const {body: {idea}} = req, id = ideas[ideas.length - 1].id + 1
    ideas.push({id, ...idea})
    res.status(200).send(ideas)
  }
}
