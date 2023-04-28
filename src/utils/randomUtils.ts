/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-25 11:36:30
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-28 14:11:20
 * @Description: 
 */

/**
 * 产生 >= min，<=max 的随机整数
 * @param {number} min - 整数
 * @param {number} max - 整数
 * @returns {number} 
 */
export function createRandomRange(min: number, max: number): number {
    return createRangeForRandom(Math.random(), min, max)
}

/**
 * 根据 rnd，产生 >= min，<=max 的随机整数
 * @param {number} rnd - 要求 [0, 1), 浮点数 
 * @param {number} min - 整数
 * @param {number} max - 整数
 * @returns {number}
 */
export function createRangeForRandom(rnd: number, min: number, max: number) : number {
    return Math.floor(rnd * (max - min + 1)) + min
}

/**
 * 随机从数组中的获取一项
 * @param {T} arr 数组
 * @returns 数组中的任意一项
 */
export function getRandomArrayElement<T>(arr: T[]): T | null {
    if (!arr || arr.length === 0) {
        return null
    }

    const index = createRandomRange(0, arr.length - 1)

    return arr[index]
}