/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-12 15:32:48
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-21 23:35:38
 * @Description: 抽象语法树基础节点
 */
export type OperatorValueType = '+' | '-' | '*' | '/'
export type NodeValueType = number | OperatorValueType | null 
export type NodeType = 'number' | 'op' | 'parentheses' | 'empty'

export interface Node {
    nodeType: NodeType,
    value: NodeValueType,
    left?: Node,
    right?: Node,
}

export function createEmptyNode(): Node {
    return { nodeType: 'empty', value: null }
}