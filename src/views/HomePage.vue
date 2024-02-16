<template>
  <MainLayout>
    <template #header>
      <div class="header">header</div>
    </template>
    <template #body>
      <div class="body">
        <UserPost />
        <UserPost />
        <UserPost />
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
