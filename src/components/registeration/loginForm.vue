<template>
  <form action="" @submit.prevent="validate($event)">
    <input
      @click="emailError = ''"
      v-model="email"
      type="email"
      name="email"
      placeholder="Email"
    />
    <span v-text="emailError"></span>
    <div>
      <i
        @click="togglePasswordFiled()"
        :class="['bi', isPassword ? 'bi-eye' : 'bi-eye-slash-fill']"
      ></i>
      <input
        @click="passwordError = ''"
        v-model="password"
        :type="filedType"
        name="password"
        placeholder="Password"
      />
    </div>
    <span v-text="passwordError"></span>
    <router-link to="/forgetPassword"> FORGET YOUR PASSWORD ?? </router-link>
    <button>SIGN IN</button>
    <hr />
    <router-link to="/signup"> No account ? Create one here </router-link>
    <span v-text="authError"></span>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      authError: "",
      filedType: "password",
      isPassword: true,
    };
  },
  methods: {
    validate(e) {
      if (!this.email) this.emailError = "Please enter your email";
      else if (!this.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        this.emailError = "Please enter valid email";

      if (!this.password) this.passwordError = "Please enter a password";
      else if (this.password.length < 8)
        this.passwordError = "Password more tham 8 characters";
      if (!this.passwordError && !this.emailError && !this.isUser())
        this.authError = "Wrong email or password";
      if (!this.passwordError && !this.emailError && !this.authError)
        return true;
      else e.preventDefault();
    },
    togglePasswordFiled() {
      this.filedType = this.filedType === "password" ? "text" : "password";
      this.isPassword = !this.isPassword;
    },
    isUser() {
      axios.get("http://localhost:3000/users").then((response) => {
        const user = response.data.find(
          (user) => user.email === this.email && user.password === this.password
        );
        console.log(user);
      });
    },
  },
};
</script>

<style scoped>
form {
  padding: 38px;
  width: 320px;
  border: 1px solid black;
  height: 320px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  margin-bottom: 100px;
}
input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background-color: white;
  border: none;
  border-bottom: 1px solid;
  margin: 5px;
  width: 100%;
  background-color: transparent;
}
input:hover,
input:focus {
  outline: none;
  border: none;
  border-bottom: 1px solid;
}
button {
  background-color: #02adf1;
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  outline: 1px solid #cecece;
  width: 100px;
  margin: auto;
}
a {
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
}
div {
  position: relative;
}
i {
  position: absolute;
  right: 1%;
  top: 20%;
  cursor: pointer;
  z-index: 2;
}
span {
  margin-bottom: 5px;
  color: red;
  height: 25px;
}
hr {
  margin: 5px;
}
</style>
