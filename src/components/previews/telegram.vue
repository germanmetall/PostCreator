<template>

  <head>
    <title>Telegram Preview</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    >
    <meta
      name="format-detection"
      content="telephone=no"
    >
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    >
    <meta
      name="MobileOptimized"
      content="176"
    >
    <meta
      name="HandheldFriendly"
      content="True"
    >

    <link
      rel="icon"
      type="image/svg+xml"
      href="https://telegram.org/img/website_icon.svg?4"
    >
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://telegram.org/img/apple-touch-icon.png"
    >
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://telegram.org/img/favicon-32x32.png"
    >
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://telegram.org/img/favicon-16x16.png"
    >
    <link
      rel="alternate icon"
      href="https://telegram.org/img/favicon.ico"
      type="image/x-icon"
    >
    <link
      href="https://telegram.org/css/font-roboto.css?1"
      rel="stylesheet"
      type="text/css"
    >
    <link
      href="https://telegram.org/css/widget-frame.css?67"
      rel="stylesheet"
      media="screen"
    >
  </head>

  <body
    class="widget_frame_base tgme_widget body_widget_post emoji_image dark"
    style="margin-top: 36px;"
    v-if="store.previewObject"
  >
    <div
      class="tgme_widget_message text_not_supported_wrap js-widget_message"
      :data-post="`${store.previewObject.channelId}/${store.previewObject.postId}`"
      :data-post-id="store.previewObject.postId"
    >
      <div class="tgme_widget_message_user">
        <a :href="`https://t.me/${store.previewObject.channelId}`">
          <i
            class="tgme_widget_message_user_photo bgcolor4"
            data-content="С"
          >
            <img
              :src="store.previewObject.channelIcon"
              style="object-fit: cover;"
            >
          </i>
        </a>
      </div>
      <div class="tgme_widget_message_bubble">
        <a
          class="tgme_widget_message_bubble_logo"
          href="https://core.telegram.org/widgets"
        ></a>
        <i class="tgme_widget_message_bubble_tail">
          <svg
            class="bubble_icon"
            width="9px"
            height="20px"
            viewBox="0 0 9 20"
          >
            <g fill="none">
              <path
                class="background"
                fill="#ffffff"
                d="M8,1 L9,1 L9,20 L8,20 L8,18 C7.807,15.161 7.124,12.233 5.950,9.218 C5.046,6.893 3.504,4.733 1.325,2.738 L1.325,2.738 C0.917,2.365 0.89,1.732 1.263,1.325 C1.452,1.118 1.72,1 2,1 L8,1 Z"
              ></path>
              <path
                class="border_1x"
                fill="#d7e3ec"
                d="M9,1 L2,1 C1.72,1 1.452,1.118 1.263,1.325 C0.89,1.732 0.917,2.365 1.325,2.738 C3.504,4.733 5.046,6.893 5.95,9.218 C7.124,12.233 7.807,15.161 8,18 L8,20 L9,20 L9,1 Z M2,0 L9,0 L9,20 L7,20 L7,20 L7.002,18.068 C6.816,15.333 6.156,12.504 5.018,9.58 C4.172,7.406 2.72,5.371 0.649,3.475 C-0.165,2.729 -0.221,1.464 0.525,0.649 C0.904,0.236 1.439,0 2,0 Z"
              ></path>
              <path
                class="border_2x"
                d="M9,1 L2,1 C1.72,1 1.452,1.118 1.263,1.325 C0.89,1.732 0.917,2.365 1.325,2.738 C3.504,4.733 5.046,6.893 5.95,9.218 C7.124,12.233 7.807,15.161 8,18 L8,20 L9,20 L9,1 Z M2,0.5 L9,0.5 L9,20 L7.5,20 L7.5,20 L7.501,18.034 C7.312,15.247 6.64,12.369 5.484,9.399 C4.609,7.15 3.112,5.052 0.987,3.106 C0.376,2.547 0.334,1.598 0.894,0.987 C1.178,0.677 1.579,0.5 2,0.5 Z"
              ></path>
              <path
                class="border_3x"
                d="M9,1 L2,1 C1.72,1 1.452,1.118 1.263,1.325 C0.89,1.732 0.917,2.365 1.325,2.738 C3.504,4.733 5.046,6.893 5.95,9.218 C7.124,12.233 7.807,15.161 8,18 L8,20 L9,20 L9,1 Z M2,0.667 L9,0.667 L9,20 L7.667,20 L7.667,20 L7.668,18.023 C7.477,15.218 6.802,12.324 5.64,9.338 C4.755,7.064 3.243,4.946 1.1,2.983 C0.557,2.486 0.52,1.643 1.017,1.1 C1.269,0.824 1.626,0.667 2,0.667 Z"
              ></path>
            </g>
          </svg>
        </i>
        <div class="tgme_widget_message_author accent_color">
          <a
            class="tgme_widget_message_owner_name"
            :href="`https://t.me/${store.previewObject.channelId}`"
          ><span dir="auto">{{ store.previewObject.channelName }}</span></a>
        </div>


        <template v-if="store.previewObject.images?.length == 1">
          <div
            class="tgme_widget_message_photo_wrap"
            style="width: 368px; max-width: 500px;"
            :style="{ backgroundImage: `url(${store.previewObject.images[0]})` }"
          >
            <div
              style="
                position: absolute;
                left: -30px;
                right: -30px;
                top: -30px;
                bottom: -30px;
                background: no-repeat center;
                background-size: cover;
                -webkit-filter: blur(15px);
                filter: blur(15px);
                z-index: 1;
                max-width: 500px;
              "
              :style="{ backgroundImage: `url(${store.previewObject.images[0]})` }"
            ></div>
            <div
              class="tgme_widget_message_photo"
              style="width:68.5%;padding-top:133.33333333333%;max-width: 500px;"
            ></div>
            <div style="
              position: absolute;
              left: -1px;
              right: -1px;
              top: -1px;
              bottom: -1px;
              background: #fff;
              opacity: .3;
              z-index: 1;
              max-width: 500px;
            "></div>
          </div>
        </template>
        <template v-if="store.previewObject.images?.length == 2"></template>
        <template v-if="store.previewObject.images?.length == 3"></template>
        <template v-if="store.previewObject.images?.length == 4"></template>
        <template v-if="store.previewObject.images?.length == 5"></template>
        <template v-if="store.previewObject.images?.length == 6"></template>
        <template v-if="store.previewObject.images?.length == 7"></template>
        <template v-if="store.previewObject.images?.length == 8"></template>
        <template v-if="store.previewObject.images?.length == 9"></template>

        <div
          class="tgme_widget_message_text js-message_text"
          dir="auto"
          v-html="store.previewObject.text"
        ></div>

        <div class="tgme_widget_message_footer js-message_footer">
          <div class="tgme_widget_message_link accent_color">
            <a
              :href="`https://t.me/${store.previewObject.channelId}/${store.previewObject.postId}`"
              class="link_anchor flex_ellipsis"
            >
              <span class="ellipsis">
                t.me/{{ store.previewObject.channelId }}
              </span>/{{ store.previewObject.postId }}
            </a>
          </div>
          <div class="tgme_widget_message_info js-message_info">
            <span class="tgme_widget_message_meta">
              <a
                class="tgme_widget_message_date"
                :href="`https://t.me/${store.previewObject.channelId}`"
              >
                <time
                  :datetime="store.previewObject.dateTime"
                  class="datetime"
                >{{ store.previewObject.dateTime }}</time>
              </a>
            </span>
          </div>
        </div>
      </div>

    </div>
  </body>
</template>

<script setup>
import { usePreviewsStore } from '@/stores/previews';

let store = usePreviewsStore()

console.log(store.previewType, store.previewObject)
</script>