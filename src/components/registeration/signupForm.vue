<template>
  <form action="" @submit.prevent="validate($event)">
    <router-link to="/login" class="loginLink">
      Already have an account? Log in instead!
    </router-link>
    <hr />
    <input
      @click="fristNameError = ''"
      v-model="fristName"
      type="text"
      name="fristName"
      placeholder="Frist Name"
    />
    <span v-text="fristNameError"></span>
    <input
      @click="lastNameError = ''"
      v-model="lastName"
      type="tel"
      name="lastName"
      placeholder="Last Name"
    />
    <span v-text="lastNameError"></span>
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
        :type="passwordfiledType"
        name="password"
        placeholder="Password"
      />
    </div>
    <span v-text="passwordError"></span>
    <div>
      <i
        @click="toggleConfirmPasswordFiled()"
        :class="['bi', isConfirmPassword ? 'bi-eye' : 'bi-eye-slash-fill']"
      ></i>
      <input
        @click="confirmPasswordError = ''"
        v-model="confirmPassword"
        :type="confirmPasswordfiledType"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
    </div>
    <span v-text="confirmPasswordError"></span>
    <button>SIGN IN</button>
    <span v-text="authError"></span>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      fristName: "",
      fristNameError: "",
      lastName: "",
      lastNameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      authError: "",
      passwordfiledType: "password",
      confirmPasswordfiledType: "password",
      isPassword: true,
      isConfirmPassword: true,
    };
  },
  methods: {
    validate(e) {
      if (!this.fristName) this.fristNameError = "Enter your frist name";
      if (!this.lastName) this.lastNameError = "Enter your last name";

      if (!this.email) this.emailError = "Enter your email";
      else if (!this.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))
        this.emailError = "Enter valid email";

      if (!this.password) this.passwordError = "Enter a password";
      else if (this.password.length < 8)
        this.passwordError = "Password more tham 8 characters";

      if (!this.confirmPassword)
        this.confirmPasswordError = "Enter the confirm password";
      else if (this.confirmPassword !== this.password)
        this.passwordError = "Enter the same password";

      if (
        !this.fristNameError &&
        !this.lastNameError &&
        !this.passwordError &&
        !this.confirmPasswordError &&
        !this.emailError
      ) {
        this.insertUser();
        return true;
      } else e.preventDefault();
    },
    togglePasswordFiled() {
      this.passwordfiledType =
        this.passwordfiledType === "password" ? "text" : "password";
      this.isPassword = !this.isPassword;
    },
    toggleConfirmPasswordFiled() {
      this.confirmPasswordfiledType =
        this.confirmPasswordfiledType === "password" ? "text" : "password";
      this.isConfirmPassword = !this.isConfirmPassword;
    },
    insertUser() {
      axios.post("http://localhost:3000/users", {
        id: Date.now(),
        fristName: this.fristName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
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
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  margin: 100px 0;
}
input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background-color: white;
  border: none;
  border-bottom: 1px solid;
  margin: 10px 0;
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
  margin: 25px auto 0;
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
}
hr {
  margin: 5px;
}
.loginLink {
  font-size: 13px;
}
</style>
