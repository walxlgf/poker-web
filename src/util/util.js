
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

export const formatMoney = (s) => {
    s = s + '';
    if (isNaN(parseFloat(s))) return s;
    let l = s.split('.')[0].split('').reverse();
    let t = '';
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
    }
    return t.split('').reverse().join('');// + '.' + r;
}

export const ICONS = () => {
    let arr = []
    for (let index = 29; index <= 66; index++) {
        arr.push(<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{ width: '100px', height: '100px', padding: '20px' }}
                src={require(`../img/icon/20201201 RDPT Website-${index}.svg`)}>
            </img>
            <span>{index}</span>
        </div>);
    }
    return <div style={{ backgroundColor: 'gray', display: 'flex', flexWrap: 'wrap' }}>{arr}</div>;
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
            if (Date.now() - hoverTime < 50) return;
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

export const CommonButton = ({ text, style, onClick = () => { } }) => {
    const [isBtnHover, setIsBtnHover] = useState(false);
    return (
        <a
            onClick={onClick}
            style={style || {}}
            className='commonButton'
            onMouseEnter={() => { setIsBtnHover(true); }}
            onMouseLeave={() => { setIsBtnHover(false) }}
        >
            <p className={`${isBtnHover ? 'active' : ''}`}>
                {text || ''}
            </p>
        </a>
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

// 聚合函数
export const compose = (...funcs) => {
    if (funcs.length == 0) return arg => arg;
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

/*
export const _export = () => {
    import { jsPDF } from "jspdf";
    import html2canvas from 'html2canvas';
    let content = document.querySelector("#hhhhhhhh");
    let offsetTop = content.offsetTop;
    let offsetBottom = 600;
    html2canvas(content, {
        width: window.screen.availWidth, // 截图区域的宽
        height: document.documentElement.scrollHeight - offsetTop - offsetBottom, // 截图区域的高
        x: 0,  // 截图区域相对x偏移点
        y: offsetTop,// 截图区域相对y偏移点，就是相对浏览器顶端的偏移
        backgroundColor: '#333',
    }).then(canvas => {
        document.body.append(canvas)
        var pageData = canvas.toDataURL('image/jpeg', 1.0);// 画布转为图片
        var pdf = new jsPDF('', 'pt', 'a4');// 生成pdf对象,方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
        // pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height); // addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
        pdf.addPage();
        pdf.addPage();
        pdf.addPage();
        pdf.addImage(pageData, 'JPEG', 0, 0, 595, canvas.height); // addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
        // pdf.save(title + '-authorization.pdf'); // 文件名可以自己取一个
        pdf.save("a4.pdf");
    });
}
*/