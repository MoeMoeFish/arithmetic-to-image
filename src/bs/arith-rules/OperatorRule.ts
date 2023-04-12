/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:06:19
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 20:23:49
 * @Description: 
 */

import type { ArithmeticRule } from "./ArithmeticRule";

export type OperatorRuleType = 'general'

export type OperatorOption = '+' | '-' | '*' | '/'
export interface OperatorRule extends ArithmeticRule {
    ruleType: OperatorRuleType,
    options: OperatorOption[]
}
