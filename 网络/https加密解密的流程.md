https加密解密流程分成以下8个步骤：

1. 客户端发起https请求，即用户在浏览器输入一个https网址，然后连接到服务端的443端口
2. 服务端的配置，采用https协议的服务器必须要有一套数字证书，这套证书其实就是一对公钥和私钥
3. 传送证书，这个证书其实就是公钥，只是包含了很多信息，如证书的颁发机构，过期时间等等
4. 客户端解析证书，这部分工作是由客户端的SSL/TLS来完成的；首先会验证公钥是否有效，比如颁发机构，过期时间等等，如果发现异常，则会弹出一个警示框，提示证书存在的问题。如果证书没有问题，那么就生成一个随机值。然后用证书（也就是公钥）对这个随机值进行加密。
5. 传送加密信息，这部分传送的是用证书加密后的随机值，目的是让服务端得到这个随机值，以后客户端和服务端的通信就可以通过这个随机值来进行加密解密了
6. 服务端解密信息，服务端用私钥解密后，得到了客户端传过来的随机值，然后把内容通过该随机值进行对称加密，将信息和私钥通过某种算法混合在一起，这样除非知道私钥，不然无法获取内容， 而正好客户端和服务端都知道这个私钥，所以只要加密算法够彪悍，私钥够复杂，数据就够安全。
7. 传输加密后的信息，这部分信息就是服务端用私钥加密后的信息，可以在客户端用随机值解密还原
8. 客户端解密信息，客户端用之前生成的私钥解密服务端传过来的信息，于是获取了解密后的内容。 整个过程第三方即使监听到了数据，也束手无策。

总结：

* https综合使用了对称加密和非对称加密算法：使用非对称加密算法传送密钥，双方再使用对称加密算法进行数据的加密和解密
* 客户端请求建立https连接
* 服务器生成密钥对（公钥与私钥），并把公钥传给客户端；即这一步实际使用非对称加密
* 客户端拿到公钥，生成一随机值（其实就是密钥），使用公钥对随机值进行加密并传给服务器
* 服务端用自己的私钥解密，得到客户端传过来的随机值（密钥）
* 此后，服务端使用该随机值对数据进行加密并传给客户端
* 客户端收到信息再用自己的随机值（密钥）对信息进行解密