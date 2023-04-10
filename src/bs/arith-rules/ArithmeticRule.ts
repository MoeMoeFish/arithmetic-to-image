/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:06:47
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-10 20:25:16
 * @Description: 生成规则的基本类型
 */
export type RuleType = 'number' | 'op'

/**
 * 规则的基类，主要用于表示规则关系
 */
export interface ArithmeticRule {
    type: RuleType,
    subRules: ArithmeticRule[]
}
