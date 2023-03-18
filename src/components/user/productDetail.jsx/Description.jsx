import React from 'react'

const Description = (props) => {
  return (
    <div className="tab-pane fade show active" id="tab-pane-1">
    <h4 className="mb-3">Product Description</h4>
    <p>{props.detail}</p>
</div>
  )
}

export default Description