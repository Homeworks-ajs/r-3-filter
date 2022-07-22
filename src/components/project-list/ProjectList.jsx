import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
    return (
            props.data.map((element, index) => <img key={index} alt="" src={element.img} />)
    )
}

ProjectList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            img: PropTypes.string,
            category: PropTypes.string
        }
    ))
}

export default ProjectList
