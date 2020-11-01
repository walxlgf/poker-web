import React from 'react'
import PropTypes from 'prop-types'
import { SeriesTemplate } from '../../templates/series-page'

const SeriesPreview = ({ entry, getAsset }) => {
  return (
    <SeriesTemplate
      title={entry.getIn(['data', 'title'])}
      // seriesBanner={entry.getIn(['data', 'seriesBanner'])}
    />
  )
}

SeriesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SeriesPreview
