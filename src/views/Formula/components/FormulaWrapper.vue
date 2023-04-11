<!--
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 13:59:01
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-11 19:33:03
 * @Description: 
-->

<script setup lang="ts" >
import { computed } from 'vue';
import FormulaItem from './FormulaItem.vue';
import type { Props as ItemProps } from './FormulaItem.vue';

export interface Props {
    column: number, // >=1 and < 4
    formulas: ItemProps[]
}

const props = defineProps<Props>()
const totalSpan = 24; // el-row 24 分栏

const columnWidth = computed(() => {
    return Math.floor(totalSpan / props.column) 
})

const columnArray = computed(() => {
    let ret: number[] = []

    for (let i = 0;i < props.column;i++) {
        ret.push(i)
    }
    return ret
})

function getPartialArray<T>(arr: T[], first = 0, step = 1) {
    let newArr: T[] = []
    for (let i = first;i < arr.length;i = i + step) {
        newArr.push(arr[i])
    }

    return newArr
}

</script>

<template>
    <div class="formula-result">
        <el-row>
            <el-col v-for="(item, index) in columnArray" :key="index" :span="columnWidth">
                <FormulaItem v-for="(item, itemIndex) in getPartialArray(formulas, index, column)" :key="itemIndex" :text="item.text" />
            </el-col>
        </el-row>
    </div>
</template>
<style>
.formula-result {
    padding: 30px 20px;
}
</style>