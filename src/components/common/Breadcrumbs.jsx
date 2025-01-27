import React from 'react'
import PropTypes from 'prop-types';

function Breadcrumbs({
    current = '',
}) {
  return (
    <div className="breadcrumbs">
        {/* @TODO какая главная страница ?  */}
        <a href="client.html" className="breadcrumbs_link">Личный кабинет</a>
        <span className="breadcrumbs_sep">/</span>
        <span className="breadcrumbs_text">{current}</span>
    </div>
  )
}

Breadcrumbs.propTypes = {
    current: PropTypes.string.isRequired
}

export default Breadcrumbs
