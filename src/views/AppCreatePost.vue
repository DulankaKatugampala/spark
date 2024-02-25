<template>
    <MainLayout class="appSearch">
      <template #body>
        <div class="appSearch__userRecommendations pl-16 pr-16 pt-10 pb-10">
          <div class="pb-8 pt-10 flex --center --column rounded userCard">
            <UserAvatar lg />
            <div class="flex --center mt-10">
              <h3 class="font --body --bold">DulankaKatu</h3>
            </div>
          </div>
          <div class="pb-8 pt-10 flex --center --column rounded userCard">
            <UserAvatar lg />
            <div class="flex --center mt-10">
              <h3 class="font --body --bold">DulankaKatu</h3>
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
  