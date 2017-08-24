<template>
  <div class="hello">
    {{this.$store.state.count}}
    <div>
      <button type="" @click="add">button</button>
    </div>
    <div>
      <li v-for="(item, key) in this.$store.state.list">
        <input type="text" name="" class="form-control" v-model="item.name" value="">
        <input type="text" name="" class="form-control" v-model="item.age" value="">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="item.checked" value="">
            选择
          </label>
        </div>
      </li>
    </div>
    <button type="" @click="addList">addList</button>
    <button type="" @click="log">log</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  created(){

  },
  methods: {
    add(){
      this.$store.commit('adds', 10);
    },
    addList(){
      this.$store.commit('addList');
    },
    log(){
      this.$store.commit('log');
    }
  }
}
</script>

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
