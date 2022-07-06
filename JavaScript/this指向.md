**this指向问题常包括两类：**

* 普通函数中的this
* 箭头函数中的this

**普通函数**

* 谁调用了这个函数，函数中的this就指向谁

  ``` 
  let getThis = function () {
  	console.log(this);
  }
  let obj={
  	name:"Jack",
  	getThis:function(){
  		console.log(this);
   	 }
  }
  getThis(); //window,getThis()方法是由window在全局作用域中调用的
  obj.getThis(); //obj,此处的getThis()方法是obj这个对象调用的，所以this指向obj
  ```

**匿名函数**

* 匿名函数的执行具有全局性，则匿名函数中的this指向window，而不是调用该匿名函数的对象

  ``` 
  var obj = {
  	getThis: function(){
  		return function() {
  			console.log(this);
  		}
  	}
  }
  obj.getThis() //window
  
  // 如果想在上述代码中使this指向调用该方法的对象，可以提前把this传值给另外一个变量(_this)
  var obj = {
  	getThis: function(){
  		let _this = this;
  		return function() {
  			console.log(_this);
  		}
  	}
  }
  obj.getThis() //obj
  ```

  **箭头函数**

  * 箭头函数中的this在函数定义时确定，而不是调用时

  * 箭头函数的this指向父级作用域的执行上下文

  * 技巧：因为js中除了全局作用域，其他作用域都是由函数创建出来的，所以如果想确定this的指向，则找到离箭头函数最近的function，与该function平级的执行上下文中的this即是箭头函数中的this）

  * 箭头函数无法使用apply、call和bind方法改变this指向，因为其this值在函数定义的时候就被确定了下来

    ``` 
    例1：
    // 距离箭头函数最近的是getThis(){}，与该函数平级的执行上下文是obj中的执行上下文，所以箭头函数中的this指向obj
    let obj = {
    	getThis: function() {
    		return ()=>{
    			console.log(this); //obj
    		}
    	}
    }
    
    例2：
    该段代码中存在两个箭头函数，this找不到对应的function(){}，所以一直往上找直到指向window
    let obj = {
    	getThis: ()=>{
    		return ()=>{
    			console.log(this); //wi
    		}
    	}
    }
    ```

    