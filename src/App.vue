<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="postcss">
.box {
  @apply w-11/12 sm:w-10/12 md:w-8/12 mx-auto mt-10 flex flex-col justify-center;
}
.logo {
  @apply w-11/12 sm:w-10/12 md:w-8/12 mx-auto max-w-xl mt-12 mb-20;
}
.greetingMsg {
  @apply capitalize mb-10;
}
.pageTitle {
  @apply text-gray-700 mx-auto text-2xl sm:text-3xl capitalize mb-10 sm:mb-12 mt-0 sm:mt-5;
}
.tableH {
  @apply text-base sm:text-xl border-b-2 w-full mx-auto capitalize;
}
.homeTable .tableD {
  @apply text-sm sm:text-lg text-center border-t h-12;
}
.register,
.login,
.addForm {
  @apply flex flex-col mx-auto;
}
.register input,
.login input,
.addForm input {
  @apply h-10 w-80 border-2 px-2 mx-auto rounded border-gray-500 mt-4  focus:outline-none focus:ring-2 focus:ring-purple-600;
}
.register button,
.login button,
.addForm button {
  @apply py-2 mt-8 w-24 mx-auto rounded-lg hover:bg-purple-400 bg-purple-600 text-white capitalize;
}
</style>
