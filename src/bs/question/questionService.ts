/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-21 23:17:08
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-22 00:35:21
 * @Description: 创建多种模式的题目
 */
import { createFormulaService } from "../formulaService";

export interface QuestionService {
    genPartialMultipleAdditionLessThan20(): string[]
}

export function createQuestionService() {
    const fService = createFormulaService()
    return {
        genPartialMultipleAdditionLessThan20(): string[] {
            const f1 = fService.genFormulas({ name: '', rules: [], resultRule:  {} }, 1, 25)
            const f2 = fService.genFormulas({ name: '', rules: [], resultRule:  {} }, 2, 25)
            const f3 = fService.genFormulas({ name: '', rules: [], resultRule:  {} }, 1, 25)
            const f4 = fService.genFormulas({ name: '', rules: [], resultRule:  {} }, 2, 25)

            const ret: string[] = []
            for (let i = 0;i < 25;i++) {
                ret.push(f1[i])
                ret.push(f2[i])
                ret.push(f3[i])
                ret.push(f4[i])
            }

            return ret;  
        }
    }
}