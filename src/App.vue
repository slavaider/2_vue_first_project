<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <b-navbar-brand>Lol123</b-navbar-brand>
      <button
        class="navbar-toggler"
        data-target="#my-nav"
        data-toggle="collapse"
        aria-controls="my-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="my-nav" class="collapse navbar-collapse">
        <b-navbar-nav class="mr-auto">
          <router-link tag="b-nav-item" class="nav-link" exact active-class="active" to="/"> Home</router-link>
          <router-link tag="b-nav-item" class="nav-link" active-class="active" to="/form">Form</router-link>
          <router-link tag="b-nav-item" class="nav-link" active-class="active" to="/cars">Cars</router-link>
        </b-navbar-nav>
      </div>
    </nav>
    <b-container id="app">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
