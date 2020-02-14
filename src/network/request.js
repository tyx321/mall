import axios from 'axios'

export function request(config) {
  //创建axios实例
    const instance1 = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:10000
    })
  //拦截器的使用
  // instance1.interceptors.request.use(aaa =>{
  //   console.log(aaa);
  //   return aaa
  // },err =>{
  //   console.log(err);
  // })
  instance1.interceptors.response.use(aaa =>{
    // console.log(aaa);
    return aaa.data
  },err=>{
    console.log(err);
  })

    //发送正真的网络请求
  return instance1(config)
}



