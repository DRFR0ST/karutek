import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import cx from 'classname'
import moment from 'moment'

const Card = ({ id, title, image, category, date, featured, horizontal, leftAligned, ...props }) => {
    
    const handleClick = () => props.history.push(`/post/${id}`)
    
    return <div className={cx("Card", {featured, horizontal, "left-align": leftAligned})}>
        <div className="Card__thumbnail">
            <img src={image} alt={title} />
        </div>
        <div className="Card__content">
            <h2 className="Card__title">{title}</h2>
            {/* <p className="Card__kind">{category}</p> */}
        </div>
    </div>
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,

    featured: PropTypes.bool
}

Card.defaultProps = {
    featured: false,
    thumbnail: "https://i1.wp.com/awsprojects.net/wp-content/plugins/penci-pennews-portfolio/images/no-thumbnail.jpg",
}

export default withRouter(Card);