<template>
  <div id="app">
    <div id="nav">
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/add">Add post</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
