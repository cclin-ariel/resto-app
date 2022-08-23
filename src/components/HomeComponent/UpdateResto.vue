<template>
  <Header />
  <div class="box">
    <div class="greetingMsg">
      Hello {{ userName }}, Welcome on Update restaurant Page.
    </div>
    <div class="pageTitle">update restaurant</div>

    <form class="addForm">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        v-model="updateResto.name"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        v-model="updateResto.address"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter Contact"
        v-model="updateResto.contact"
      />
      <button type="button" @click="update">update</button>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateResto",
  components: { Header },

  data() {
    return {
      userName: "",
      id: this.$route.params.id,
      updateResto: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  async mounted() {
    let user = localStorage.getItem("restoApp-userInfo");
    this.userName = JSON.parse(user)[0].name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    // get resto
    await axios
      .get(`http://localhost:3000/restaurant/${this.id}`)
      .then((result) => {
        this.updateResto = result.data;
        // console.log(this.updateResto);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    async update() {
      if (
        this.updateResto.name == "" ||
        this.updateResto.address == "" ||
        this.updateResto.contact == ""
      )
        return;
      // console.log(this.updateResto);
      await axios
        .put(`http://localhost:3000/restaurant/${this.id}`, {
          name: this.updateResto.name,
          address: this.updateResto.address,
          contact: this.updateResto.contact,
        })
        .then((result) => {
          console.log(result.data);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
