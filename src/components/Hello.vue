<template>
  <div class="hello">
    {{this.$store.state.count}}
    <div>
      <button type="" @click="add">button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods: {
    add(){
      this.$store.commit('adds', 10);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
