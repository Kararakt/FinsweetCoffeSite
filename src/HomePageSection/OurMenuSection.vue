<script lang="ts" setup>
const cards = [
  {
    id: 1,
    src: "/src/assets/Drp_Cofee_HomePage.png",
    title: "Drp Cofee",
    cost: "$08.85",
  },
  {
    id: 2,
    src: "/src/assets/Choco_Cup_Cake_HomePage.png",
    title: "Choco Cup Cake",
    cost: "$4.85",
  },
  {
    id: 3,
    src: "/src/assets/Chicken_Burger_HomePage.png",
    title: "Chicken Burger",
    cost: "$8.85",
  },
  {
    id: 4,
    src: "/src/assets/French_Fries_HomePage.png",
    title: "French Fries",
    cost: "$7.85",
  },
  {
    id: 5,
    src: "/src/assets/Sandwitch_HomePage.png",
    title: "Sandwitch",
    cost: "$3.97",
  },
  {
    id: 6,
    src: "/src/assets/Chinese_Soup_HomePage.png",
    title: "Chinese Soup",
    cost: "$8.85",
  },
];
</script>
<template>
  <div>
    <div
      class="container mx-auto flex flex-col gap-10 pb-36 div-padding--OurMenuSection"
    >
      <div class="flex items-center gap-6 div-h1-line--OurMenuSection">
        <h1 class="text-[#FFB577]">OUR MENU</h1>
        <el-image src="/src/assets/line_HomePage.png" />
      </div>
      <div class="flex justify-between first-div--OurMenuSection">
        <h1
          class="text-[3rem] text-white leading-normal font-bold first-title--OurMenuSection font-['Playfair_Display']"
        >
          Discover our menu<br />
          chart
        </h1>
        <div class="text-[#BBBBBB] leading-relaxed">
          Through True Rich Attended does no end it his mother since<br />
          favourable real had half every him case in packages enquire<br />
          we up ecstatic.. Through True Rich Attended does no end it his<br />
          mother
        </div>
      </div>
      <h1 class="font-bold text-[#C4E4EA] text-padding--OurMenuSection">
        Most Popular Picks
      </h1>
      <div class="grid grid-cols-3 gap-6 py-10 div-six-cards--OurMenuSection">
        <div v-for="card in cards" :key="card.id" class="div-card--HomePage">
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="card.src" class="w-full" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ card.title }}</h1>
              <span>{{ card.cost }}</span>
            </div></el-card
          >
        </div>
      </div>
      <div class="flex justify-center items-center">
        <button
          class="text-[#19161B] btn--HomePage flex items-center gap-4"
          @click="$router.push('/Menu')"
        >
          View Menu<el-icon :size="25"><Right /></el-icon>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 pb-36 second-div--OurMenuSection">
      <div
        class="flex flex-col gap-10 text-white justify-center div-bg--HomePage px-16"
      >
        <h1 class="font-['Playfair_Display'] font-bold text-7xl">“</h1>
        <div class="text-2xl">
          Edit this text to make it your own.<br />
          To edit, simply click directly on the text to start adding your own
          words.<br />
          You can move the text by dragging and dropping the text
        </div>
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-2">
            <h1 class="text-lg">Joheny Andro</h1>
            <h4 class="text-[#BBBBBB]">Bhubaneswar, Odisha</h4>
          </div>
          <el-image src="/src/assets/avatar_HomePage.png" />
        </div>
      </div>
      <el-image
        src="/src/assets/pic_for_video_HomePage.png"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>
