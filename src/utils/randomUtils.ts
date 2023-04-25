/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-25 11:36:30
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-25 20:27:31
 * @Description: 
 */



/**
 * 产生 >= min，<=max 的随机整数
 * @param {any} min:number
 * @param {any} max:number
 * @returns {number} 
 */
export function createRandomRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + Math.floor(min)
}

export function getRandomArrayElement<T>(arr: T[]): T {
    const index = createRandomRange(0, arr.length - 1)

    return arr[index]
}