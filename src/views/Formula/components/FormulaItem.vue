<!--
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 13:59:12
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-11 19:58:50
 * @Description: 
-->
<script setup lang="ts" >
export interface Props {
    text: string
}

defineProps<Props>();
</script>
<template>
    <div class="formula-item">{{ text }}</div>
</template>
<style>
.formula-item {
    height: 36px;
    line-height: 36px;
}
</style>
