1. window下的location对象

   * location.hash
   * location.host
   * location.port
   * location.href
   * location.pathName
   * location.protocal
   * location.search
   * location.passWord
   * location.origin

2. 正则表达式

   ``` 
   function getQueryString() {
   	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
   	var r = window.location.search.subString(1).match(reg);
   	if(r!=null) {
   		return unescape(r[2]);
   	}
   	return null;
   }
   ```

3. split拆分

   ``` 
   function getRequests() {
   	var url = location.search;
   	var res = {};
   	if(url.indexOf('?')!=-1) {
   		var str = url.subString(1);
   		strs = str.split('&');
   		for(let i=0;i<strs.length;i++) {
   			res[strs[i].split('=')[0]] = unescape[strs[i].split('=')[1]];
   		}
   	}
   	re
   }
   ```

   

