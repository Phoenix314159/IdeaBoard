import React, { Component } from 'react'
import axios from 'axios'
import IdeaBox from './IdeaBox'
import TopSection from './TopSection'

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

  closeBox = index => {
    const {ideas} = this.state
    ideas.map(box => {
      if(box === ideas[index]) {
        delete ideas[index]
      }
    }).filter(Boolean)
    this.setState({ideas})
  }

  render () {
    const {ideas} = this.state
    if (!ideas) return <div>Loading...</div>
    return (
      <div className="container">
       <TopSection addNewIdea={this.addNewIdea}/>
        <IdeaBox ideas={ideas} closeBox={this.closeBox}/>
      </div>
    )
  }
}