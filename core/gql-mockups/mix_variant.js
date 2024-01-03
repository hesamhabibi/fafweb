import {image_gallery_media_mockup} from "./media";
import {gql} from "@apollo/client";

export default gql`
        {
            title
            keys
            is_main_price
            price {
                price
                offer_price
                has_offer
            }
            details {
                count
                limit_min
                limit_max
            }
            has_media_gallery
            media_gallery ${image_gallery_media_mockup}
        }
`