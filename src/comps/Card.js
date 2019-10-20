import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import services from "../assets/services";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import cx from 'classname'

const Card = ({ id, title, image, category, date, featured, horizontal, leftAligned, made_with, color, description, textColor, ...props }) => {

    //const handleClick = () => props.history.push(`/post/${id}`)

    return <div className={cx("Card", { featured, horizontal, "left-align": leftAligned })} style={{background: color, color: textColor}}>
        <img className="Card__thumbnail" src={image} alt={title} />
        <div className="Card__content">
            <h2 className="Card__title">{title}</h2>
            <p className="Card__category">{category}</p>
            <p>{description}</p>
            <div className="Card__bottom">
                <div className="Card__made-with">
                    {made_with && made_with.map(e => {
                        const el = services[e];
                        return <img key={el.name} alt={el.name} title={el.name} src={el.thumbnail} />
                    })}
                </div>
                <div className="Card__download" title="Download"><a href={image} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileDownload} /></a></div>
            </div>
        </div>

    </div>
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    catagory: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,

    featured: PropTypes.bool
}

Card.defaultProps = {
    featured: false,
    thumbnail: "https://i1.wp.com/awsprojects.net/wp-content/plugins/penci-pennews-portfolio/images/no-thumbnail.jpg",
}

export default withRouter(Card);