/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 20:00:42
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-17 19:28:33
 * @Description: the entrance for formula business
 */

import type { FormulaRule } from "./arith-rules/FormulaRule"

export interface FormulaService {
    genFormula(rule: FormulaRule): string;
    genFormulas(rule: FormulaRule, num: number): string[];
}

export function createFormulaService(): FormulaService {
    // max = 3, result contian: 0, 1, 2
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function genFormula(rule: FormulaRule): string {
        let isOk = false
        let ret = ''
        while (!isOk) {
            const d1 = getRandomInt(20) + 1;
            const d2 = getRandomInt(20) + 1;

            const opNumer = getRandomInt(2);
            const op = opNumer == 0 ? "+" : '-';

            if ((opNumer == 0 && d1 + d2 > 20) || (opNumer == 1  && d1 - d2 < 0)) {
                continue;
            } 
            isOk = true
            ret = `${d1} ${op} ${d2} =`;
        }

        return ret
    }

    function genFormulas(rule: FormulaRule, num: number): string[] {
        const arr: string[] = [] 
        for (let i = 0;i < num;i++) {
            arr.push(genFormula(rule))
        }

        return arr
    }
    return {
        genFormula,
        genFormulas,
    }
}