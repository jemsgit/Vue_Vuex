<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ToDoList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ToDoList from '@/components/ToDoList.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    ToDoList,
  },
};
</script>
