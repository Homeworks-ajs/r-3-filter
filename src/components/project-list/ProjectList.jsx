import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
    return (
            props.data.map((element, index) => <img key={index} alt="" src={element.img} />)
    )
}

ProjectList.propTypes = {}

export default ProjectList
