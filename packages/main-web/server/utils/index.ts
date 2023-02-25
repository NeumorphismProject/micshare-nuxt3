
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
export function devicesRoutesController({web,ipad,mobile}:DevicesRoutes, {event, userAgent, routeUrl}:DevicesRoutesControllerRequestParams){
  const ua = userAgent || ''
  const url = routeUrl || ''
  if (url === web) {
    if (ua.includes('iPad')) {
      return sendRedirect(event, ipad);
    }
    if (ua.includes('iPhone')) {
      return sendRedirect(event, mobile)
    }
  } else if (url === ipad) {
    if (ua.includes('iPhone')) {
      return sendRedirect(event, mobile)
    }
    if (!ua.includes('iPhone') && !ua.includes('iPad')) {
      return sendRedirect(event, web)
    }
  } else if (url === mobile) {
    if (ua.includes('iPad')) {
      return sendRedirect(event, ipad)
    }
    if (!ua.includes('iPhone') && !ua.includes('iPad')) {
      return sendRedirect(event, web)
    }
  }
}