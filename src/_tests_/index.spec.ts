/*
 * @Date: 2020-09-14 10:25:05
 * @LastEditTime: 2020-09-16 12:18:08
 * @FilePath: /learnTest/src/_tests_/index.spec.ts
 * @Author: twy
 * @LastEditors: twy
 */
import { add } from "./add";

test("Index add fun", () => {
    const ret = add(1,2)
    console.log(ret)
    expect(ret).toBe(3)
})