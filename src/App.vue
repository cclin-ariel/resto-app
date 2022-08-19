<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="postcss">
.container {
  @apply mx-auto;
}
.nav {
  @apply w-full sm:w-8/12 mx-auto capitalize flex flex-row justify-around;
}
.logo {
  @apply w-8/12 mx-auto max-w-xl mt-12;
}
.register,
.login {
  @apply flex flex-col mx-auto mt-12;
}
.input {
  @apply h-10 w-80 border-2 px-2 rounded border-gray-500 mt-4  focus:outline-none focus:ring-2 focus:ring-purple-600;
}
.button {
  @apply py-2 mt-8 w-24 mx-auto rounded-lg hover:bg-purple-400 bg-purple-600 text-white;
}
</style>
