
import React, { useState, useEffect } from "react"

export const scrollAnimation = (currentY, targetY) => {
    // 计算需要移动的距离
    let needScrollTop = targetY - currentY
    let _currentY = currentY
    setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
            scrollAnimation(_currentY, targetY)
        } else {
            window.scrollTo(_currentY, targetY)
        }
    }, 1)
}

// 节流函数
export const throttle = (fn, delay = 1000) => {
    let timer = null;
    let firstTime = true;
    return function (...args) {
        if (firstTime) {
            // 第一次加载
            fn.apply(this, args);
            return firstTime = false;
        }
        if (timer) {
            // 定时器正在执行中，跳过
            return;
        }
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
        }, delay);
    };
}


// 类似x轴坐标系 求两个区间是否相交
// 如 [1000,2000], [1800, 2100]两个区间后相交，相交部分百分比为200/300,大于50%认为相交
export const rangesIntersect = (ranges1, ranges2) => {
    if (ranges2[0] > ranges1[1]) return false; // ranges2在ranges1之后
    if (ranges2[1] < ranges1[0]) return false; // ranges2在ranges1之前
    if (ranges2[0] > ranges1[0] && ranges2[1] < ranges1[1]) return true; // ranges2在ranges1区间内
    if (ranges2[0] < ranges1[0]) { // ranges2和ranges1前相交
        let scale = (ranges1[0] - ranges2[0]) / (ranges2[1] - ranges2[0]);
        return scale < 0.5; // 相交部分大于50%则认为在里面
    }
    // ranges2和ranges1后相交
    let scale = (ranges2[1] - ranges1[1]) / (ranges2[1] - ranges2[0]);
    return scale < 0.5;
}

export const HoverAnimationView = (props) => {
    const animationName = props.animationName || 'animate__bounceIn';
    const [isBtnHover, setIsBtnHover] = useState(false);
    const [hoverTime, setHoverTime] = useState(null); // 时间控制下，否则鼠标移入移除会疯狂回调
    return (
        <div onMouseEnter={() => {
            setHoverTime(Date.now())
            setIsBtnHover(true);
        }}
            onMouseLeave={() => {
                if (Date.now() - hoverTime < 50) return;
                setIsBtnHover(false)
            }}
            className={`animate__animated ${isBtnHover ? animationName : ''}`} >
            {props.children}
        </div>
    )
}

export const PlaceHolderImg = (props) => {
    const { src, plscr } = props;
    const [showSrc, setShowSrc] = useState(src);
    return (
        <img
            {...props}
            src={showSrc}
            onError={() => plscr && setShowSrc(plscr)}
        />
    );
}


export const useWindowScrollHook = (fn) => {
    useEffect(() => {
        window.addEventListener('scroll', throttle(fn, 100));
    }, [])
}
