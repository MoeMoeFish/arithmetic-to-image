<!--
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 13:52:28
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-11 15:24:21
 * @Description: 算式生成页面
-->
<script lang="ts" setup>
import FormulaCondition from './components/FormulaCondition.vue';
import FormulaResult from './components/FormulaResult.vue';
</script>


<template>
    <div class="formula-view">
        <div>
            <FormulaCondition :default-question-type="1" />
        </div>
        <el-divider />
        <div>
            <FormulaResult />
        </div>
    </div>
</template>

<style scoped>
.formula-view {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
}
</style>
