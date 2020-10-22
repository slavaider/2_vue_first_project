
<template>
    <section>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Home</a>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" exact active-class="active" to="/"> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/form">Form</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link" active-class="active" to="/cars">Cars</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <div class="container" id="app">
            <router-view></router-view>
        </div>

    </section>
</template>

<script>
    export default {
        name: "app"
    };
</script>
