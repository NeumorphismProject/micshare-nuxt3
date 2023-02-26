import { getDeviceType } from '~/server/utils'

export default function useWebHome() {
  const deviceType = ref<string>('12222')
  deviceType.value = 'asdfasfd'
  const headers = useRequestHeaders()
  deviceType.value = getDeviceType({userAgent:headers['user-agent']})

  return {
    deviceType
  }
}