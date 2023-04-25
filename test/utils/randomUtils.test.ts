/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-25 20:14:13
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-25 20:28:21
 * @Description: 
 */
import { assert, describe, expect, it } from 'vitest'
import { createRandomRange } from '@/utils/randomUtils'

describe('test randomUtils', () => {
    function assertCreateRandomRange(min:number, max: number) {
        const ret = createRandomRange(min, max)
        console.log('assertCreateRandomRange', ret)
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