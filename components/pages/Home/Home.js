"use client"

import BannerSlider from "../../common/widgets/BannerSlider/BannerSlider";
import Divider from "../../common/widgets/Divider/Divider";
import Banner from "../../common/widgets/Banner/Banner";
import SliderImage from "../../common/widgets/SliderImage/SliderImage";
import SliderImageText2 from "../../common/widgets/SliderImageText2/SliderImageText2";
import BannerGrid from "../../common/widgets/BannerGrid/BannerGrid";

export default function PageHome() {

    // -----------------------------------------------------------------------------------------------------------------

    const arrayBannerSlider = [1, 2, 3, 4, 5]
    const arrayBanner = {href: '', src: '/test.jpg', alt: ''}
    const arraySliderImage = [
        {id: 1, href: '', src: '/test.jpg', alt: ''},
        {id: 2, href: '', src: '/test.jpg', alt: ''},
        {id: 3, href: '', src: '/test.jpg', alt: ''},
        {id: 4, href: '', src: '/test.jpg', alt: ''},
        {id: 5, href: '', src: '/test.jpg', alt: ''},
        {id: 6, href: '', src: '/test.jpg', alt: ''}
    ]
    const arrayBannerGrid = [
        {id: 1, href: '', src: '/test.jpg', alt: ''},
        {id: 2, href: '', src: '/test.jpg', alt: ''},
        {id: 3, href: '', src: '/test.jpg', alt: ''},
        {id: 4, href: '', src: '/test.jpg', alt: ''}
    ]

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <div id="pageHome" className="position-relative">
            <div className="position-absolute top-0 start-0 end-0 z-n1 gradient"/>
            <BannerSlider data={arrayBannerSlider} fluid className="px-0"/>
            <Divider data="mt-4"/>
            <Banner data={arrayBanner} className="home-row-3"/>
            <Divider data="mt-4"/>
            <SliderImage data={arraySliderImage} options={{padding: {right: '.75rem', left: '.75rem'}}} className="px-0 home-row-4"/>
            <Divider/>
            <Banner data={arrayBanner} className="home-row-5"/>
            <Divider/>
            <SliderImageText2 data={arraySliderImage} options={{padding: {right: 'calc((100% - .75rem) / 2)', left: '.75rem'}}} className="px-0 home-row-6"/>
            <Divider data="mt-5"/>
            <BannerGrid data={arrayBannerGrid} className="home-row-7"/>
            <Divider data="mt-5"/>
            <Divider data="mt-5"/>
            <div className="pt-3"/>
            <Divider data="mt-5"/>
            <Divider data="mt-5"/>
            <Divider data="mt-5"/>
        </div>
    )
}
