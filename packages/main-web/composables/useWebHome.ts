import axios from 'axios'

export default function useWebHome() {
  
  const headers = useRequestHeaders()

  const deviceType = ref<string>('')
  const resDataFetch = ref<any>('x空')
  const resDataAxios = ref<any>('y空')

  deviceType.value = getDeviceType({userAgent:headers['user-agent']})

  const queryData = async () => {
    const {data}:any = await useAsyncData(async ()=>$fetch('/root', {
      baseURL: 'https://mock.apifox.cn/m1/2031610-0-default'
    }))
    console.log('------ fetch data = ', data.value)
    resDataFetch.value = data.value.infoList[0].name
  }
  queryData()

  // Axios 测试：网页里查看源码，看这里 resDataAxios 绑定的变量值在源码中是否存在，若不存在则说明 axios 在 nuxt3 的 useAsyncData 中无法实现服务端异步请求渲染
  const queryDataByAxios = async () => {
    const {data}:any = await useAsyncData(async ()=>{
      const res = await axios({
        method: 'get',
        url: 'https://mock.apifox.cn/m1/2031610-0-default/root',
        responseType: 'stream'
      })
      console.log('------axios data = ', JSON.parse(res.data))
      return JSON.parse(res.data).infoList[0].name
    })
    console.log('------axios server data = ', data)
    resDataAxios.value = data.value
  }
  queryDataByAxios()

  // 在客户端发起 axios 请求测试
  // const queryDataByAxiosOnClient = async () => {    
  //   const {data} = await axios({
  //     method: 'get',
  //     url: 'https://mock.apifox.cn/m1/2031610-0-default/root',
  //     responseType: 'stream'
  //   })
  //   console.log('------axios client data = ', JSON.parse(data))
  //   resDataAxios.value = JSON.parse(data).infoList[0].name
  // }

  // onMounted(()=>{
  //   queryDataByAxiosOnClient()
  // })

  return {
    deviceType,
    resDataFetch,
    resDataAxios
  }
}