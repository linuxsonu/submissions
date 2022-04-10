<template>
<div id="items">
<h1>My Items</h1>
<div class="item" v-for="(value, name) in items" :key="value">
<h3>Item with score {{ name }}</h3>
<ul>
<li v-for=" item in value" :key="item.id" :class="onlyClass(value)">{{ item.name }}</li>
</ul>
</div>
</div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    items: {
      type: Object,
      default: function () {
        return {}
      } 
    }
  },
  methods: {
    onlyClass(value){
        if(value.length == 1) return 'only-one';
    }
  }
}
</script>