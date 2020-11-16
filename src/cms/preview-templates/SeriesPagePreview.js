import React from 'react'
import PropTypes from 'prop-types'
import { SeriesPageTemplate } from '../../templates/series-page'

const SereisPagePreview = ({ entry, widgetFor }) => {
  return (
    <SeriesPageTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      events={entry.getIn(['data', 'events'])}
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
