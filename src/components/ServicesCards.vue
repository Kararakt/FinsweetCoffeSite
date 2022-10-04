<script lang="ts" setup>
const props = defineProps({
  src: String,
  title: String,
  description: String,
});
</script>
<template>
  <div class="bg-card--HomePage">
    <div class="py-16 px-10 flex flex-col gap-6 div-card--HomePage">
      <el-image :src="props.src" class="h-[3rem] w-[3rem]" />
      <h1 class="text-3xl text-white">{{ props.title }}</h1>
      <span class="text-[#B8B8B8]">{{ props.description }}</span>
    </div>
  </div>
</template>
