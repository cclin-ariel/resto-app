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
  @apply w-11/12 sm:w-10/12 md:w-8/12 mx-auto mt-10 flex justify-center;
}
.greetingMsg {
  @apply text-xl capitalize;
}
.tableH {
  @apply border-b-2 w-full mx-auto capitalize text-lg;
}
.tableD {
  @apply text-center border-t h-12;
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
