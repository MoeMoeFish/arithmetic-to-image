<!--
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 13:53:23
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-22 00:38:05
 * @Description: 
-->
<script lang="ts" setup>
    export interface Props {
        defaultQuestionType: number
    }
    defineProps<Props>();

    const questionType = {};
</script>
<template>
    <el-row :gutter="20">
        <el-column :span="6">
            <span class="form-title">题目类型:</span>
            <el-select v-model="questionType" class="m-2" placeholder="Select" size="large">
            </el-select>
        </el-column> 
    </el-row>
    <el-row class="button-line">
        <el-button type="primary">生成</el-button>
    </el-row>
</template>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.button-line {
    justify-content: end;
}

.form-title {
    display: inline-block;
    min-width: 100px;
}
</style>