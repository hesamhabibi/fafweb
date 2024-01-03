/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {useCallback, useMemo} from "react";

import {default as Img} from "next/image";

const shimmer = (w, h) => `<svg width="${w}" height="${h}"  viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
            <stop stop-color="rgba(255,255,255,0)" offset="20%"/>
            <stop stop-color="rgba(255,255,255,1)" offset="45%"/>
            <stop stop-color="rgba(255,255,255,1)" offset="55%"/>
            <stop stop-color="rgba(255,255,255,0)" offset="80%"/>
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="rgba(0,0,0,.04)"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur=".8s" repeatCount="indefinite"/>
</svg>`

// const toBase64 = str => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export default function Image(props) {

    const {src, width, height, alt, fill ,sizes, quality, priority, placeholder, style, onLoadingComplete, onLoad, onError, loading, ...rest} = props

    // -----------------------------------------------------------------------------------------------------------------

    const toBase64 = useCallback(str => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str), [])

    // از رندر اضافه جلوگیری شد
    const renderImage = useMemo(() => (
        src ? (
            <Img src={src}
                 width={width}
                 height={height}
                 alt={alt || ''}
                 fill={fill ? fill : (!width || !height ? true : undefined)}
                 sizes={sizes || '(max-width: 767px) 100vw'}
                 quality={quality}
                 priority={priority}
                 placeholder={placeholder || `data:image/svg+xml;base64,${toBase64(shimmer('100%', '100%'))}`}
                 style={style || {objectFit: 'contain'}}
                 onLoadingComplete={onLoadingComplete}
                 onLoad={onLoad}
                 onError={onError}
                 loading={loading || 'lazy'}
              // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer('100%', '100%'))}`}
              // برای نمایش شیمر در هر رندر key استفاده شد
              // {...rest} key={src}/>
                 {...rest}
                 key={new Date().getTime()}/>
        ) : (
            <></>
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [src])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        ['jpg', 'png', 'webp'].includes(src.split(/[#?]/)[0].split('.').pop().trim()) ? (
            renderImage
        ) : (
            <img {...props}/>
        )
    )

};