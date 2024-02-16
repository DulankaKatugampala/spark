<template>
  <MainLayout class="userProfile">
    <template #body>
      <div class="flex --column --center mt-32 pl-16 pr-16">
        <img
          class="avatar lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <h2 class="font --heading --bold --center --wordbreak max-w-100p mt-20">
          @usernameusernameusernameusernameusername
        </h2>

        <div class="flex --center mt-20">
          <span class="mr-8">📍</span>
          <span class="font --body --normal">Colombo, Sri Lanka</span>
        </div>

        <div class="flex --center mt-14">
          <span
            class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4 mr-8"
            >28 Straight Male</span
          >
          <span class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4"
            >25 Straight Female</span
          >
        </div>

        <div class="flex --center mt-28">
          <button class="flex --column --center mr-28">
            <span class="font --xxxl --semibold">20</span>
            <p class="font --smaller --normal">Posts</p>
          </button>
          <button class="center column layoutFlex mr-28">
            <span class="font --xxxl --semibold">20</span>
            <p class="font --smaller --normal">Followers</p>
          </button>
          <button class="center column layoutFlex">
            <span class="font --xxxl --semibold">20</span>
            <p class="font --smaller --normal">Following</p>
          </button>
        </div>
      </div>
      <!--  -->
      <div class="userProfile__divider"></div>
      <!--  -->
      <div class="flex --column pl-16 pr-16">
        <h3 class="font --subheading --bold">Profile title</h3>
        <p class="font --body --light mt-12">
          Profile description, Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Velit magni cum, ab quia iste consectetur omnis
          dolore. Neque inventore, sequi recusandae magni fugiat nobis illum!
          Nesciunt, cupiditate! Consequuntur, molestias accusamus.
        </p>
        <div class="flex --row --wrap gap-10 mt-16">
          <span class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4"
            >Cars</span
          >
          <span class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4"
            >Sports</span
          >
          <span class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4"
            >Education</span
          >
          <span class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4"
            >Computer Science</span
          >
          <span class="font --smaller --normal bg-grey-300 pl-6 pr-6 pt-4 pb-4"
            >Business management</span
          >
        </div>
      </div>
      <!--  -->
      <div class="userProfile__divider"></div>
      <!--  -->
      <div class="flex --column pl-16 pr-16">
        <h3 class="font --subheading --bold mb-16">Guestbook</h3>
        <div class="flex --column">
          <div class="flex --row">
            <div class="flex --column">
              <div class="flex --row gap-x-12 mb-10">
                <UserAvatar md />
                <div class="flex --column --j-center">
                  <h3 class="font --body --bold">DulankaKatu</h3>
                  <p class="font --smaller --light">2024 Jan 28 at 16.30</p>
                </div>
              </div>
              <p class="font --body --light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                autem numquam! Sit error labore magnam, dolores libero vitae
                cumque mollitia corrupti praesentium reiciendis eius assumenda,
                nemo excepturi corporis nostrum reprehenderit!
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="userProfile__divider"></div>
      <!--  -->
      <div class="flex --column pl-16 pr-16">
        <h3 class="font --subheading --bold">Posts</h3>
        <div class="userProfile__posts mt-14">
          <img
            class=""
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            class=""
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            class=""
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            class=""
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <!--  -->
      <div class="userProfile__divider"></div>
    </template>
    <template #footer>
      <AppBar />
    </template>
  </MainLayout>
</template>

<script>
export default {};
</script>
