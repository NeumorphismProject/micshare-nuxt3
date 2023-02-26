
export interface DevicesRoutes {
  web: string
  ipad: string
  mobile: string
}
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
export function devicesRoutesController({web,ipad,mobile}:DevicesRoutes, {event, userAgent, routeUrl}:DevicesRoutesControllerRequestParams):DeviceType|null{
  const ua = userAgent || ''
  const url = routeUrl || ''
  if (url === web) {
    if (ua.includes('iPad')) {
      sendRedirect(event, ipad);
      return 'ipad'
    }
    if (ua.includes('iPhone')) {
      sendRedirect(event, mobile)
      return 'mobile'
    }
  } else if (url === ipad) {
    if (ua.includes('iPhone')) {
      sendRedirect(event, mobile)
      return 'mobile'
    }
    if (!ua.includes('iPhone') && !ua.includes('iPad')) {
      sendRedirect(event, web)
      return 'web'
    }
  } else if (url === mobile) {
    if (ua.includes('iPad')) {
      sendRedirect(event, ipad)
      return 'ipad'
    }
    if (!ua.includes('iPhone') && !ua.includes('iPad')) {
      sendRedirect(event, web)
      return 'web'
    }
  }
  return null
}