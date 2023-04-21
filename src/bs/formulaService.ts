/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 20:00:42
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-22 00:39:43
 * @Description: the entrance for formula business
 */

import type { FormulaRule } from "./arith-rules/FormulaRule"

export interface FormulaService {
    genFormula(rule: FormulaRule): string;
    genFormulas(rule: FormulaRule, repeat: number, num: number): string[];
}

export function createFormulaService(): FormulaService {
    // max = 3, result contian: 0, 1, 2
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    // max = 3, result contian: 1, 2, 3
    function getRandomPosInt(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

    function genFormulaTemp(repeat: number): string {
        let ans = getRandomPosInt(20)
        let formula = ans.toString()


        for (let i = 0; i < repeat; i++) {
            const ret = genFormulaOne(ans, formula)
            ans = ret.ans
            formula = ret.formula
        }

        formula = formula += ' ='

        return formula
    }

    function genFormulaOne(left: number, leftFormula: string): { ans: number, formula: string } {
        let ret = ''
        let ans = 0
        let limit = 1000
        
        for (;;) {
            limit--

            if (limit < 0) {
                throw new Error('too many calculate!')
            }

            const d1 = left;
            const d2 = getRandomPosInt(20);

            const opNumer = getRandomInt(2);
            const op = opNumer == 0 ? '+' : '-';

            if (op === '+') {
                ans = d1 + d2
            } else {
                ans = d1 - d2
            }

            if (ans < 0 || ans > 20) {
                continue;
            } 
            ret = `${leftFormula} ${op} ${d2}`;
            break
        }

        return { ans, formula: ret } 
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

    function genFormulas(rule: FormulaRule, repeat: number, num: number): string[] {
        const arr: string[] = [] 
        for (let i = 0;i < num;i++) {
            arr.push(genFormulaTemp(repeat))
        }

        return arr
    }

    return {
        genFormula,
        genFormulas,
    }
}