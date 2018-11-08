<template>
  <div class="home">
    <img alt="Vue logo" @click="toast" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import common from '@/utils/common'
export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {},
  methods: {
    toast() {
      common.toast('我我我')
    }
  }
};
</script>
