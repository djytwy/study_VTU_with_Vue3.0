/*
 * @Date: 2020-09-14 11:19:55
 * @LastEditTime: 2020-09-16 10:47:55
 * @FilePath: /learnTest/src/components/helloWorld/__test__/helloWorld.spec.js
 * @Author: twy
 * @LastEditors: twy
 */
import { mount } from "@vue/test-utils";
import Hello from "../helloWorld.vue";

it('content', () => {
    const Comp = {
        template: `<div><Hello /></div>`
    }
    const wrapper = mount(Comp, {
        global: {
            components: {
                Hello
            }
        }
    })
    expect(wrapper.findComponent({ name: 'HelloWorld' }).text()).toContain('Hello Jest')
})
