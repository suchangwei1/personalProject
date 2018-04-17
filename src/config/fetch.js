import {
  baseUrl
} from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {

  type = type.toUpperCase();
  url = baseUrl + url;
  //console.log(process.env.NODE_ENV ,type,data);
  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })
   // console.log(dataStr);
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }
  if(method == 'fetch'){
   let  requestConfig={
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body:{
          value:JSON.stringify(data)
      }
    }
    try {
        const response=await fetch(url,requestConfig);
        const responseJson=await  response.json();
       // console.log(responseJson)
        return responseJson
    }catch(error) {
      throw new Error(error)
    }
  }
}
