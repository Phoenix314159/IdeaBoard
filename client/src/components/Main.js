import React, { Component } from 'react'
import axios from 'axios'
import IdeaBox from './IdeaBox'

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      ideas: []
    }
  }

  async componentDidMount () {
    const {data} = await axios.get('/api/ideas')
    this.setState({ideas: data})
  }

  addNewIdea = async () => {
    const {data} = await axios.post('/api/ideas', {idea: {title: '', body: ''}})
    this.setState({ideas: data})
  }

  render () {
    const {ideas} = this.state
    if (!ideas) return <div>Loading...</div>
    return (
      <div className="container">
        <h2 className="ideaHeader">Idea Board</h2>
        <div className="newIdeaButton">
          <button className="btn btn-primary" onClick={this.addNewIdea}>New Idea</button>
        </div>
        <div className="row">
          <IdeaBox ideas={ideas}/>
        </div>
      </div>
    )
  }
}