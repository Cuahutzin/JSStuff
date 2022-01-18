let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){//Is it completes?
            if(xhttp.status === 200){// it was success
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error= new Error('Error ' + url_api);
            }
        }
    }
    xhttp.send();
}