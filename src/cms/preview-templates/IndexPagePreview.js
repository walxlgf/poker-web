import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset, data }) => {
  console.log(`IndexPagePreview:data:${JSON.stringify(data)}`);
  return (
    <IndexPageTemplate
      bannerImage={entry.getIn(['data', 'bannerImage'])}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}
export default IndexPagePreview

