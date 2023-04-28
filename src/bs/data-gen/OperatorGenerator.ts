/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-28 14:24:22
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-28 14:30:36
 * @Description: 
 */
import type { OperatorRule } from "../arith-rules/OperatorRule";
import { getRandomArrayElement } from "@/utils/randomUtils";

export interface OperatorGenerator {
    generate(): number,
    rule: OperatorRule
}

export function createOperatorGenerator(rule: OperatorRule) {
    return {
        generate(): string {
            const option = getRandomArrayElement(rule.options)
            if (!option) {
                throw Error('no operator')
            }

            return option
        },
        rule,
    }

}
