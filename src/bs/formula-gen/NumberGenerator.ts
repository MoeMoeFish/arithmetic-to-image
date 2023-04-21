/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:31:34
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-21 23:59:33
 * @Description: 符号产生器
 */

import type { Node } from '@/bs/formula-ast/Node'
import type { NumberRule } from '../arith-rules/NumberRule'

const adjustNumber = 0.00001

export interface NumberGenerator {
    generate(): Node
}

function getMax(rule: NumberRule): number {
    let max = Number.MAX_SAFE_INTEGER
    if (rule.lessThan) {
        max = rule.lessThan - adjustNumber
    }
    if (rule.lessThanOrEqual) {
        max = Math.min(max, rule.lessThanOrEqual) 
    }

    return max
}

function getMin(rule: NumberRule): number {
    let min = Number.MIN_SAFE_INTEGER

    if (rule.greaterThan) {
        min = rule.greaterThan + adjustNumber
    }

    if (rule.greaterThanOrEqual) {
        min = Math.max(min, rule.greaterThanOrEqual)
    }

    return min
}

// rnd must in [0..1)
function getIntegerInRange(rnd: number, min: number, max: number) {
    return Math.floor(min + Math.floor(rnd * (max - min)))
}

export function createNumberGenerator(rule: NumberRule): NumberGenerator {
    return {
        generate: (): Node => {
            const rnd = Math.random();
            const max = getMax(rule)
            const min = getMin(rule)
            let number = 0;

            // 大于等于 0
            if (min >= 0 && max > 0) {
                number = getIntegerInRange(rnd, min, max)
            } else if (min < 0 && max <= 0) { // 小于等于 0
                number = getIntegerInRange(rnd, max * -1, min * -1) * -1
            } else {
                const pNum = getIntegerInRange(rnd, 0, max)
                const nNum = getIntegerInRange(rnd, 0, min * -1)

                number = Math.random() < 0.5 ? nNum : pNum
            }

            const n: Node = {
                nodeType: 'number',
                value: number
            }

            return n
        }
    }
    // 目前不考虑小数等复杂情况

    
}
