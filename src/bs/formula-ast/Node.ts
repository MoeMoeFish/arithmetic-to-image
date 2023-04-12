/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-12 15:32:48
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-12 16:31:26
 * @Description: 抽象语法树基础节点
 */
export type OperatorValueType = '+' | '-' | '*' | '/'
export type NodeValueType = number | OperatorValueType | null 
export type NodeType = 'number' | 'op' | 'parentheses'


export interface Node {
    nodeType: NodeType,
    value: NodeValueType,
    left?: Node,
    right?: Node,
}