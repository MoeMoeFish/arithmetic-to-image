/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 20:11:06
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 17:35:41
 * @Description: 用于生成算式的规则合集
 */
import type { ArithmeticRule } from "./ArithmeticRule";
import type { ResultRule } from "./ResultRule";

export interface FormulaRule {
    // 算式规则的名字，用于标识用途，如两位数加减法
    name: string,
    // 规则的集合，用于生成算式
    rules: ArithmeticRule[],
    resultRule: ResultRule,
}
