<template>
  <div class="containerDisp3">
    <div class="someText1">
      <div>Поздравляем, теперь</div>
      <div>ваш телефон защищен</div>
    </div>
    <div class="panda"><img :src="panda" alt="panda" /></div>
    <button class="bottonDisp3" @click="$router.push('/disp4')">
      Перейти в личный кабинет
    </button>
    <div class="lineContainer">
      <div class="lineBottom"></div>
    </div>
  </div>
</template>

<script>
import panda from "@/icons/panda.svg";
export default {
  setup() {
    return {
      panda,
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
