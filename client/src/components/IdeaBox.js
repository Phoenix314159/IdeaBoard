import React from 'react'

export default ({ideas}) => (
  <div>
    {ideas.map(idea => {
      const {id, title, body} = idea
      return (
        <div className="Ideas" key={id}>
          <div>{title}</div>
          <div>{body}</div>
        </div>
      )
    })}
  </div>
)
