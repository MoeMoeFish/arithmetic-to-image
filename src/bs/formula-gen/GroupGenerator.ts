import type { RuleGroup } from "../arith-rules/RuleGroup";

/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-14 10:17:55
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-14 10:35:41
 * @Description: 
 */
export interface GroupGenerator {
    generate(): Node | null
}

export function createGroupGenerator(rule: RuleGroup) {
    return {
        generate(): Node | null {
            const rnd = Math.random()
            const index = Math.floor(rnd * rule.showTypes.length) 
            const showType = rule.showTypes[index]

            if (showType == "hide") {
                return null
            }

            return null
        }
    }
}