/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:08:11
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 20:27:16
 * @Description: 
 */
import type { OperatorRule } from "../arith-rules/OperatorRule";
import type { Node, NodeValueType } from '@/bs/formula-ast/Node'

export interface OperatorGenerator {
    generate(): Node
}

export function createOperatorGenerator(rule: OperatorRule): OperatorGenerator {
    return {
        generate: (): Node => {
            const rnd = Math.random()
            const index = Math.floor(rnd * rule.options.length) 

            const option = rule.options[index]

            const n: Node = {
                nodeType: 'op',
                value: option as NodeValueType
            }

            return n
        }
    }

    
    
}