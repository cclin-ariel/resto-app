<template>
  <Header />
  <div class="box">
    <div class="greetingMsg">Hello users, Welcome on Add restaurant Page.</div>
    <div class="pageTitle">Add New restaurant</div>

    <form class="addForm">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        v-model="newResto.name"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        v-model="newResto.address"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter Contact"
        v-model="newResto.contact"
      />
      <button type="button" @click="addResto">add</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "AddResto",
  components: { Header },

  data() {
    return {
      newResto: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },

  mounted() {},

  methods: {
    async addResto() {
      if (
        this.newResto.name == "" ||
        this.newResto.address == "" ||
        this.newResto.contact == ""
      )
        return;

      await axios
        .post("http://localhost:3000/restaurant", {
          name: this.newResto.name,
          address: this.newResto.address,
          contact: this.newResto.contact,
        })
        .then((result) => {
          console.log(result.data);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error(error);
        });
      // console.log(this.addResto);
    },
  },
};
</script>
