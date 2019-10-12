<template>
<el-row class="container">
    <!-- 头部 -->
    <el-col class="header">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
            {{collapsed?'':sysName}}
        </el-col>
        <el-col :span="10">
            <div class="tools" @click.prevent="collapse">
                <i class="el-icon-tickets"></i>
            </div>
        </el-col>
        <el-col :span="4">
            
        </el-col>
    </el-col>

    
    <el-col :span="24" class="mc-wrapper">
        <!-- 菜单 -->
        <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
            <el-menu default-active="$route.path" class="el-menu-vertical-demo" router :collapse="collapsed">
                <template v-for="(item,index) in $router.options.routes">
                    <el-submenu :key="index" :index="index+ ''">
                        <template slot="title">
                            <i :class="item.iconCls"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path+ ''">{{child.name}}</el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </aside>
        <!-- 内容区域 -->
        <section class="content-container">
            <div class="">
                <el-col :span="24" class="content-wrapper">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </div>
        </section>
    </el-col>
</el-row>
</template>

<script>
export default {
    data() {
        return {
            collapsed: false,
            sysName:'苹苔汇'
        };
    },
    methods: {
        collapse: function () {
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style scoped>
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
}

.header {
    height: 60px;
    background: #20a0ff;
}

.logo {
    box-sizing: border-box;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 22px;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
}

.tools {
    padding: 0px 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
}

.el-icon-tickets{
    color: #fff;
}

.logo-collapse-width {
    width: 64px;
}

.logo-width {
    width: 230px;
}

.mc-wrapper {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
}

aside {
    width: 230px;
    background: #f5f5f5;
}

.menu-collapsed {
    flex: 0 0 64px;
    width: 64px;
}

.menu-expanded {
    flex: 0 0 230px;
    width: 230px;
}

.content-container {
    display: flex;
    width: 100%;
    overflow-x: hidden;
    padding: 20px;
}
</style>
