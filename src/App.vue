<template>
  <center>
    <input v-model="username" type="text"/>
    <input v-model="password" type="password"/>
    <button @click="login">Log In</button>
  <pre ref="console" class="console">
    <span v-for="(line, i) of lines" :key="i">{{line}}</span>
  </pre>
  </center>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},

  data() {
    return {
      username: "",
      password: "",
      lines: [] as Array<string>,
    };
  },

  methods: {
    login() {
      this.$api.fn.connect({
        jid: this.username,
        password: this.password,
      });
    },
  },
  
  mounted() {
    this.$api.on("stanza:*", (...args) => this.lines.push(JSON.stringify(args[0])));
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.console {
  border: solid 1px black;
  width: 640px;
  height: 480px;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  font-size: 11px;
  text-align: start;
  & > span {
    display: block;
  }
}
</style>
