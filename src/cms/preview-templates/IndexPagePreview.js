import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'



const IndexPagePreview = ({ entry, getAsset }) => {

    // 将数据处理成 和从 graphiql 获取的一样
    let photos = entry.getIn(['data', 'photos']).toJS();
    for (let index = 0; index < photos.length; index++) {
        const p = photos[index];
        p.name = {
            relativePath: p.name.replace('/img/', '')
        }
    }

    let data = entry.getIn(['data', 'thisYearSeriess']) ? entry.getIn(['data', 'thisYearSeriess']).toJS() : {};
    let thisYearSeriess = { frontmatter: { thisYearSeriess: data } }

    return (
        <IndexPageTemplate
            bannerImage={entry.getIn(['data', 'bannerImage'])}
            photos={photos}
            thisYearSeriess={thisYearSeriess}
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

