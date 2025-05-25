console.log('A'); // 同步 1

setTimeout(() => { // 宏任务 M1
  console.log('B'); // M1 同步代码 1
  Promise.resolve().then(() => { // M1 的微任务 m1.1
    console.log('C');
  });
  Promise.resolve().then(() => { // M1 的微任务 m1.2
    console.log('D');
  });
  console.log('E'); // M1 同步代码 2
}, 0);

Promise.resolve().then(() => { // 微任务 P1
  console.log('F');
  setTimeout(() => { // 宏任务 M2 (由微任务 P1 注册)
    console.log('G');
  }, 0);
}).then(() => { // 微任务 P2 (链在 P1 之后)
  console.log('H');
});

async function main () {
  console.log('I'); // main 函数内的同步代码 (同步 2)
  const val = await Promise.resolve('J'); // await 右边是立即 resolved 的 Promise
  // await 后面的代码作为微任务 P_MainContinuation 执行
  console.log(val); // 微任务 P_MainContinuation 的一部分
  Promise.resolve().then(() => console.log('K')); // 微任务 P_MainContinuation 注册的微任务 P3
  console.log('L'); // 微任务 P_MainContinuation 的一部分
}

main();

console.log('M'); // 同步 3

// A
// I
// M
// F
// J
// L
// H
// K
// B
// E
// C
// D
// G