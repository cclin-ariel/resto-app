<template>
  <img class="logo" src="../assets/LOGO.jpg" alt="logo" />
  <div class="box">
    <div class="register">
      <div class="pageTitle">Sign Up</div>
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter E-mail" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="signUp">Sign Up</button>
      <button>
        <router-link to="/resto-login">Login</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  mounted() {
    let user = localStorage.getItem("restoApp-userInfo");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },

  methods: {
    async signUp() {
      if (this.name == "" || this.email == "" || this.password == "") return;
      await axios
        .post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          console.table(result);
          // data created
          localStorage.setItem(
            "restoApp-userInfo",
            JSON.stringify(result.data)
          );
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
