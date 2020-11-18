import React from 'react'
import PropTypes from 'prop-types'
import { SeriesPageTemplate } from '../../templates/series-page'

const SereisPagePreview = ({ entry }) => {
  return (
    <SeriesPageTemplate
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      events={entry.getIn(['data', 'events'])}
      bannerImage={entry.getIn(['data', 'bannerImage'])}
    />
  )
}


SereisPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SereisPagePreview