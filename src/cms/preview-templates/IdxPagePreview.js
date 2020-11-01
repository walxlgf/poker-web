import React from 'react'
import PropTypes from 'prop-types'
import { IdxPageTemplate } from '../../templates/idx-page'

const IdxPagePreview = ({ entry, getAsset }) => {
  return (
    <IdxPageTemplate
      title={entry.getIn(['data', 'title'])}
      // seriesBanner={entry.getIn(['data', 'seriesBanner'])}
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
