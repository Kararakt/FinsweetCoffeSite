<script lang="ts" setup>
function Active() {
  document.getElementById("header")!.classList.toggle("active");
  document.getElementById("menu")!.classList.toggle("active");
}

document.onclick = function (e: any) {
  if (e.target.id !== "header" && e.target.id !== "menu") {
    document.getElementById("header")!.classList.remove("active");
    document.getElementById("menu")!.classList.remove("active");
  }
};
</script>
<template>
  <div class="bg-[#19161B]">
    <div class="container mx-auto main-div--Footer flex items-end gap-12 p-4">
      <h1 class="text-xl text-[#FFB577]">{FinsweetCoffe</h1>
      <div id="menu" @click="Active()">
        <ul class="text-white flex gap-10 whitespace-nowrap">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/Menu">Menu</router-link></li>
          <li><router-link to="/AboutUs">About Us</router-link></li>
          <li><router-link to="/OurStory">Our Story</router-link></li>
          <li><router-link to="/Blog">Blog</router-link></li>
          <li><router-link to="/ContactUs">Contact Us</router-link></li>
        </ul>
      </div>
      <div id="header" @click="Active()"></div>
    </div>
  </div>
</template>
