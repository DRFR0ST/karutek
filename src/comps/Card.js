import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import services from "../assets/services";

import cx from 'classname'

const Card = ({ id, title, image, category, date, featured, horizontal, leftAligned, made_with, ...props }) => {

    //const handleClick = () => props.history.push(`/post/${id}`)

    return <div className={cx("Card", { featured, horizontal, "left-align": leftAligned })}>
        <img className="Card__thumbnail" src={image} alt={title} />
        <div className="Card__content">
            <h2 className="Card__title">{title}</h2>
            <p className="Card__category">{category}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit mauris, convallis ut elit in, bibendum laoreet ex. Nulla nunc ligula, faucibus ut mattis sit amet, maximus id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tempus at velit a efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc venenatis eleifend suscipit. Praesent ornare, erat sed rutrum mattis, elit lacus cursus purus, et placerat velit lectus et mi. In non neque auctor, rutrum nisl eu, gravida magna. Integer finibus sapien diam, vitae imperdiet dolor placerat a. Nulla tristique hendrerit nulla vitae bibendum. Suspendisse dictum ac enim id iaculis.</p>
            <div className="Card__made-with">
                {made_with && made_with.map(e => {
                    const el = services[e];
                    return <img key={el.name} alt={el.name} title={el.name} src={el.thumbnail} />
                })}
            </div>
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