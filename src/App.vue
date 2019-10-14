<template>
<div id="app">
    <div id="nav">

    </div>
    <router-view />
</div>
</template>

<style>
body {
    margin: 0px;
    padding: 0px;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 10px 0px;
}

.toolbar .el-form-item {
    margin-bottom: 10px;
}

.el-menu{
    background-color: #f5f5f5;
}

.el-submenu{
    background-color: #f5f5f5;
}

/* .container .el-submenu__title:hover{
    background-color: #f5f5f5;
} */

.el-submenu .el-menu-item{
    background-color: #f5f5f5;
}

.el-submenu__title .el-icon-arrow-right:before {
    content: "";
}
</style>
