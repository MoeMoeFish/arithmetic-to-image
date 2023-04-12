/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:07:03
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 19:45:47
 * @Description: 
 */

import type { ArithmeticRule } from "./ArithmeticRule";

export type NumberType = 'integer' | 'fraction'
export type NumberRuleType = 'general'

export interface NumberRule extends ArithmeticRule {
    ruleType: NumberRuleType,
    numberType: NumberType[],
    greaterThan?: number,
    lessThan?: number
    greaterThanOrEqual?: number,
    lessThanOrEqual?: number
}
