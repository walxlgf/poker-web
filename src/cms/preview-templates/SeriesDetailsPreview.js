import React from 'react'
import PropTypes from 'prop-types'
import { SeriesDetailsTemplate } from '../../templates/series-details'

const SeriesDetailsPreview = ({ entry, widgetFor }) => {
  return (
    <SeriesDetailsTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

SeriesDetailsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SeriesDetailsPreview
