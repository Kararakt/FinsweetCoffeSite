<script lang="ts" setup>
import Map from "../components/Map.vue";
import LocateMap from "../components/LocateMap.vue";
const photos = [
  {
    id: 1,
    data: "21 Jun 2021",
    title: "Extra Thick Homemad Pizza Sauce",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    src: "/src/assets/card_pic_OurBlogSection.vue.png",
  },
  {
    id: 2,
    data: "21 Jun 2021",
    title: "The Best Way to Store Fresh Herbs",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    src: "/src/assets//second_card_pic_OurBlogSection.vue.png",
  },
  {
    id: 3,
    data: "21 Jun 2021",
    title: "5 ways to prepare porridge",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    src: "/src/assets/third_card_pic_OurBlogSection.vue.png",
  },
];
</script>
<template>
  <div class="container mx-auto">
    <h1
      class="font-['Playfair_Display'] font-bold text-[3rem] first-title--OurBlogSection pb-20 text-white"
    >
      Read Our Lastest Blog
    </h1>
    <div class="grid grid-cols-3 gap-10 pb-36 div-three-cards--OurBlogSection">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="div-card--OurBlogSection h-full"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="never"
          ><div class="p-10 flex flex-col gap-4 body-card--OurBlogSection">
            <h1 class="text-[#BBBBBB]">{{ photo.data }}</h1>
            <span
              class="text-3xl font-bold span-text--OurBlogSection text-white font-['Playfair_Display']"
              >{{ photo.title }}</span
            >
            <div class="text-[#BBBBBB]">
              {{ photo.description }}
            </div>
          </div>
          <el-image :src="photo.src" class="w-full"
        /></el-card>
      </div>
    </div>
    <LocateMap />
  </div>
</template>
