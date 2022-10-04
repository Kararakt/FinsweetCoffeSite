<script lang="ts" setup>
import LocateMap from "../components/LocateMap.vue";
</script>
<template>
  <div class="bg-[#19161B]">
    <div class="container mx-auto grid grid-cols-2 main-div--OurStory py-36">
      <div class="flex flex-col gap-8">
        <h1
          class="font-bold font-['Playfair_Display'] text-[3rem] first-title--OurStory text-white leading-normal"
        >
          Our Story
        </h1>
        <div class="text-[#BBBBBB]">
          Through True Rich Attended does no end it his mother since<br />
          favourable real had half every him case in packages enquire we<br />
          up ecstatic.
        </div>
        <div class="grid grid-cols-2 gap-12 div-image--OurStory">
          <el-image
            src="/src/assets/first_pic_OurStory.png"
            class="pt-20 first-image--OurStory"
          />
          <el-image
            src="/src/assets/second_pic_OurStory.png"
            class="pb-20 first-image--OurStory"
          />
        </div>
      </div>
      <div class="flex flex-col items-end gap-6 text-div--OurStory">
        <h1
          class="text-[2rem] font-['Playfair_Display'] leading-normal font-bold text-white"
        >
          One of the best cafes in <span class="text-[#FFB577]">New York.</span>
        </h1>
        <div v-for="i in 2" class="text-[#BBBBBB]">
          Writing UX copies can be a little frustrating and confusing, and<br />
          sometimes we are unsure about how to get the right word. To<br />
          crack the code for the UX copies, we at Zeta Design wanted to build<br />
          a Figma plugin for the larger design community. The plugin is<br />
          called the Ghost UXWriter and has a set of UX copies cataloged<br />
          and categorized with a voice and tone variation ranging from<br />
          plain, casual to playful. The intention to build this Figma plugin<br />
          originated from our Medium blog post, ‘Designing voice and tone<br />
          for error messages.
        </div>
      </div>
    </div>
    <LocateMap class="container mx-auto" />
  </div>
</template>
