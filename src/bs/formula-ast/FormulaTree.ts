/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-12 15:47:47
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 16:31:02
 * @Description: 
 */
import type { Node } from "./Node";

const obelus = '÷';

export interface FormulaTree {
    tree?: Node,
    calculate(): Number,
    createFormula(): string
}

export function createFormulaTree(node: Node) {
    return {
        tree: node,
        calculate(): Number {
            return 0 // todo!
        },
        createFormula(): string {
            return '' // todo!
        }
    }
}