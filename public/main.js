let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}.json`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response);
                array.forEach((item,index)=>{
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
            }
        n += 1;
        }
    }
    request.send();
}

getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const bool = JSON.parse(request.response);
                myName.textContent = bool.name;
            }
        }
    }
    request.send();
}
getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent;
                console.log(text.trim());
            }
        }
    }
    request.send();
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }
        }
    }
    request.send();
}
getJs.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script');
                script.innerHTML = request.response;
                document.body.appendChild(script);
            }
        }
    }
    request.send();
}
getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');  // readyState = 1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 下载完成
            if (request.status >= 200 && request.status < 300) {
                // 下载完成，但不知道是否成功

                // 创建一个style标签
                const style = document.createElement('style');
                // 填写style内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            }else {
                alert('加载css失败')
            }
        }
    }
    request.send();   // readyState = 2
}
