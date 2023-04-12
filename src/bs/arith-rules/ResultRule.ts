/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-12 16:43:17
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 17:34:39
 * @Description: 计算结果的规则，比如计算结果不能是
 */
export interface ResultRule {
    greaterThan?: Number, // 大于特定数字
    lessThan?: Number // 小于特定数字
    greaterThanOrEqual?: Number, // 大于等于特定数字
    lessThanOrEqual?: Number // 小于等于特定数字
}