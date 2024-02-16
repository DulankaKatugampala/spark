<template>
  <section class="mainLayout">
    <header class="mainLayout__header" v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <div class="mainLayout__body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <footer class="mainLayout__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>
