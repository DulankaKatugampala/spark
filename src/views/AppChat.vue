<template>
  <MainLayout class="appChat">
    <template #header>
      <div class="searchBar flex --center pl-16 pr-16 pt-10 pb-10">
        <input type="text" placeholder="Search..." class="flex-grow" />
        <button class="w-36 h-32">
          <IconBase icon="add" width="20px" height="20px" class="color-black" />
        </button>
      </div>
    </template>
    <template #body>
      <div class="appChat__chatList__wrapper pl-16 pr-16">
        <div class="appChat__chatList pb-8 pt-10">
          <UserAvatar md />
          <div class="flex --column">
            <h3 class="font --body --bold">DulankaKatu</h3>
            <p class="font --smaller --light --multiline-ellipsis">
              comment on a post by another user. More comment on a post by
              another user
            </p>
          </div>
          <div class="flex --column --a-end">
            <p class="font --smaller --normal">10h</p>
            <span
              class="font --smaller --normal bg-grey-400 w-20 h-20 flex --center --center mt-4"
              >3</span
            >
          </div>
        </div>
        <div class="appChat__chatList pb-8 pt-10">
          <UserAvatar md />
          <div class="flex --column">
            <h3 class="font --body --bold">DulankaKatu</h3>
            <p class="font --smaller --light --multiline-ellipsis">
              comment on a post by another user. More comment on a post by
              another user
            </p>
          </div>
          <div class="flex --column --a-end">
            <p class="font --smaller --normal">10h</p>
            <span
              class="font --smaller --normal bg-grey-400 w-20 h-20 flex --center --center mt-4"
              >3</span
            >
          </div>
        </div>
        <div class="appChat__chatList pb-8 pt-10">
          <UserAvatar md />
          <div class="flex --column">
            <h3 class="font --body --bold">DulankaKatu</h3>
            <p class="font --smaller --light --multiline-ellipsis">
              comment on a post by another user. More comment on a post by
              another user
            </p>
          </div>
          <div class="flex --column --a-end">
            <p class="font --smaller --normal">10h</p>
            <span
              class="font --smaller --normal bg-grey-400 w-20 h-20 flex --center --center mt-4"
              >3</span
            >
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <AppBar />
    </template>
  </MainLayout>
</template>

<script>
export default {};
</script>
