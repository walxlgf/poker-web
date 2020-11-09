import React from 'react'
import PropTypes from 'prop-types'
import { IdxPageTemplate } from '../../templates/idx-page'

const IdxPagePreview = ({ entry, getAsset }) => {
  return (
    <IdxPageTemplate
      relatedSeries={entry.getIn(['data', 'relatedSeries'])}
    />
  )
}

IdxPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IdxPagePreview
