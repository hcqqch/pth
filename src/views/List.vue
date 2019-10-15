<template>
<section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;display:flex">
        <el-form :inline="true" :model="filters">
            <el-form-item>
                <el-input v-model="filters.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getUsers">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">新增</el-button>
            </el-form-item>
        </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" sortable>
        </el-table-column>
        <el-table-column prop="birth" label="生日" width="120" sortable>
        </el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180" sortable>
        </el-table-column>
        <el-table-column label="操作" width="150">
            <template scope="">
                <el-button size="small">编辑</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar">
        <!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
        </el-pagination>
    </el-col>

</section>
</template>

<script>
import {
    getUserListPage,
} from '../api/api';

export default {
    data() {
        return {
            filters: {
                name: ''
            },
            users: [],
            page: 1,
            total: 0,
            listLoading: false,
        }
    },

    methods: {
        formatSex(row, column) {
            return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知";
        },
        getUsers() {
            let para = {
                page: this.page,
                name: this.filters.name
            };
            this.listLoading = true;
            getUserListPage(para).then((res) => {
                this.total = res.data.total;
                this.users = res.data.users;
                this.listLoading = false;
            });
        },
        handleCurrentChange(val) {
            this.page = val;
            this.getUsers();
        },
    },
    mounted() {
        this.getUsers();
    }
}
</script>

<style scoped>
/* .toolbar {
    display: flex;
} */

/* .page-wrap{

} */
</style>
