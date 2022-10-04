<script setup lang="ts">
import OurMenuSection from "../HomePageSection/OurMenuSection.vue";
import OurBlogSection from "../HomePageSection/OurBlogSection.vue";
import ServicesCards from "../components/ServicesCards.vue";
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
    src: "/src/assets/Quafe_Cake_logo_HomePage.png",
    title: "Quafe Cake",
    description:
      "Through True Rich Attended no end it his mother since favourable real had half every him.",
  },
  {
    id: 2,
    src: "/src/assets/Cocktails_HomePage.png",
    title: "Cocktails",
    description:
      "Through True Rich Attended no end it his mother since favourable real had half every him.",
  },
  {
    id: 3,
    src: "/src/assets/Cofee_logo_HomePage.png",
    title: "Cofee",
    description:
      "Through True Rich Attended no end it his mother since favourable real had half every him.",
  },
  {
    id: 4,
    src: "/src/assets/Grill_logo_HomePage.png",
    title: "Grill",
    description:
      "Through True Rich Attended no end it his mother since favourable real had half every him.",
  },
  {
    id: 5,
    src: "/src/assets/Fast Food_HomePage.png",
    title: "Fast Food",
    description:
      "Through True Rich Attended no end it his mother since favourable real had half every him.",
  },
  {
    id: 6,
    src: "/src/assets/Snacks_logo_HomePage.png",
    title: "Snacks",
    description:
      "Through True Rich Attended no end it his mother since favourable real had half every him.",
  },
];
</script>

<template>
  <div class="bg-[#19161B]">
    <div
      class="container mx-auto grid grid-cols-2 items-center py-36 second-div--HomePage"
    >
      <div class="flex flex-col gap-8">
        <h1
          class="text-white font-bold font-['Playfair_Display'] text-6xl leading-tight first-title--HomePage"
        >
          We serve high quality<br />
          foods of all kinds.
        </h1>
        <div class="text-[#B8B8B8]">
          Edit this text to make it your own. To edit, simply click directly on
          the text to<br />
          start adding your own words. You can move the text.
        </div>
        <div>
          <button
            @click="$router.push('/Menu')"
            class="text-[#19161B] btn--HomePage flex items-center gap-4"
          >
            View Menu<el-icon :size="25"><Right /></el-icon>
          </button>
        </div>
        <div class="flex flex-col gap-4 first-div--HomePage">
          <div>
            <h1>Opening Times</h1>
            <span>Sunday to Saturday | 09:00 AM to 11:00 PM</span>
          </div>
          <div>
            <h1>Location</h1>
            <span>Master canteen, BBSR , Odisha 752054</span>
          </div>
          <div>
            <h1>Call us</h1>
            <span>+9776462441</span>
          </div>
        </div>
      </div>
      <el-image
        src="/src/assets/first_coffe_HomePage.png"
        class="h-auto w-auto"
      />
    </div>
    <div class="container mx-auto flex gap-12 second-div--HomePage pb-20">
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-6">
          <h1 class="text-[#FFB577]">WHAT WE ARE SERVING</h1>
          <el-image src="/src/assets/line_HomePage.png" />
        </div>
        <div
          class="font-['Playfair_Display'] font-bold text-[3rem] text-white leading-tight first-title--HomePage"
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
        <div class="grid grid-cols-3 gap-4 py-10 div-cards--HomePage">
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
        <div>
          <button
            class="text-[#19161B] btn--HomePage flex items-center gap-4"
            @click="$router.push('/Menu')"
          >
            View Menu<el-icon :size="25"><Right /></el-icon>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-12 two-image--HomePage">
        <el-image
          src="/src/assets/first_restaurant_HomePage.png"
          class="pt-20 first-image--HomePage"
        />
        <el-image
          src="/src/assets/second_restaurant_HomePage.png"
          class="pb-20 first-image--HomePage"
        />
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-10">
      <div class="flex items-center gap-6 div-h1-line--HomePage">
        <h1 class="text-[#FFB577] whitespace-nowrap">WHAT WE ARE SERVING</h1>
        <el-image src="/src/assets/line_HomePage.png" />
      </div>
      <div class="flex justify-between div-p-span--HomePage">
        <p
          class="text-[3rem] font-['Playfair_Display'] text-white first-title--HomePage leading-tight"
        >
          We all have to eat, so why not<br />
          do it beautifully?
        </p>
        <span class="text-[#B8B8B8] leading-normal"
          >Through True Rich Attended does no end it his mother since<br />
          favourable real had half every him case in packages enquire we up<br />
          ecstatic.. Through True Rich Attended does no end it his mother</span
        >
      </div>
      <div
        class="container mx-auto grid grid-cols-3 gap-4 pb-20 cards--HomePage"
      >
        <div v-for="card in cards" :key="card.id">
          <ServicesCards
            :src="card.src"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </div>
    <OurMenuSection />
    <OurBlogSection />
  </div>
</template>
