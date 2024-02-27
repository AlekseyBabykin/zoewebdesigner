<template>
  <div class="containerDisp3">
    <div class="someText1">
      <div>Что-то пошло</div>
      <div>не так</div>
    </div>
    <div class="panda"><img :src="pandaupc" alt="panda" /></div>
    <button class="bottonDisp3" @click="$router.push('/')">
      Вернуться назад
    </button>
    <div class="lineContainer">
      <div class="lineBottom"></div>
    </div>
  </div>
</template>

<script>
import pandaupc from "@/icons/pandaupc.svg";
export default {
  setup() {
    return {
      pandaupc,
    };
  },
};
</script>

<style>
.containerDisp3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.someText1 {
  font-family: "Tele2 DisplaySerif Web SHORT Bold";
  font-size: 24px;
  color: #1f2229;
  height: 48px;
  padding: 214px 20px 0 20px;
  text-align: center;
}
.someText1 div {
  line-height: 1;
}
.bottonDisp3 {
  width: 266px;
  height: 48px;
  font-size: 16px;
  font-family: "Tele2 TextSans Web SHORT Regular";
  padding: 13px 35px 13px 35px;
  border-radius: 30px;
  color: white;
  background-color: black;
}
.panda {
  margin: 20px 0 20px 0;
}
</style>
