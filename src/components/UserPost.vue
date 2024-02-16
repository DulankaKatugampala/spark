<template>
  <div class="contentCard p-12">
    <!-- 
      card header
     -->
    <div class="mb-10">
      <div class="flex --row --a-center gap-x-10">
        <UserAvatar md />
        <div class="flex --column --j-center">
          <h3 class="font --body --bold">DulankaKatu</h3>
          <p class="font --smaller --light">Posted on 2024 Jan 28 at 16.30</p>
        </div>
      </div>
      <!-- <div class="contentCard__header--right">
        <button>Follow</button>
      </div> -->
    </div>

    <!-- 
      card content
     -->
    <div class="contentCard__content">
      <img
        class="rounded"
        src="https://images.unsplash.com/photo-1706361635623-6606c945503e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>

    <!-- 
      card actions
     -->
    <div class="mt-20 mb-20 flex --row --a-center">
      <button class="flex --row --a-center mr-28">
        <IconBase icon="heart" width="24px" height="24px" class="color-black" />
        <span class="ml-8">20</span>
      </button>
      <button class="flex --row --a-center">
        <IconBase
          icon="comment"
          width="24px"
          height="24px"
          class="color-black"
        />
        <span class="ml-8">20</span>
      </button>
    </div>

    <!-- 
      card comments
     -->
    <UserComment />
    
    <div class="flex --center mt-20 mb-10">
      <a class="font --smaller color-warning-600">View all comments</a>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import UserComment from "./UserComment.vue";

export default {
  components: {
    IconBase,
    UserComment
},
};
</script>
