<script lang="ts" setup>
import TabsMenu from "../components/TabsMenu.vue";
import LocateMap from "../components/LocateMap.vue";
</script>
<template>
  <div class="bg-[#19161B]">
    <div class="container mx-auto py-36 first-div--Menu">
      <div class="flex justify-between items-end second-div--Menu">
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-6">
            <h1 class="text-[#FFB577]">OUR MENU</h1>
            <el-image src="/src/assets/line_HomePage.png" />
          </div>
          <h1
            class="font-bold font-['Playfair_Display'] text-[3rem] text-white leading-snug"
          >
            Discover<br />
            Our menu Chart
          </h1>
        </div>
        <div class="text-[#BBBBBB]">
          Through True Rich Attended does no end it his mother since<br />
          favourable real had half every him case in packages enquire<br />
          we up ecstatic.. Through True Rich Attended does no end it his<br />
          mother
        </div>
      </div>
    </div>
    <div class="container mx-auto div-tabs--Menu">
      <TabsMenu />
      <LocateMap />
    </div>
  </div>
</template>
