<!--
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 13:57:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-15 01:07:28
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import FormulaWrapper from './FormulaWrapper.vue'
import { toPng } from 'html-to-image'
import { createFormulaService } from '@/bs/formulaService'

const service = createFormulaService();

let formulas = service.genFormulas({ name: '20', rules: []}, 100)

const formulasProps = computed(() => {
    return formulas.map(v => {
        return {
            text: v
        }
    })
})

function download(url: string) {
    var a = document.createElement('a');
    a.href = url;
    a.download = "output.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function onSaveClick() {
    console.log('onSaveClick') // todo!
    
    let node = document.getElementById('formula-result')
    if (node != null) {
        toPng(node)
        .then(function (dataUrl) {
            download(dataUrl)
        })
    }
}
</script>

<template>
    <FormulaWrapper :column="4" :formulas="formulasProps"  id="formula-result" />
    <el-row class="button-line">
        <el-button type="primary" @click="onSaveClick">保存</el-button>
    </el-row>
</template>

<style scoped>
#formula-result {
    background: #fff;
    color: #000;
    font-size: 18px;
}

.button-line {
    justify-content: end;
}
</style>