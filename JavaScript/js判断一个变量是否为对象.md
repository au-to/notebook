例如：var obj = {}

1. toString()

   ``` 
   Object.prototype.toString().call(obj) === '[Object Object]'
   ```

2. constructor()

   ``` 
   obj.constructor === Object
   ```

3. typeOf

   ``` 
   typeof obj === Object
   
   // 根据typeof判断对象也不太准确
   表达式                       返回值
   typeof undefined           'undefined'
   typeof null                'object'
   typeof true                'boolean'
   typeof 123                 'number'
   typeof "abc"               'string'
   typeof function() {}       'function'
   typeof {}                  'object'
   typeof []                  'object'
   ```

4. instanceof

   ``` 
   注意：arr instanceof === 'Object'
   	 obj instanceof === 'Object'
   ```

5. $.isPlainObject()：判断指定参数是否是一个纯粹的对象（所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的。）

   ``` 
   $.isPlainObject()
   ```