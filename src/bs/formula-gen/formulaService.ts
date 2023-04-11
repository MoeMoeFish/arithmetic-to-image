import type { FormularRule } from "../arith-rules/FormularRule"

/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-11 20:00:42
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-11 20:25:58
 * @Description: 
 */
export interface FormulaService {
    genFormula(rule: FormularRule): string;
    genFormulas(rule: FormularRule, num: number): string[];
}

export function createFormulaService(): FormulaService {
    // max = 3, result contian: 0, 1, 2
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function genFormula(rule: FormularRule): string {
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

    function genFormulas(rule: FormularRule, num: number): string[] {
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