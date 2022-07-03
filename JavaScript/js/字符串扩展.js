let s = 'hello world!';
s.startsWith('hello')//true
s.endsWith('!')//true
s.includes('o')//true

// 这三个方法接收第二个参数
s.startsWith('world',6)//true
s.endsWith('hello',5)//true   endsWith('hello',n)针对前n个字符
s.includes('hello',6)//false

// repeat() 返回一个新的字符串，表示将原字符串重复n次
'x'.repeat(3) //'xxx'
'x'.repeat(NaN) //'' NaN等同于0