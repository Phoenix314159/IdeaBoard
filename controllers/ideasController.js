module.exports = {
  async getIdeas (req, res) {
    const {db: {run}} = req
    res.status(200).send(await run('select * from ideas'))
  },
  addIdeas (req, res) {
    // const {body: {idea}} = req, id = ideas[ideas.length - 1].id + 1
    // ideas.push({id, ...idea})
    // res.status(200).send(ideas)
  },
  async removeIdea (req, res) {
    const {db: {run}, query: {id}} = req
    console.log(id)
    const dbQuery = `delete from ideas where id=${id}`
    res.status(200).send(await run(dbQuery))
  }
}
