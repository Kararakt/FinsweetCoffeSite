<script lang="ts" setup>
import LocateMap from "../components/LocateMap.vue";
const photos = [
  {
    id: 1,
    src: "/src/assets/Featured_Blog_2_pic_Blog.png",
    title: "You can move the text by dragging and dropping the text",
    description:
      "Writing UX copies can be a little frustrating and confusing, and sometimes",
  },
  {
    id: 2,
    src: "/src/assets/Featured_Blog_3_pic_Blog.png",
    title: "Edit this text to make it your own. To edit, simply",
    description:
      "Writing UX copies can be a little frustrating and confusing, and sometimes",
  },
  {
    id: 3,
    src: "/src/assets/Featured_Blog_4_pic_Blog.png",
    title: "You can move the text by dragging and dropping the text",
    description:
      "Writing UX copies can be a little frustrating and confusing, and sometimes",
  },
];
const items = [
  {
    id: 1,
    src: "/src/assets/Articles_1_Blog.png",
    avatar: "/src/assets/avatar_Blog.png",
    FIO: "Andrew Jonson",
    data: "27th January 2021",
    title: "A guide to Thai Curry",
  },
  {
    id: 2,
    src: "/src/assets/Articles_2_Blog.png",
    avatar: "/src/assets/avatar_Blog.png",
    FIO: "Andrew Jonson",
    data: "27th January 2021",
    title: "The best guacamole recipe with",
    secondtitle: "only 4 ingredients",
  },
  {
    id: 3,
    src: "/src/assets/Articles_3_Blog.png",
    avatar: "/src/assets/avatar_Blog.png",
    FIO: "Andrew Jonson",
    data: "27th January 2021",
    title: "How to store Tomatoes (and ",
    secondtitle: "Whether to Refrigerate Them)",
  },
  {
    id: 4,
    src: "/src/assets/Articles_4_Blog.png",
    avatar: "/src/assets/avatar_Blog.png",
    FIO: "Andrew Jonson",
    data: "27th January 2021",
    title: "The Absolute Best Way to Cook",
    second: "French Fries",
  },
];
</script>
<template>
  <div class="bg-[#19161B]">
    <div class="container mx-auto flex flex-col gap-5 main-div--Blog py-36">
      <h1
        class="text-bold font-['Playfair_Display'] leading-normal text-[3rem] first-title--Blog text-center text-white pb-10"
      >
        Featured Blogs
      </h1>
      <div class="grid grid-cols-2 first-div--Blog gap-6">
        <div class="relative h-full">
          <span class="absolute z-20 first-btn--Blog">Trending</span>
          <div
            class="absolute z-10 flex flex-col gap-8 justify-end h-[39rem] px-16 pb-12 w-[47.25rem] bg-text--Blog"
          >
            <h1
              class="text-[3rem] font-bold text-white second-title--Blog leading-normal"
            >
              A guide to Thai<br />
              Curry
            </h1>
            <div class="flex justify-between second-div--Blog">
              <div class="flex items-center gap-4">
                <el-image
                  src="/src/assets/avatar_Blog.png"
                  class="avatar-image--Blog"
                />
                <div class="flex flex-col gap-2">
                  <h1 class="text-white">Andrew Jonson</h1>
                  <span class="text-[#BBBBBB]">27th January 2021</span>
                </div>
              </div>
              <span
                class="text-[#BBBBBB] flex items-center gap-3 cursor-pointer"
                @click="$router.push('/BlogInner')"
                >Read More<el-icon :size="25"><Right /></el-icon
              ></span>
            </div>
          </div>

          <el-image
            src="/src/assets/Featured_Blog_1_pic_Blog.png"
            class="h-full first-image--Blog"
          />
        </div>
        <div class="flex flex-col gap-6">
          <div
            v-for="photo in photos"
            :key="photo.id"
            class="flex gap-6 third-div--Blog"
          >
            <el-image :src="photo.src" class="h-[12rem] second-image--Blog" />
            <div class="flex flex-col justify-center gap-4 text-space--Blog">
              <h1 class="text-[1.25rem] text-white font-bold">
                {{ photo.title }}
              </h1>
              <span class="text-[#BBBBBB]">{{ photo.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-4 pb-36 div-padding--Blog">
      <h1
        class="font-bold text-[3rem] font-['Playfair_Display'] leading-normal text-white text-center pb-20 third-title--Blog"
      >
        All Articles
      </h1>
      <div class="grid grid-cols-2 gap-10 div-four-cards--Blog">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex gap-12 main-cards--Blog"
        >
          <el-image
            :src="item.src"
            class="w-[20rem] h-[25rem] third-image--Blog"
          />
          <div class="flex flex-col justify-center gap-6 fourth-div--Blog">
            <div class="flex gap-4 items-center avatar-FIO-Data--Blog">
              <el-image :src="item.avatar" />
              <div class="flex flex-col gap-2">
                <h1 class="text-white">{{ item.FIO }}</h1>
                <span class="text-[#BBBBBB]">{{ item.data }}</span>
              </div>
            </div>
            <div class="text-white flex flex-col gap-2 text-[1.25rem]">
              <h1>{{ item.title }}</h1>
              <h1>{{ item.secondtitle }}</h1>
            </div>
            <span
              class="text-[#BBBBBB] flex items-center gap-3 cursor-pointer"
              @click="$router.push('/BlogInner')"
              >Read More<el-icon :size="25"><Right /></el-icon
            ></span>
          </div>
        </div>
      </div>
    </div>
    <LocateMap class="container mx-auto" />
  </div>
</template>
