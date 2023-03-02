
export interface DevicesRoutesControllerRequestParams {
  event: any
  userAgent?: string
  routeUrl?: string
  redirectDefaultUrl?: boolean
}
type DeviceType = 'web' | 'ipad' | 'mobile'
export function getDeviceType({userAgent}:{userAgent?:string}):DeviceType|''{
  const ua = userAgent || ''
  if (ua.includes('iPad')) {
    return 'ipad'
  }
  if (ua.includes('iPhone')) {
    return 'mobile'
  }
  if (!ua.includes('iPhone') && !ua.includes('iPad')) {
    return 'web'
  }
  return ''
}

/**
 * 前端 app/router.options.ts 中已经规定三端设备的路由命名规则，这里的判断逻辑也是与之匹配的
 * 若路由规则有所变化，则这里的判断逻辑也需要进行想要的改变
 * @param param0 
 */
export function devicesRoutesController({event, userAgent, routeUrl, redirectDefaultUrl}:DevicesRoutesControllerRequestParams):any{
  const ua = userAgent || ''
  const url = routeUrl || ''
  let toUrl = url
  const deviceType = getDeviceType({userAgent:ua})
  if(deviceType === 'web'){
    if(url.includes('/p.') || url.includes('/m.')){
      toUrl = url.replace('/p.','/').replace('/m.','/')
      return sendRedirect(event, toUrl)
    }
  } else if(deviceType === 'ipad') {
    if(!url.includes('/p.')){
      toUrl = url.replace('/m.','')
      toUrl = toUrl.substring(0,1) === '/' ? toUrl.substring(1) : toUrl
      return sendRedirect(event, `/p.${toUrl}`)
    }
  } else if(deviceType === 'mobile') {
    if(!url.includes('/m.')){
      toUrl = url.replace('/p.','')
      toUrl = toUrl.substring(0,1) === '/' ? toUrl.substring(1) : toUrl
      return sendRedirect(event, `/m.${toUrl}`)
    }
  }
  if(redirectDefaultUrl){
    return sendRedirect(event, toUrl)
  }
}