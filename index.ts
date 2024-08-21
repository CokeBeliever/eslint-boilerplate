const name = 'CokeBeliever' // 不通过：自定义配置的 @typescript-eslint/no-unused-vars 规则
const gender: any = 'male' // 不通过：ts recommended 的 @typescript-eslint/no-explicit-any 规则

console.log(gender)
console.log(age) // 不通过：js recommended 的 no-undef 规则

Promise
window
