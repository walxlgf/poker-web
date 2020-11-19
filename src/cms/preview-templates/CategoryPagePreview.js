import React from 'react'
import PropTypes from 'prop-types'
import { CategoryPageTemplate } from '../../templates/category-page'

const CategoryPagePreview = ({ entry }) => {
  return (
    <CategoryPageTemplate
      categoryKey={entry.getIn(['data', 'categoryKey'])}
      title={entry.getIn(['data', 'title'])}
      address={entry.getIn(['data', 'address'])}
    />
  )
}

CategoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CategoryPagePreview
