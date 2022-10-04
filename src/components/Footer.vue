<script lang="ts" setup></script>
<template>
  <div class="bg--Footer">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col items-center gap-8">
        <h1 class="text-xl text-[#FFB577]">{FinsweetCoffe</h1>
        <div class="div--Footer">
          <ul class="text-white flex gap-10 second-div--Footer">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/Menu">Menu</router-link></li>
            <li><router-link to="/AboutUs">About Us</router-link></li>
            <li><router-link to="/OurStory">Our Story</router-link></li>
            <li><router-link to="/Blog">Blog</router-link></li>
            <li><router-link to="/ContactUs">Contact Us</router-link></li>
          </ul>
        </div>
      </div>
      <hr />
      <div
        class="container mx-auto flex justify-between items-center third-div--Footer pt-6 pb-11"
      >
        <h1 class="text-[#BBBBBB]">© 2021 Finsweet | All rights reserved.</h1>
        <div class="flex gap-6 div-icon--Footer pr-36">
          <a target="_blank" href="https://www.facebook.com/"
            ><font-awesome-icon
              icon="fa-brands fa-facebook"
              class="hover:text-[#385899]"
          /></a>
          <a target="_blank" href="https://twitter.com/">
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              class="hover:text-[#1d9bf0]"
          /></a>
          <a target="_blank" href="https://www.instagram.com/"
            ><font-awesome-icon
              icon="fa-brands fa-instagram"
              class="hover:text-[#ff00d4]"
          /></a>
          <a target="_blank" href="https://www.invisionapp.com/"
            ><font-awesome-icon
              icon="fa-brands fa-invision"
              class="hover:text-[#ff0066]"
          /></a>
        </div>
        <span
          class="text-white flex items-center cursor-pointer gap-4"
          @click="$router.push('/ContactUs')"
          >Contact Us<el-icon :size="25"
            ><Right class="text-[#FFB577]" /></el-icon
        ></span>
      </div>
    </div>
  </div>
</template>
