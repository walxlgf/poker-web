import React from 'react'
import PropTypes from 'prop-types'
import { SeriesIndexTemplate } from '../../templates/series-index'

const SeriesIndexPreview = ({ entry, getAsset }) => {
  return (
    <SeriesIndexTemplate
      title={entry.getIn(['data', 'title'])}
      series4Banner={entry.getIn(['data', 'series4Banner'])}
    />
  )
}

SeriesIndexPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SeriesIndexPreview
