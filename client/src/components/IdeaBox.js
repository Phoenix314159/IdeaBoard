import React from 'react'

export default ({ideas, closeBox}) => (
  <div className="ideaBox">
    {ideas.map((idea, i) => {
      const {id, title, body} = idea
      return (
        <div className="Ideas" key={id}>
          <div className="closeButton">
            <button className="btn btn-danger"
                    onClick={() => closeBox(i)}>X
            </button>
          </div>
          <div className="dataSection">
            <div>{title}</div>
            <div>{body}</div>
          </div>
        </div>
      )
    })}
  </div>
)
