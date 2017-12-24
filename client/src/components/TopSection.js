import React from 'react'

export default ({addNewIdea}) => (
  <div>
    <h2 className="ideaHeader">Idea Board</h2>
    <div className="newIdeaButton">
      <button className="btn btn-primary" onClick={addNewIdea}>New Idea</button>
    </div>
  </div>
)
