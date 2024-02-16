import "@/assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import MainLayout from "@/components/MainLayout.vue";
import UserPost from "@/components/UserPost.vue";
import AppBar from "@/components/AppBar.vue";
import IconBase from "@/components/IconBase.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import UserComment from "@/components/UserComment.vue";

const app = createApp(App);

app
  .component("MainLayout", MainLayout)
  .component("UserPost", UserPost)
  .component("AppBar", AppBar)
  .component("IconBase", IconBase)
  .component("UserAvatar", UserAvatar)
  .component("UserComment", UserComment);

app.use(createPinia());
app.use(router);

app.mount("#app");
