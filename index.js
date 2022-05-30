fetch("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"
, {
    method: 'GET',
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Credentials" : true,
    headers: {
        'Content-Type': 'application/json'
    },
    mode:'cors'
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Request Failed', err));