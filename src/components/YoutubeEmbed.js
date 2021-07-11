import React from 'react'
import PropTypes from 'prop-types'

const YoutubeEmbed = ({ embedId }) => ( <
    div className = 'video-responsive flex justify-center ' >
    <
    iframe width = "540"
    height = "255"
    src = "https://www.youtube.com/embed/sRy5dJg0k-8"
    title = "YouTube video player"
    frameborder = "0"
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen / > <
    /div>
)

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed