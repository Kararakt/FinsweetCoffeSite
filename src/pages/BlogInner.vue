<script lang="ts" setup>
import LocateMap from "../components/LocateMap.vue";
</script>
<template>
  <div class="bg-[#19161B]">
    <div
      class="container mx-auto flex flex-col items-center pt-36 main-div--BlogInner gap-10"
    >
      <div class="flex gap-3 items-center first-div--BlogInner">
        <el-image src="/src/assets/avatar_Blog.png" />
        <div class="flex gap-5 div-gap--BlogInner">
          <h1 class="text-white">Andrew Jonson</h1>
          <span class="text-[#BBBBBB]">Posted on 27th January 2021</span>
        </div>
      </div>
      <div
        class="text-white font-['Playfair_Display'] font-bold text-[3rem] first-title--BlogInner leading-normal text-center"
      >
        How to store Tomatoes (and Whether to<br />
        Refrigerate Them)
      </div>
    </div>
    <div class="container mx-auto">
      <el-image
        src="/src/assets/Featured_Blog_1_pic_Blog.png"
        class="w-full h-[50rem] py-20 first-image--BlogInner"
      />
    </div>
    <div
      class="container mx-auto flex flex-col pb-36 items-center gap-6 second-div--BlogInner"
    >
      <h1
        class="text-4xl font-['Playfair_Display'] text-white leading-normal text-center font-bold"
      >
        Edit this text to make it your own. To edit, simply click<br />
        directly on the text.
      </h1>
      <div class="text-[#BBBBBB] flex flex-col gap-2 div-gap--BlogInner">
        <div>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to<br />
          get the right word. To crack the code for the UX copies, we at Zeta
          Design wanted to build a Figma plugin<br />
          for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies<br />
          cataloged and categorized with a voice and tone variation ranging from
          plain, casual to playful. The<br />
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for<br />
          error messages.
        </div>
        <div v-for="i in 2">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to<br />
          get the right word. To crack the code for the UX copies, we at Zeta
          Design wanted to build a Figma plugin<br />
          for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies<br />
          cataloged.
        </div>
        <div>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to<br />
          get the right word. To crack the code for the UX copies, we at Zeta
          Design wanted to build a Figma plugin<br />
          for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies<br />
          cataloged and categorized with a voice and tone variation ranging from
          plain, casual to playful. The<br />
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice.
        </div>
        <h4
          class="text-white font-['Playfair_Display'] font-bold text-left py-6 second-title--BlogInner"
        >
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h4>
        <div>
          Step 1: Download the plugin from Figma community, search Ghost
          UXWriter<br />
          Step 2: Open the plugin on your artboard<br />
          Step 3: Search for your copy or look through the different categories
          of the copies<br />
          Step 4: Select the type of error you are looking for. You will get
          three different copies for each error<br />
          Step 5: Tap on the cards to insert text in your frames<br />
          And you are all geared up to make your UX copies more fun and exciting
          😎
        </div>
      </div>
      <div class="flex flex-col gap-6 items-center">
        <h1
          class="text-white font-bold leading-normal text-center text-4xl pt-4 text-for-padding--BlogInner"
        >
          Your own words. You can move the text by dragging and<br />
          dropping the text anywhere on the page.
        </h1>
        <div class="text-[#BBBBBB]">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to<br />
          get the right word. To crack the code for the UX copies, we at Zeta
          Design wanted to build a Figma plugin<br />
          for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies<br />
          cataloged and categorized with a voice and tone variation ranging from
          plain, casual to playful. The<br />
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for<br />
          error messages.
        </div>
      </div>
    </div>
    <LocateMap class="container mx-auto" />
  </div>
</template>
