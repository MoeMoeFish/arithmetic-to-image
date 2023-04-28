/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-25 20:14:13
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-28 14:12:06
 * @Description: 
 */
import { assert, describe, expect, it } from 'vitest'
import { createRandomRange, getRandomArrayElement, createRangeForRandom } from '@/utils/randomUtils'

describe('createRandomRange', () => {
    function assertCreateRandomRange(min:number, max: number) {
        const ret = createRandomRange(min, max)
        assert.isTrue(ret >=min && ret <= max)
    }
    it('createRandomRange', () => {
        assertCreateRandomRange(0, 10)
        assertCreateRandomRange(10, 11) 
        assertCreateRandomRange(-10, 0) 
        assertCreateRandomRange(-10, -5) 
        assertCreateRandomRange(-10, 20) 
    })
})

describe('test createRangeForRandom', () => {
    it('createRangeForRandom boundary', () => {
        assert.equal(-2, createRangeForRandom(0, -2, -1))
        assert.equal(-1, createRangeForRandom(0.999, -2, -1))
        assert.equal(1, createRangeForRandom(0, 1, 2))
        assert.equal(2, createRangeForRandom(0.999, 1, 2))
        assert.equal(-10, createRangeForRandom(0, -10, 20))
        assert.equal(20, createRangeForRandom(0.999, -10, 20))
        assert.equal(999, createRangeForRandom(0, 999, 999))
        assert.equal(999, createRangeForRandom(0.999999999, 999, 999))
    })

    it('createRangeForRandom random', () => {
        assert.equal(-19, createRangeForRandom(0.1, -20, -10))
    })
})

describe('test getRandomArrayElement', () => {
    function assertGetRandomArrayElement(arr) {
        const ret = getRandomArrayElement(arr)

        expect(ret).is.oneOf(arr)
    }

    it('getRandomArrayElement', () => {
        assertGetRandomArrayElement([1,2,3,0])
        assertGetRandomArrayElement(['a','b','c', 0])
        assertGetRandomArrayElement([{ a: 1 },{b: 2},{c: 3}])
    })

    it('getRandomArrayElement null', () => {
        assert.isNull(getRandomArrayElement([]))
    })
})