<template>
  <div>
    <div class="someText">
      <div>Для активации подписки</div>
      <div>заполните форму</div>
    </div>
    <form id="myForm" @submit.prevent="checkForm">
      <div class="myInput">
        <div class="placeholder-container">
          <input type="text" placeholder=" " v-model="name" />
          <label class="input_placeholder" for="Ваше имя">Ваше имя</label>
          <img v-if="name" :src="rightIcon" class="input-icon" />
          <img v-if="errorName" :src="icon1" class="input-icon" />
          <div class="ifErorr" v-if="errorName.length">
            {{ errorName }}
          </div>
        </div>
        <div class="placeholder-container">
          <input type="text" placeholder=" " v-model="email" />
          <label class="input_placeholder" for="Email">Email</label>
          <img v-if="email && !isValidEmail" :src="icon1" class="input-icon" />
          <img v-if="isValidEmail" :src="rightIcon" class="input-icon" />
          <div class="ifErorr" v-if="errorEmail.length">{{ errorEmail }}</div>
        </div>
        <div class="placeholder-container">
          <MaskInput
            class="mask-input"
            v-model="phone"
            mask="+7(###) ###-##-##"
            placeholder=" "
          />
          <label class="input_placeholder" for="Номер телефона"
            >Номер телефона</label
          >
          <img v-if="phone" :src="rightIcon" class="input-icon" />
          <img v-if="errorPhone" :src="icon1" class="input-icon" />
          <div class="ifErorr" v-if="errorPhone.length">{{ errorPhone }}</div>
        </div>
      </div>
      <div class="containerSecondButton">
        <button type="submit" class="secondButton">
          <strong>Подключить</strong>
        </button>
      </div>
    </form>
    <div class="lineContainer">
      <div class="lineBottom"></div>
    </div>
  </div>
</template>

<script>
import rightIcon from "@/icons/rightIcon.svg";
import icon1 from "@/icons/icon1.svg";
import { MaskInput } from "vue-3-mask";
import router from "@/router/router";

export default {
  components: {
    MaskInput,
  },
  data() {
    return {
      name: null,
      email: null,
      phone: 7,
      errorName: "",
      errorEmail: "",
      errorPhone: "",
      rightIcon,
      icon1,
    };
  },
  computed: {
    isValidEmail() {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return regex.test(this.email);
    },
  },
  methods: {
    checkForm(e) {
      if (!this.name) this.errorName = "Поле не заполнено";
      if (!this.email) this.errorEmail = "Поле не заполнено";
      if (!this.isValidEmail)
        this.errorEmail = "Некорректный адрес электронной почты";
      if (this.phone.length !== 17) this.errorPhone = "Поле не заполнено";
      console.log(this.phone.length);
      e.preventDefault();
      if (!(this.errorName.length || this.errorEmail.length || this.errorPhone))
        router.push("disp3");
    },
  },
};
</script>

<style>
.test {
  position: relative;
}
.someText {
  font-family: "Tele2 DisplaySerif Web SHORT Bold";
  font-size: 24px;
  color: #1f2229;
  height: 48px;
  padding: 0 20px 0 20px;
}
.someText div {
  line-height: 1;
}
.myInput {
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 20px;
}
.placeholder-container {
  position: relative;
}
.placeholder-container label {
  color: #000;
  font-family: "Tele2 TextSans Web SHORT Regular";
  background-color: #fff;
  font-size: 16px;
  line-height: 16px;
  pointer-events: none;
  position: absolute;
  transition: all 200ms;
  top: 40px;
  left: 10px;
}

.placeholder-container input:focus + label,
.placeholder-container input:not(:placeholder-shown) + label {
  top: 20px;
  left: 10px;
  font-size: 13px;
  color: #65707b;
  padding: 2px 10px;
}

.placeholder-container .input-icon {
  position: absolute;
  top: 35px;
  right: 15px;
  width: 24px; /* Adjust as needed */
}

input {
  border: 1px #d3d9df solid;
  border-radius: 10px;
  margin-top: 15px;

  width: 310px;
  height: 60px;
  font-size: 16px;
  font-family: "Tele2 TextSans Web SHORT Regular";
  padding-left: 20px;
  padding-top: 5px;
}

.containerSecondButton {
  margin-top: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.secondButton {
  width: 161px;
  height: 48px;
  margin-top: 10px;
  padding: 13px 35px 13px 35px;
  border-radius: 28px;
  margin-bottom: 15px;
  color: white;
  background-color: black;
}

.lineContainer {
  display: flex;
  justify-content: center;
}

.lineBottom {
  width: 131px;
  height: 5px;
  background-color: #1f2229;
  position: absolute;
  bottom: 0;
}
.ifErorr {
  padding: 10px 0 0 0;
  font-family: "Tele2 TextSans Web SHORT Regular";
  font-size: 13px;
  color: #d72f4b;
}
</style>
