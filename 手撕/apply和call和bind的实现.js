/**
 * 手写call
 * @param 参数一个个传入
 */

Function.prototype.myCall = function (context, ...args) {
  // 如果context是null || undefined，默认全局对象（浏览器里是window，node里是global)
  context = context || globalThis;

  // 给context临时添加一个属性fn，指向当前函数
  const fn = Symbol('fn'); // 避免覆盖已有属性
  context[fn] = this;

  // 执行函数
  const res = context[fn](...args);
  // 删除临时属性
  delete context[fn];

  return res;
}


/**
 * 手写apply
 * @param 传入参数列表
 */
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fn = Symbol('fn');
  context[fn] = this;

  let res;
  if (Array.isArray(args)) {
    res = context[fn](...args);
  } else {
    res = context[fn]();
  }

  delete context[fn];
  return res;
}

/**
 * 手写bind
 * @param
 */
Function.prototype.myBind = function (context, ...args1) {
  const self = this;

  function bound (...args2) {
    // 如果是用 new 调用，则this指向实例，不用绑定context
    if (this instanceof bound) {
      return new self(...args1, ...args2);
    }
    // 普通情况：用call绑定context
    return self.call(context, ...args1, ...args2);
  }

  // 继承原型（保证new出来的对象原型不会丢
  bound.prototype = Object.create(self.prototype);
  
  return bound;
}