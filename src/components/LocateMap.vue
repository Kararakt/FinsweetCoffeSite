<script lang="ts" setup></script>
<template>
  <div class="grid grid-cols-2 pb-36 first-div--LocateMap">
    <div class="flex flex-col justify-center bg--Map px-16 gap-6">
      <div class="div--OurBlogSection">
        <h1>Working Hour</h1>
        <span>Sunday to Saturday <br />09:00 AM to 11:00 PM </span>
      </div>
      <div class="div--OurBlogSection">
        <h1>Location</h1>
        <span
          >Street - 127, New York, <br />United States<br />
          546544
        </span>
      </div>
      <div class="div--OurBlogSection">
        <h1>Contact us</h1>
        <span>+123456789<br />hey@yourdomain.com</span>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12114.757448500093!2d-74.00104975876117!3d40.614676856514585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245198741cf0f%3A0x30c1d709a574e5f8!2z0JHQtdC90YHQvtC90YXQtdGA0YHRgiwg0JHRgNGD0LrQu9C40L0sINCd0YzRji3QmdC-0YDQuiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1664832892724!5m2!1sru!2sru"
      height="450"
      style="border: 0"
      :allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full map--LocateMap"
    ></iframe>
  </div>
</template>
