/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:07:48
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 20:27:22
 * @Description: 产生 formula 的工具类
 */
import type { FormulaRule } from '@/bs/arith-rules/FormulaRule'
import type { Node } from '@/bs/formula-ast/Node'
import { FormulaTree, createFormulaTree } from '../formula-ast/FormulaTree'

export interface FormulaGenerator {
    formulaRule: FormulaRule,
    generateFormulaAst(): Node
}

export function createFormulaGenerator(formulaRule: FormulaRule) {
    return {
        formulaRule,
        generateFormulaAst(): Node {
            let isEnd = false
            let i = 0
            const rules = formulaRule.rules
            while (!isEnd) {
                const rule = rules[i]



                if (i >= rules.length) {
                    isEnd = true
                }

                i++
            }

            const n: Node = {
                nodeType: 'number',
                value: 0
            }

            return n
        }
    }
}
