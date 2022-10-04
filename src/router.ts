import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import Menu from "../src/pages/Menu.vue"
import About from '../src/pages/About.vue'
import OurStory from "../src/pages/OurStory.vue"
import Blog from "../src/pages/Blog.vue"
import ContactUs from '../src/pages/ContactUs.vue'
import BlogInner from '../src/pages/BlogInner.vue'

const routes = [
  { path: "/", component: HomePage },
  { path: "/Menu", component: Menu },
  { path: "/AboutUs", component: About},
  { path: "/OurStory", component: OurStory},
  { path: "/Blog", component: Blog},
  { path: "/ContactUs", component: ContactUs},
  { path: "/BlogInner", component: BlogInner}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
