
import React, { useEffect, useRef, useState } from 'react'
import { rangesIntersect, useWindowScrollHook } from '../../util/util'
import Bus, { EVENTS } from '../../util/eventBus.js'
import '../../styles/index-page.scss'
import { NavHeigth, TopImageHeight } from '../../util/consts'

const totalItemsCount = 7;

export default () => {// 首页背景动画色块

    // 所有  背景色块 距离浏览器顶部高度
    const [itemLocations, setItemLocations] = useState([])
    let refs = []
    for (let index = 0; index < totalItemsCount; index++) {
        const bgItemRef = useRef(null)
        refs.push(bgItemRef);
    }

    useEffect(() => {
        let topOffset = NavHeigth + TopImageHeight
        for (let index = 0; index < refs.length; index++) {
            let ref = refs[index];
            let { offsetTop, offsetHeight } = ref.current;
            itemLocations.push({
                top: offsetTop + topOffset,
                bottom: offsetTop + offsetHeight + topOffset,
                isActive: false
            });
        }
    }, [])

    useWindowScrollHook(() => {
        const { clientHeight, scrollTop } = document.documentElement;
        let flag = false;
        for (let index = 0; index < itemLocations.length; index++) {
            const location = itemLocations[index];
            if (!location.isActive
                && rangesIntersect([scrollTop, scrollTop + clientHeight], [location.top, location.bottom])) {
                flag = true;
                location.isActive = true;
                Bus.emit(EVENTS.bgAnimationView, index);
            }
        }
        if (flag) {
            setItemLocations([...itemLocations])
        }
    })

    return (
        <div className='bgView'>
            {
                refs.map((ref, index) => {
                    let classname = itemLocations[index] && itemLocations[index].isActive ? 'active' : '';
                    return (
                        <div key={index} ref={ref} className={`m-bg-item${index + 1} ${classname}`} >
                            <div />
                        </div>
                    )
                })
            }
        </div>
    )
}