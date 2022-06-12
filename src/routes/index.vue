<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMenus } from "../includes/menu";
export default defineComponent({
  name: "IndexPage",
});
</script>

<script setup lang="ts">
const menus = useMenus();
const menuItems = computed(() => menus.get("home-menu"));
</script>

<template>
  <div class="index-page">
    <h1>Hello World!!</h1>
    <ul>
      <a
        v-for="(item, i) of menuItems"
        :key="i"
        :href="item.to"
        :target="item.target"
        >{{ item.label }}</a
      >
    </ul>
  </div>
</template>

<style lang="scss">
.index-page {
  display: block;

  ul {
    display: flex;
    flex-direction: column;
  }
}
</style>
