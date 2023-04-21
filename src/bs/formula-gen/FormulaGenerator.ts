/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:07:48
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-21 23:57:20
 * @Description: 产生 formula 的工具类
 */
import type { FormulaRule } from '@/bs/arith-rules/FormulaRule'
import { createEmptyNode, type Node } from '@/bs/formula-ast/Node'
import { createNumberGenerator } from './NumberGenerator'
import type { NumberRule } from '../arith-rules/NumberRule'
import { createOperatorGenerator, type OperatorGenerator } from './OperatorGenerator'
import type { OperatorRule } from '../arith-rules/OperatorRule'

export interface FormulaGenerator {
    generateFormulaAst(): Node
}

export function createFormulaGenerator(formulaRule: FormulaRule) {
    return {
        generateFormulaAst(): Node {
            let i = 0
            const rules = formulaRule.rules

            const root: Node = createEmptyNode()

            for (;;) {
                const rule = rules[i]

                let node: Node = createEmptyNode()
                if (rule.type === 'number') {
                    node = createNumberGenerator(rule as NumberRule).generate()
                } else if (rule.type === 'op') {
                    node = createOperatorGenerator(rule as OperatorRule).generate()
                }

                if (root.nodeType === 'empty') {
                    root.right = node
                } else {
                    let parent = root
                    let curr = root.right
                    for (;;) {
                        if (!curr?.right) {
                            break
                        }

                        parent = curr
                        curr = curr.right
                    }

                    if (curr?.nodeType === node.nodeType) {
                        throw new Error('不能有两个连续的符号')
                    }

                    if (curr?.nodeType === 'op') {
                        curr.right = node
                    } else {
                        parent.right = node
                        node.left = curr
                    }
                }

                if (i >= rules.length) {
                    break
                }

                i++
            }

            if (!root.right) {
                throw new Error('empty formula')
            }

            return root.right
        }
    }
}
