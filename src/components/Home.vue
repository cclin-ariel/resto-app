<template>
  <Header />
  <div class="box">
    <div class="greetingMsg">Hello {{ userName }}, Welcome on Home Page.</div>
    <div class="pageTitle">restaurant list</div>
    <table class="table-fixed">
      <thead>
        <tr class="tableH">
          <th class="w-">No.</th>
          <th>name</th>
          <th>address</th>
          <th>contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resto in restoList" :key="resto.id" class="tableD">
          <td>{{ resto.id }}</td>
          <td>{{ resto.name }}</td>
          <td>{{ resto.address }}</td>
          <td>
            <a :href="`tel:${resto.contact}`" class="tel">{{
              resto.contact
            }}</a>
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

  async mounted() {
    let user = localStorage.getItem("restoApp-userInfo");
    this.userName = JSON.parse(user)[0].name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    await axios
      .get("http://localhost:3000/restaurant")
      .then((result) => {
        console.table("restoList1", result.data);
        this.restoList = result.data;
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("222restoList", this.restoList);
  },

  methods: {},
};
</script>
<style lang="postcss" scoped>
.tel {
  @apply hover:text-blue-400  hover:underline;
}
</style>
