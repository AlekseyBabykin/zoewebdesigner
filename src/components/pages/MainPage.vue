<template>
  <div>
    <div class="secondContainer">
      <div class="protection">
        <div>ЗАЩИТА ВАШЕГО</div>
        <div>ТЕЛЕФОНА</div>
      </div>
      <div class="fullProtection1">
        Полная защита от любых повреждений за 9 рублей в день
      </div>
      <div class="couch">
        <img :src="couch" alt="couch" />
      </div>
    </div>
    <div class="threeContainer">
      <div>
        <dev class="fullProtection2">
          <dev> Полная защита от </dev>
          <dev>любых повреждений за</dev>
          <dev>9 рублей в день</dev>
        </dev>
        <ul>
          <li>Разбился экран</li>
          <li>Залили водой</li>
          <li>Треснул корпус</li>
          <li>Сломался от замыкания</li>
        </ul>
      </div>
      <div class="containerFirstButton">
        <button @click="$router.push('/reg')" class="firstButton">
          <strong>Подключить</strong>
        </button>
        <div class="textAferta">
          <div class="textAferta1">Нажимая кнопку «Подключить»,</div>
          <div>вы соглашаетесь с условиями аферты</div>
        </div>
      </div>
      <div class="containerWaves"><img :src="waves" alt="waves" /></div>
    </div>
  </div>
</template>

<script>
import couch from "@/icons/couch.svg";
import waves from "@/icons/waves.svg";

export default {
  setup() {
    return {
      couch,
      waves,
    };
  },
};
</script>

<style>
.simpleTraid {
  font-family: "Roboto Slab";
  font-size: 20.14px;
  color: #000000;
  line-height: 20.14px;
}
.portalZen {
  font-family: "Tele2 TextSans Web SHORT Bold";
  font-size: 6.15px;
  color: #000000;
  line-height: 6.15px;
  margin-left: 73px;
}
.imgUserIcon {
  width: 27px;
  height: 27px;
}

.protection {
  font-family: "StandardCTStencil-Bold";
  font-size: 28px;
  color: #1f2229;
  padding-left: 20px;
}
.fullProtection1 {
  font-family: "Tele2 TextSans Web SHORT Regular";
  font-size: 14px;
  color: #1f2229;
  padding: 20px 20px 0px 20px;
}
.couch {
  width: 328px;
  height: 224;
  padding: 20px 20px 20px 20px;
}

.threeContainer {
  position: relative;
  height: 451px;
  background-color: #1f2229;
}
.fullProtection2 {
  font-family: "Tele2 DisplaySerif Web SHORT Bold";
  font-size: 28px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
}
ul {
  font-family: "GT Sectra Book";
  list-style: none;
  font-size: 16px;
  color: #ffffff;
}

ul li:before {
  content: "—";
  position: relative;
  left: -5px;
}
.containerFirstButton {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.firstButton {
  width: 161px;
  height: 48px;
  margin-top: 10px;
  padding: 13px 35px 13px 35px;
  border-radius: 28px;
  margin-bottom: 15px;
}
.textAferta {
  font-family: "Tele2 TextSans Web SHORT Regular";
  text-align: center;
  color: #8f9399;
  font-size: 13px;
}
.textAferta1 {
  margin-bottom: 10px;
}
.containerWaves {
  position: absolute;
  bottom: 0;
}
</style>
