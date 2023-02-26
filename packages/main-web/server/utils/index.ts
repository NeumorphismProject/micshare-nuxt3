
export interface DevicesRoutesControllerRequestParams {
  event: any
  userAgent?: string
  routeUrl?: string
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
export function devicesRoutesController({event, userAgent, routeUrl}:DevicesRoutesControllerRequestParams):void{
  const ua = userAgent || ''
  const url = routeUrl || ''
  const deviceType = getDeviceType({userAgent:ua})
  if(deviceType === 'web'){
    if(url.includes('/p/') || url.includes('/m/')){
      sendRedirect(event, url)
    }
  } else if(deviceType === 'ipad') {
    if((!url.includes('/p/') && !url.includes('/m/')) || url.includes('/m/')){
      sendRedirect(event, url)
    }
  } else if(deviceType === 'mobile') {
    if((!url.includes('/p/') && !url.includes('/m/')) || url.includes('/p/')){
      sendRedirect(event, url)
    }
  }
}