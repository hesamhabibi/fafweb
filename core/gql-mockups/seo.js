import {audio_media_detail_mockup, image_detail_media_mockup, video_media_detail_mockup} from "./media";
import {gql} from "@apollo/client";
export default gql`
      {
        lang
        url
        url_status
        keywords
        title
        og_title
        twitter_title
        description
        og_description
        twitter_description
        redirect_301
        redirect_302
        redirect_404
        redirect_410
        robots_main
        robots_index
        robots_follow
        robots
        max_snippet
        max_image_preview
        max_video_preview
        unavailable_after
        object_types
        music_song_album
        music_song_duration
        music_song_album_disc
        music_song_album_track
        music_song_musician
        music_album_song
        music_album_song_disc
        music_album_song_track
        music_album_musician
        music_album_release_date
        music_playlist_song
        music_playlist_song_disc
        music_playlist_song_track
        music_playlist_creator
        music_radio_station_creator
        video_movie_actor
        video_movie_actor_role
        video_movie_director
        video_movie_writer
        video_movie_duration
        video_movie_release_date
        video_movie_tag
        video_episode_actor
        video_episode_actor_role
        video_episode_director
        video_episode_writer
        video_episode_duration
        video_episode_release_date
        video_episode_tag
        video_episode_series
        video_tv_show
        article_published_time
        article_modified_time
        article_expiration_time
        article_author
        article_section
        article_tag
        book_author
        book_isbn
        book_release_date
        book_tag
        profile_first_name
        profile_last_name
        profile_username
        profile_gender
        website
        product_plural_title
        product_category
        product_price_amount
        product_sale_price_amount
        product_original_price_amount
        product_price_currency
        product_og_availability
        product_availability
        link
        og_url
        twitter_url
        canonical_url
        og_img ${image_detail_media_mockup}
        twitter_img ${image_detail_media_mockup}
        rss_img ${image_detail_media_mockup}
        rss_img_content
        og_video ${video_media_detail_mockup}
        twitter_video ${video_media_detail_mockup}
        twitter_card
        twitter_player
        twitter_player_width
        twitter_player_height
        og_audio ${audio_media_detail_mockup}
      }
`