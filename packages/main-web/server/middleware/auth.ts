import { devicesRoutesController, getDeviceType } from '../utils'

export default defineEventHandler((event) => {
  console.log('---- server routes event = ', event)
  const reqUrl = event.node.req.url
  console.log('---- server routes reqUrl = ', reqUrl)
  const headers = getHeaders(event)
  console.log('---- server routes headers = ', event)
  const ua = headers['user-agent']
  console.log('---- server routes user-agent = ', ua)

  const deviceType = getDeviceType({ userAgent:ua })
  setResponseHeader(event, 'device-type', deviceType)
  devicesRoutesController({web:'/home', ipad:'/p.home', mobile:'/m.home'},{event, userAgent:ua, routeUrl: reqUrl})

})