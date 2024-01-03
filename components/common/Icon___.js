import {useState} from "react";
import { renderToString } from 'react-dom/server';

import useLayoutEffectIsomorphic from "../../hooks/useLayoutEffectIsomorphic";

import {icons, createLucideIcon} from "lucide-react";

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

export default function Icon({name, ...props}) {

    const [iconsAll, setIconsAll] = useState({...icons})

    useLayoutEffectIsomorphic(() => {

        const handleComponentToDataArray = component => {

            const xml = new DOMParser().parseFromString(renderToString(component), 'text/xml')

            return [...xml.querySelectorAll('svg *')].map(item => {

                let attributesTemp = {};

                [...item.attributes].forEach(({nodeName, value}) => attributesTemp[nodeName] = value)

                return [item.nodeName, attributesTemp]

            })

        }

        const iconsCustom = {
            Home: createLucideIcon('Home', handleComponentToDataArray(<ImgHome/>)),
            Category: createLucideIcon('Category', handleComponentToDataArray(<ImgCategory/>)),
            ShoppingCart: createLucideIcon('ShoppingCart', handleComponentToDataArray(<ImgShoppingCart/>)),
            User: createLucideIcon('User', handleComponentToDataArray(<ImgUser/>)),
            Phone: createLucideIcon('Phone', handleComponentToDataArray(<ImgPhone/>)),
            SupportCenter: createLucideIcon('SupportCenter', handleComponentToDataArray(<ImgSupportCenter/>)),
            Telegram: createLucideIcon('Telegram', handleComponentToDataArray(<ImgTelegram/>)),
            Facebook: createLucideIcon('Facebook', handleComponentToDataArray(<ImgFacebook/>)),
            Instagram: createLucideIcon('Instagram', handleComponentToDataArray(<ImgInstagram/>)),
            Linkedin: createLucideIcon('Linkedin', handleComponentToDataArray(<ImgLinkedin/>)),
            Aparat: createLucideIcon('Aparat', handleComponentToDataArray(<ImgAparat/>)),
            MoveRightSm: createLucideIcon('MoveRightSm', handleComponentToDataArray(<ImgMoveRightSm/>)),
            ChevronRightSm: createLucideIcon('ChevronRightSm', handleComponentToDataArray(<ImgChevronRightSm/>)),
            Feedback: createLucideIcon('Feedback', handleComponentToDataArray(<ImgFeedback/>)),
            // ---------------------------------------------------------------------------------------------------- fill
            HomeFill: createLucideIcon('HomeFill', handleComponentToDataArray(<ImgHomeFill/>)),
            CategoryFill: createLucideIcon('CategoryFill', handleComponentToDataArray(<ImgCategoryFill/>)),
            ShoppingCartFill: createLucideIcon('ShoppingCartFill', handleComponentToDataArray(<ImgShoppingCartFill/>)),
            UserFill: createLucideIcon('UserFill', handleComponentToDataArray(<ImgUserFill/>)),
            SearchFill: createLucideIcon('SearchFill', handleComponentToDataArray(<ImgSearchFill/>)),
        }

        setIconsAll(iconsAll => ({...iconsAll, ...iconsCustom}))

    }, [])

    const Icon = iconsAll[name];

    // -----------------------------------------------------------------------------------------------------------------

    return iconsAll[name] ? <Icon {...props}/> : <></>;
}