<template>
  <div class="container">
    <div class="firstContainer">
      <div>
        <div class="simpleTraid">Simple Traid</div>
        <div class="portalZen">Портал чистых цен</div>
      </div>
      <div class="imgUserIcon"><img :src="user" alt="User" /></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import user from "@/icons/user.svg";
export default {
  setup() {
    return { user };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 375px;
  height: 888px;
  position: relative;
}
.firstContainer {
  display: flex;
  justify-content: space-between;
  padding: 11px 20px 11px 20px;
}
</style>
