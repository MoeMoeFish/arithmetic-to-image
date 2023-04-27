/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-25 11:36:30
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-27 20:29:43
 * @Description: 
 */



/**
 * 产生 >= min，<=max 的随机整数
 * @param {number} min - 整数
 * @param {number} max - 整数
 * @returns {number} 
 */
export function createRandomRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + Math.floor(min)
}

/**
 * 随机从数组中的获取一项
 * @param {T} arr 
 * @returns 
 */
export function getRandomArrayElement<T>(arr: T[]): T | null {
    if (!arr) {
        return null
    }

    const index = createRandomRange(0, arr.length - 1)

    return arr[index]
}