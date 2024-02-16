<template>
  <nav class="appBar p-6">
    <div class="appBar__wrapper">
      <RouterLink :to="{ name: 'feed' }" class="appBar__btn" active-class="appBar__btn--active">
        <IconBase icon="home" width="24px" height="24px" />
      </RouterLink>
      <RouterLink :to="{ name: 'search' }" class="appBar__btn" active-class="appBar__btn--active">
        <IconBase icon="search" width="24px" height="24px" />
      </RouterLink>
      <RouterLink :to="{ name: 'add' }" class="appBar__btn" active-class="appBar__btn--active">
        <IconBase icon="add" width="24px" height="24px" />
      </RouterLink>
      <RouterLink :to="{ name: 'chat' }" class="appBar__btn" active-class="appBar__btn--active">
        <IconBase icon="chat" width="24px" height="24px" />
      </RouterLink>
      <RouterLink :to="{ name: 'profile' }" class="appBar__btn" active-class="appBar__btn--active">
        <IconBase icon="user" width="24px" height="24px" />
      </RouterLink>
    </div>
  </nav>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
export default {
    components: {
        IconBase
    }
};
</script>
