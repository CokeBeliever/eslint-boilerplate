const name = 'CokeBeliever' // 不通过：自定义配置的 no-unused-vars 规则
console.log(age) // 不通过：js recommended 的 no-undef 规则

Promise // 通过：ecmaVersion 默认为 latest 不小于 6（es6），因此 ECMAScript 规范包含 Promise
window // 不通过：ECMAScript 规范并不包含浏览器的全局对象 window
