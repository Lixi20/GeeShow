var url = 'http://192.168.2.15:8080/articles?UserId=5432457';

// XMLHttpRequest对象用于在后台与服务器交换数据
var xhr = new XMLHttpRequest();
//每当readyState改变时就会触发onreadystatechange函数
//0: 请求未初始化
//1: 服务器连接已建立
//2: 请求已接收
//3: 请求处理中
//4: 请求已完成，且响应已就绪

xhr.onreadystatechange = function () {

  //readyStatus == 4或者200 说明请求已经完成
  if (xhr.readyState == 4 && xhr.status == 200) {
    //从服务器获得数据
    function myFunction(th) {
      // console.log(th.target.id);
      var title = th.target.id         //获取当前目标的id

      var myurl = 'http://192.168.2.15:8080/getArticle?UserId=5432457&Title=' + title;     //url拼接

      xhr.onload = function () {          //xhr加载就会去调用上面的function函数
        if (xhr.readyState === 4) {       //如果请求状态等于4
          if (xhr.status === 200) {       //如果请求状态等于200
            console.log(xhr.responseText)   //获取返回值 
            document.getElementById("ma").innerHTML = xhr.responseText;       //将xhr的返回内容放入ma ID的html上面
          }
        }
      };
      xhr.open("GET", myurl, true);     //将值打印出来
      xhr.send(null);
    }

    var obj = JSON.parse(xhr.responseText);   //把返回值转换成一个对象

    var titles = [];           //定义数组
    obj.Articles.forEach((item, index) => {
      titles.push(item.title)                //往数组里面添加东西
    });         //去找对象里的值

    const listItems = titles.map((titles) =>     //将title数组中的每个元素变成<li>标签
      <li><a href="#" id={titles} onClick={myFunction.bind(this)}>{titles}</a> </li>,
    );

    const element = <ul>{listItems}</ul>;         //将listItems插入到<ul>元素中
    ReactDOM.render(                             //渲染进DOM
      element,
      document.getElementById('root')
    );
  }
};

xhr.open('GET', url, true)
xhr.send();                //发送数据

