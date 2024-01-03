import React, {useRef} from "react";

import {icons} from "lucide-react";

import ImgHome from "../../assets/img/icons/home.svg";
import ImgHomeFill from "../../assets/img/icons/home-fill.svg";
import ImgCategory from "../../assets/img/icons/category.svg";
import ImgCategoryFill from "../../assets/img/icons/category-fill.svg";
import ImgShoppingCart from "../../assets/img/icons/shopping-cart.svg";
import ImgShoppingCartFill from "../../assets/img/icons/shopping-cart-fill.svg";
import ImgUser from "../../assets/img/icons/user.svg";
import ImgUserFill from "../../assets/img/icons/user-fill.svg";
import ImgSearchFill from "../../assets/img/icons/search-fill.svg";
import ImgPhone from "../../assets/img/icons/phone.svg";
import ImgSupportCenter from "../../assets/img/icons/support-center.svg";
import ImgTelegram from "../../assets/img/icons/telegram.svg";
import ImgFacebook from "../../assets/img/icons/facebook.svg";
import ImgInstagram from "../../assets/img/icons/instagram.svg";
import ImgLinkedin from "../../assets/img/icons/linkedin.svg";
import ImgAparat from "../../assets/img/icons/aparat.svg";
import ImgMoveRightSm from "../../assets/img/icons/move-right-sm.svg";
import ImgChevronRightSm from "../../assets/img/icons/chevron-right-sm.svg";
import ImgFeedback from "../../assets/img/icons/feedback.svg";
import ImgHeart from "../../assets/img/icons/heart.svg";
import ImgTruckFast from "../../assets/img/icons/truck-fast.svg";
import ImgShoppingCartAdd from "../../assets/img/icons/shopping-cart-add.svg";
import ImgLoader from "../../assets/img/icons/loader.svg";
import ImgBrand from "../../assets/img/icons/brand.svg";

export default function Icon({name, ...props}) {

    const iconsCustom = useRef({
        Home: <ImgHome/>,
        Category: <ImgCategory/>,
        ShoppingCart: <ImgShoppingCart/>,
        User: <ImgUser/>,
        Phone: <ImgPhone/>,
        SupportCenter: <ImgSupportCenter/>,
        Telegram: <ImgTelegram/>,
        Facebook: <ImgFacebook/>,
        Instagram: <ImgInstagram/>,
        Linkedin: <ImgLinkedin/>,
        Aparat: <ImgAparat/>,
        MoveRightSm: <ImgMoveRightSm/>,
        ChevronRightSm: <ImgChevronRightSm/>,
        Feedback: <ImgFeedback/>,
        Heart: <ImgHeart/>,
        TruckFast: <ImgTruckFast/>,
        ShoppingCartAdd: <ImgShoppingCartAdd/>,
        Loader: <ImgLoader/>,
        Brand: <ImgBrand/>,
        // -------------------------------------------------------------------------------------------------------- fill
        HomeFill: <ImgHomeFill/>,
        CategoryFill: <ImgCategoryFill/>,
        ShoppingCartFill: <ImgShoppingCartFill/>,
        UserFill: <ImgUserFill/>,
        SearchFill: <ImgSearchFill/>,
    })

    const iconCustomHandler = item => {

        let iconCustom = {...iconsCustom.current[item]}

        let {size, color, absoluteStrokeWidth, ...propsTemp} = {...props};

        if (size) {
            propsTemp.width = size
            propsTemp.height = size
        }

        if (color)
            propsTemp.stroke = color

        if (absoluteStrokeWidth)
            propsTemp.strokeWidth = (props.strokeWidth || 2) * 24 / (size || 24)

        iconCustom.props = propsTemp

        return iconCustom

    }

    const iconHandler = item => {

        let IconLucide = icons[item];

        return <IconLucide {...props}/>

    }

    // -----------------------------------------------------------------------------------------------------------------

    return iconsCustom.current[name] ? iconCustomHandler(name) : icons[name] ? iconHandler(name) : <></>;
}