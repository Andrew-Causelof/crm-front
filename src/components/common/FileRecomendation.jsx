import React from 'react'

function FileRecomendation({title}) {
  return (
    <div className="text_unit">
    <span className="text_unit_icon"></span>
    <div className="text_unit_title">{title}</div>
    <div className="text_unit_actions actions">
        <span className="print_btn"></span>
        <span className="pdf_btn"></span>
    </div>
</div>
  )
}

export default FileRecomendation
