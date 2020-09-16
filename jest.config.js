/*
 * @Date: 2020-09-14 10:13:59
 * @LastEditTime: 2020-09-16 14:43:22
 * @FilePath: /study_VTU_with_Vue3.0/jest.config.js
 * @Author: twy
 * @LastEditors: twy
 */
module.exports = {
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node']
}