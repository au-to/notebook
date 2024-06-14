* `useEffect` 用于处理副作用,副作用可以包括数据获取、订阅、手动更改DOM等,而不需要使用类组件中的生命周期方法（如 componentDidMount、componentDidUpdate 和 componentWillUnmount）。
* 第二个参数是依赖数组，控制副作用何时执行。
* 返回的函数用于清理副作用。
* 可以在一个组件中使用多个 useEffect 来处理不同的副作用。

### 基本用法
```
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // 这里可以执行副作用，例如数据获取
    console.log('Component did mount or update');

    // 清理函数（可选），在组件卸载或更新之前执行
    return () => {
      console.log('Cleanup');
    };
  });

  return (
    <div>
      My Component
    </div>
  );
}
```

### 依赖数组
```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs because count changed:', count);
  }, [count]); // 只有 count 变化时，才会重新执行副作用

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 清理副作用
```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    // 返回一个清理函数，用于清除副作用
    return () => {
      clearInterval(timer);
      console.log('Cleanup on unmount or before next effect run');
    };
  }, []); // 空依赖数组意味着这个副作用只在组件挂载和卸载时执行一次

  return (
    <div>
      My Component
    </div>
  );
}
```

### 使用多个useEffect
```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Count effect:', count);
  }, [count]);

  useEffect(() => {
    console.log('Text effect:', text);
  }, [text]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
```