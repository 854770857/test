<template>
  <div id="app">
    <div id="toast">
      <span>11111</span>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#toast {
  position: fixed;
  width: 100%;
  bottom: 11rem;
  text-align: center;
  display: none;
  opacity: 0;
  z-index: 99999;
  transition: all 0.2s ease-out;
  & > span {
    display: inline-block;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    line-height: 1.4rem;
    color: #fff;
    background: #000;
    border-radius: 3px;
    max-width: 70%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
