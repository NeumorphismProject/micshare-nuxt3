import { devicesRoutesController } from '../utils'

export default defineEventHandler((event) => {
  console.log('---- server routes event = ', event)
  const reqUrl = event.node.req.url
  // console.log('---- server routes reqUrl = ', reqUrl)
  const headers = getHeaders(event)
  // console.log('---- server routes headers = ', event)
  const ua = headers['user-agent']
  // console.log('---getAppRoutes=',getAppRoutes())
  if(reqUrl === '/'){
    devicesRoutesController({event, userAgent:ua, routeUrl: '/home', redirectDefaultUrl:true})
  } else {
    // console.log('---- server routes user-agent = ', ua)
    devicesRoutesController({event, userAgent:ua, routeUrl: reqUrl})
  }
})