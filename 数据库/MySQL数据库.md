### MySQL数据库

- 关系型数据库（传统型数据库）

#### 传统型数据库的数据组织结构

* 数据库
* 数据表
* 数据行
* 字段

#### 数据库的基本使用

##### select语句：从表中查询数据，查询结果存储在一个表中（关键字对大小写不敏感）

``` 
从from指定的表中，查询出所有的数据：
SELECT * FROM 表名称

从from指定的表中，查询出指定列的数据：
SELECT 列名称 FROM 表名称 
```

##### insert into 语句：向数据表中插入新的数据行

``` 
insert into table_name(列1，列2...) values(值1，值2...);
```

##### update语句：用于修改表中的数据

``` 
update 表名 set 列名 = 新值 where 列名 = 某值
// 把users列表中id为7的用户密码，更新为888
updata users set password='888' where id=7;
// 更新多个值
update users set password=888,status=1 where id=7;
```

##### delete语句：删除某一行

``` 
delete from 表名 where 列名
delete from users where id=7;
```

##### where子句：限定选择的标准

``` 
select * from users where id>=2;
select * from users where status=1;
select * from users where id!=1;
```

##### and和or运算符：在where子句中，把两个或多个条件结合起来

``` 
select * from users where id<4 and status=0;
```

##### order by：根据指定的列，对结果集进行排序

默认升序排序，降序：加desc关键字

``` 
select * from users order by id desc;
// 多重排序
select * from users order by status desc,username asc;
```

##### count(*)：用于返回结果的总数居条数

``` 
select count(*) from users where status=0;
// as设置别名
select count(*) as total from users where status=0;
```

##### 在项目中操作数据库

1. 安装第三方模块-mysql；
2. 通过mysql模块连接到MySQL数据库；
3. 通过mysql模块执行SQL语句；

``` 
const mysql = require('mysql');
const db = mysql.createPool({
  host: '127.0.0.1', //数据库ip地址
  user: 'root', //登录数据库的账号
  password: 'zhb10632', //数据库密码
  database: 'my_db_01' //指定要操作哪个数据库
})

// 测试mysql模块能否正常工作
db.query('select1', (err, results) => {
  if (err) { return err.message } else {
    console.log(results);
  }
})

// 查询数据
const strsql = 'select * from users';
db.query(strsql, (err, results) => {
  if (err) {
    return err.message;
  } else {
        console.log(results);; //返回一个数组
  }
})

// 插入数据
const user = { username: 'xm', password: 1234 };
const strsql = 'insert into users(username,password) values(?,?)'; //?占位符
db.query(strsql, [user.username, user.password], (err, results) => {
  if (err) {
    return err.message;
  } else {
    // 判断是否插入数据库(results.affectedRows属性)
    if (results.affectedRows == 1) {
      console.log('插入数据成功');
    }
  }
});

// 插入数据的便捷方法
const user = { username: 'xh', password: 1234 };
const strsql = 'insert into users set ?';
db.query(strsql, user, (err, results) => {
  if (err) {
    console.log(err.message);
  } else {
    if (results.affectedRows == 1) {
      console.log('插入数据成功');
    }
  }
})

// 更新用户信息
const user = { username: 'ky', password: '123', id: 10 };
const strsql = 'update users set username=?,password=? where id= ?';
db.query(strsql, [user.username, user.password, user.id], (err, results) => {
  if (err) {
    console.log(err.message);
  } else {
    if (results.affectedRows == 1) {
      console.log('更新数据成功');
    }
  }
});

// 更新数据的便捷方式
const user = { id: 10, username: 'jkl', password: 1323 };
const strsql = 'update users set ? where id=?';
db.query(strsql, [user, user.id], (err, results) => {
  if (err) {
    console.log(err.message);
  } else {
    if (results.affectedRows == 1) {
      console.log('更新成功');
    }
  }
});

// 删除数据
const strsql = 'delete from users where id=?';
db.query(strsql, 10, (err, results) => {
  if (err) {
    console.log(err.message);
  } else {
    if (results.affectedRows == 1) {
      console.log('删除成功');
    }
  }
})

// 标记删除
const strsql = 'update users set status=1 where id=?';
db.query(strsql, 9, (err, results) => {
  if (err) {
    console.log(err.message);
  } else {
    if (results.affectedRows == 1) {
      console.log('标记删除成功');
    }
  }
})
```



