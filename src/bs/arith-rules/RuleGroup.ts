/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-12 13:41:23
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 14:43:44
 * @Description: 
 */
import type { ArithmeticRule } from "./ArithmeticRule"
import type { NumberRule } from "./NumberRule"
import type { OperatorRule } from "./OperatorRule"
export type RuleGroupShowType = 'show' | 'hide'

export interface RuleGroup extends ArithmeticRule {
    showTypes: RuleGroupShowType[],
    rules: (NumberRule | OperatorRule)[]
}
