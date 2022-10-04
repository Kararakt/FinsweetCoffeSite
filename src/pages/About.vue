<script lang="ts" setup>
import LocateMap from "../components/LocateMap.vue";
const items = [
  {
    id: 1,
    src: "/src/assets/first_logo_HomePage.png",
    title: "10+ People",
    secondtitle: "We are Small Team",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
  {
    id: 2,
    src: "/src/assets/first_logo_HomePage.png",
    title: "2014",
    secondtitle: "We are From",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
  {
    id: 3,
    src: "/src/assets/first_logo_HomePage.png",
    title: "200k",
    secondtitle: "We Served",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
];
const cards = [
  {
    id: 1,
    src: "/src/assets/line_About.png",
    data: "1998",
    title: "Milestone One",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
  {
    id: 2,
    src: "/src/assets/line_About.png",
    data: "2005",
    title: "Milestone Two",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
  {
    id: 3,
    src: "/src/assets/line_About.png",
    data: "2012",
    title: "Milestone Three",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
  {
    id: 4,
    src: "/src/assets/line_About.png",
    data: "2021",
    title: "Milestone Four",
    description:
      "Through True Rich Attended does no end it his mother since favourable.",
  },
];
</script>
<template>
  <div class="bg-[#19161B]">
    <div class="container mx-auto flex gap-12 first-div--About py-36">
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-6">
          <h1 class="text-[#FFB577]">WHAT WE ARE SERVING</h1>
          <el-image src="/src/assets/line_HomePage.png" />
        </div>
        <div
          class="font-['Playfair_Display'] fourth-title--About font-bold text-[3rem] text-white leading-tight"
        >
          We source sustainable &<br />
          line caught Foods
        </div>
        <div class="text-[#B8B8B8]">
          Edit this text to make it your own. To edit, simply click directly on
          the text to<br />
          start adding your own words. You can move the text by dragging and
          dropping the text anywhere on the page.
        </div>
        <div class="grid grid-cols-3 three-cards--About gap-4 py-10">
          <div v-for="item in items" :key="item.id" class="grid gap-4">
            <div class="flex items-center gap-4 text-[#C4E4EA]">
              <el-image :src="item.src" /><span class="text-2xl">{{
                item.title
              }}</span>
            </div>
            <h1 class="text-[#B8B8B8]">{{ item.secondtitle }}</h1>
            <p class="text-[#B8B8B8]">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-12">
        <el-image
          src="/src/assets/first_pic_About.png"
          class="pt-20 first-image--About"
        />
        <el-image
          src="/src/assets/second_pic_About.png"
          class="pb-20 first-image--About"
        />
      </div>
    </div>
    <div class="container mx-auto">
      <div class="relative h-full">
        <div
          class="absolute z-10 h-[37.5rem] w-[96rem] bg-text--About flex flex-col pl-20 gap-2 justify-center"
        >
          <h1
            class="font-bold text-[3rem] font-['Playfair_Display'] first-title--About leading-snug text-white"
          >
            One of the best<br />
            Cafes in <span class="text-[#FFB577]">New York</span>
          </h1>
          <div class="text-[#BBBBBB] text-image--About">
            Through True Rich Attended does no end it his mother<br />
            since favourable real had half every him case in<br />
            packages enquire we up ecstatic.. Through True Rich<br />
            Attended does no end it his mother
          </div>
        </div>
      </div>
      <img src="/src/assets/third_pic_About.png" class="second-image--About" />
    </div>
    <div class="container mx-auto bg--About px-20">
      <h1 class="text-4xl text-white py-16 second-title--About">Our History</h1>
      <hr class="border-hr--About" />
      <div class="grid grid-cols-4 gap-10 pb-16 div-four-cards--About">
        <div v-for="card in cards" :key="card.id" class="flex flex-col gap-4">
          <el-image :src="card.src" class="w-12 h-2 -mt-[0.3rem] line--About" />
          <h1 class="text-4xl text-white data-h1--About pt-6">
            {{ card.data }}
          </h1>
          <h2 class="text-white">{{ card.title }}</h2>
          <div class="text-[#BBBBBB]">{{ card.description }}</div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex justify-between py-36 second-div--About">
        <h1
          class="text-[3rem] font-bold third-title--About text-white font-['Playfair_Display'] leading-tight"
        >
          Things our company<br />
          stands for
        </h1>
        <div class="flex flex-col gap-4">
          <h1
            class="text-white font-bold font-['Playfair_Display'] text-4xl leading-normal"
          >
            Edit this text to make it your own. To<br />
            edit, simply click directly
          </h1>
          <div class="text-[#BBBBBB]">
            Writing UX copies can be a little frustrating and<br />
            confusing, and sometimes we are unsure about how to get the right
            word. To<br />
            crack the code for the UX copies, we at Zeta Design wanted to
            build<br />
            a Figma plugin for the larger design community. The plugin is<br />
            called the Ghost UXWriter and has a set of UX copies cataloged<br />
            and categorized with a voice and tone variation ranging from<br />
            plain, casual to playful. The intention to build this Figma
            plugin<br />
            originated from our Medium blog post, ‘Designing voice and tone<br />
            for error messages.
          </div>
        </div>
      </div>
    </div>
    <LocateMap class="container mx-auto" />
  </div>
</template>
