<template>
  <ListComponent :items="groupedItemByScore"/>
</template>

<script>
import ListComponent from './components/ListComponent.vue'
export default {
  name: 'App',
  components: {
    ListComponent
  },
  computed: {
    groupedItemByScore() {
      let items = this.list.items;
      return items.reduce( (acc, item) => {
      if (!acc[item.score]) {
        acc[item.score] = [];
      }
      acc[item.score].push(item);
      acc[item.score].sort(function(a,b){
        return b.name.localeCompare(a.name);
      });
      return acc;
      },{});
    }
  },
  data () {
    return {
      list: {
          name: 'My Items',
          items: [
            { id: 1, name: 'sam', score: 30 },
            { id: 2, name: 'Item 2', score: 50 },
            { id: 3, name: 'Item 3', score: 20 },
            { id: 4, name: 'Item 4', score: 20 },
            { id: 5, name: 'dog', score: 30 },
            { id: 6, name: 'Item 6', score: 20 }
          ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
