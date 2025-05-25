async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end') // 微任务P1
}
async function async2() {
  console.log('async2')
  new Promise(function (resolve) {
    console.log('promise3')
    setTimeout(() => {
      resolve() // 宏任务 M1
    }, 0)
  }).then(function () { // 微任务P3
    console.log('promise4')
  })
}
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () { // 微任务P2
  console.log('promise2')
})
console.log('script end')

// 输出
// async1 start
// async2
// promise3
// promise1
// script end
// async1 end
// promise2
// promise4
