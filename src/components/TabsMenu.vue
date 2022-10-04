<script lang="ts" setup>
const firsttabs = [
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
  {
    id: 7,
    src: "/src/assets/Quafe_Brade_Menu.png",
    title: "Quafe Brade",
    cost: "$08.85",
  },
  {
    id: 8,
    src: "/src/assets/Dalgona_Cofee_Menu.png",
    title: "Dalgona Cofee",
    cost: "$4.85",
  },
  {
    id: 9,
    src: "/src/assets/Chowmin_Noodle_Menu.png",
    title: "Chowmin Noodle",
    cost: "$8.85",
  },
  {
    id: 10,
    src: "/src/assets/Coka_Cola_Menu.png",
    title: "Coka Cola",
    cost: "$7.85",
  },
  {
    id: 11,
    src: "/src/assets/Fruit_Salad_Menu.png",
    title: "Fruit Salad",
    cost: "$3.97",
  },
  {
    id: 12,
    src: "/src/assets/Cocktail_Menu.png",
    title: "Cocktail",
    cost: "$8.85",
  },
];
const secondtabs = [
  {
    id: 1,
    src: "/src/assets/Chicken_Burger_HomePage.png",
    title: "Chicken Burger",
    cost: "$8.85",
  },
  {
    id: 2,
    src: "/src/assets/French_Fries_HomePage.png",
    title: "French Fries",
    cost: "$7.85",
  },
  {
    id: 3,
    src: "/src/assets/Chinese_Soup_HomePage.png",
    title: "Chinese Soup",
    cost: "$8.85",
  },
  {
    id: 4,
    src: "/src/assets/Chowmin_Noodle_Menu.png",
    title: "Chowmin Noodle",
    cost: "$8.85",
  },
  {
    id: 5,
    src: "/src/assets/Coka_Cola_Menu.png",
    title: "Coka Cola",
    cost: "$7.85",
  },
];
const thirdtabs = [
  {
    id: 1,
    src: "/src/assets/Drp_Cofee_HomePage.png",
    title: "Drp Cofee",
    cost: "$08.85",
  },
  {
    id: 2,
    src: "/src/assets/Dalgona_Cofee_Menu.png",
    title: "Dalgona Cofee",
    cost: "$4.85",
  },
];
const fourthtabs = [
  {
    id: 1,
    src: "/src/assets/Cocktail_Menu.png",
    title: "Cocktail",
    cost: "$8.85",
  },
];
const fifthtabs = [
  {
    id: 1,
    src: "/src/assets/Choco_Cup_Cake_HomePage.png",
    title: "Choco Cup Cake",
    cost: "$4.85",
  },
  {
    id: 2,
    src: "/src/assets/Quafe_Brade_Menu.png",
    title: "Quafe Brade",
    cost: "$08.85",
  },
];
const sixthtabs = [
  {
    id: 1,
    src: "/src/assets/Sandwitch_HomePage.png",
    title: "Sandwitch",
    cost: "$3.97",
  },
  {
    id: 2,
    src: "/src/assets/Fruit_Salad_Menu.png",
    title: "Fruit Salad",
    cost: "$3.97",
  },
];
</script>
<template>
  <el-tabs type="border-card" class="pb-36 main-div-tabs--TabsMenu">
    <el-tab-pane
      ><template #label
        ><div class="font-bold text-[1.25rem]">All</div></template
      >
      <div class="grid grid-cols-3 gap-6 div-cards--TabsMenu">
        <div
          v-for="firsttab in firsttabs"
          :key="firsttab.id"
          class="first-card-div--Menu"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="firsttab.src" class="w-full h-auto" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ firsttab.title }}</h1>
              <span>{{ firsttab.cost }}</span>
            </div></el-card
          >
        </div>
      </div></el-tab-pane
    >
    <el-tab-pane
      ><template #label
        ><div class="font-bold text-[1.25rem]">Fast Food</div></template
      >
      <div class="grid grid-cols-3 gap-6 div-cards--TabsMenu">
        <div
          v-for="secondtab in secondtabs"
          :key="secondtab.id"
          class="first-card-div--Menu"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="secondtab.src" class="w-full h-auto" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ secondtab.title }}</h1>
              <span>{{ secondtab.cost }}</span>
            </div></el-card
          >
        </div>
      </div></el-tab-pane
    >
    <el-tab-pane
      ><template #label
        ><div class="font-bold text-[1.25rem]">Cofee</div></template
      >
      <div class="grid grid-cols-3 gap-6 div-cards--TabsMenu">
        <div
          v-for="thirdtab in thirdtabs"
          :key="thirdtab.id"
          class="first-card-div--Menu"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="thirdtab.src" class="w-full h-auto" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ thirdtab.title }}</h1>
              <span>{{ thirdtab.cost }}</span>
            </div></el-card
          >
        </div>
      </div></el-tab-pane
    >
    <el-tab-pane
      ><template #label
        ><div class="font-bold text-[1.25rem]">Cocktails</div></template
      >
      <div class="grid grid-cols-3 gap-6 div-cards--TabsMenu">
        <div
          v-for="fourthtab in fourthtabs"
          :key="fourthtab.id"
          class="first-card-div--Menu"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="fourthtab.src" class="w-full h-auto" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ fourthtab.title }}</h1>
              <span>{{ fourthtab.cost }}</span>
            </div></el-card
          >
        </div>
      </div></el-tab-pane
    >
    <el-tab-pane
      ><template #label
        ><div class="font-bold text-[1.25rem]">Quafe Cake</div></template
      >
      <div class="grid grid-cols-3 gap-6 div-cards--TabsMenu">
        <div
          v-for="fifthtab in fifthtabs"
          :key="fifthtab.id"
          class="first-card-div--Menu"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="fifthtab.src" class="w-full h-auto" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ fifthtab.title }}</h1>
              <span>{{ fifthtab.cost }}</span>
            </div></el-card
          >
        </div>
      </div></el-tab-pane
    >
    <el-tab-pane
      ><template #label
        ><div class="font-bold text-[1.25rem]">Snacks</div></template
      >
      <div class="grid grid-cols-3 gap-6 div-cards--TabsMenu">
        <div
          v-for="sixthtab in sixthtabs"
          :key="sixthtab.id"
          class="first-card-div--Menu"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="never"
            ><el-image :src="sixthtab.src" class="w-full h-auto" />
            <div class="p-4 flex justify-between text-white">
              <h1>{{ sixthtab.title }}</h1>
              <span>{{ sixthtab.cost }}</span>
            </div></el-card
          >
        </div>
      </div></el-tab-pane
    ></el-tabs
  >
</template>
