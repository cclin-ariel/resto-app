<template>
  <Header />
  <div class="box">
    <div class="greetingMsg">Hello {{ userName }}, Welcome on Home Page.</div>
    <div class="pageTitle">restaurant list</div>
    <table class="table-fixed homeTable">
      <thead>
        <tr class="tableH">
          <th class="w-">No.</th>
          <th>name</th>
          <th>address</th>
          <th>contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(resto, index) in restoList" :key="index" class="tableD">
          <td>{{ index + 1 }}</td>
          <td>{{ resto.name }}</td>
          <td>{{ resto.address }}</td>
          <td>
            <a :href="`tel:${resto.contact}`" class="tel">{{
              resto.contact
            }}</a>
          </td>
          <td class="w-full flex justify-between">
            <button>
              <router-link :to="'/update-resto/' + resto.id" class="mr-5"
                >edit</router-link
              >
            </button>
            <button @click="deleteResto(resto)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./HomeComponent/Header.vue";
export default {
  name: "Home",
  components: { Header },
  data() {
    return {
      userName: "",
      restoList: [],
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    async deleteResto(resto) {
      console.log("delete", resto.id);
      await axios
        .delete(`http://localhost:3000/restaurant/${resto.id}`)
        .then((result) => {
          console.log(result.status);
          this.loadData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async loadData() {
      let user = localStorage.getItem("restoApp-userInfo");
      this.userName = JSON.parse(user)[0].name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      await axios
        .get("http://localhost:3000/restaurant")
        .then((result) => {
          // console.log("restoList", result.data);
          this.restoList = result.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style lang="postcss" scoped>
.tel {
  @apply hover:text-blue-400  hover:underline;
}
.homeTable button {
  @apply py-1 my-2 w-10 sm:w-16 text-xs sm:text-base mx-auto rounded-lg hover:bg-purple-400 bg-purple-600 text-white capitalize;
}
</style>
