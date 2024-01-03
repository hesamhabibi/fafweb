import seo from "./seo";
import attribute_groups from "./attribute_groups";
import variants from "./variant";
import mix_variant from "./mix_variant";
import {image_gallery_media_mockup, image_media_mockup} from "./media";
import {comment_pagination_mockup} from "./comments";
import tag from "./tag";
import {category_label_mockup} from "./category";
import {brand_label_mockup} from "./brand";
import {gql} from "@apollo/client";

const product_detail_mockup = gql`
    {
        id
        title
        summary
        description
        main_features
        has_rating
        has_comment
        user_rate
        average_rate
        seo ${seo}
        attribute_groups ${attribute_groups}
        has_variant
        variant: variants ${variants}
        mix_variant ${mix_variant}
        media ${image_media_mockup}
        media_gallery ${image_gallery_media_mockup}
        tags ${tag}
        tag_group ${tag}
        comments_paginate (page: $commentPage, limit: $commentLimit) ${comment_pagination_mockup}
        category ${category_label_mockup}
        brand ${brand_label_mockup}
    }
`;

const product_card_mockup = gql`
    {
        id
        title
        has_rating
        has_comment
        user_rate
        average_rate
        price {
            price
            offer_price
            has_offer
        }
        details {
            warehouse
        }
        seo {
            url
        }
        category ${category_label_mockup}
        brand ${brand_label_mockup}
        mix_variant {
            title
            keys
        }
        attribute_groups ${attribute_groups}
        media ${image_media_mockup}
    }
`;

export {
  product_detail_mockup,
  product_card_mockup
}