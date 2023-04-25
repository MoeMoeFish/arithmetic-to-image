/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-24 19:42:17
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-25 20:19:02
 * @Description: 数字随机生成工具
 */
import type { NumberRule } from "../arith-rules/NumberRule";

export interface NumberGenerator {
    generate(): number,
    rule: NumberRule
}

export function createNumberGenerator(rule: NumberRule) {
    return {
        rule,
        generate(): number {
            return 0
        }
    }
}