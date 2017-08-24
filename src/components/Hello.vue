<template>
  <div class="hello">
    {{this.$store.state.count}}
    <div>
      <button type="" @click="add">button</button>
    </div>
    <div>
      <li v-for="(key, item) in this.$store.state.list">
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
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods: {
    add(){
      this.$store.commit('adds', 10);
    },
    addList(){
      this.$store.commit('addList');
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
