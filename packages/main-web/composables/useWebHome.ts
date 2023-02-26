import { getDeviceType } from '~/server/utils'

export default function useWebHome() {
  const deviceType = ref<string>('')
  const headers = useRequestHeaders()
  deviceType.value = getDeviceType({userAgent:headers['user-agent']})

  return {
    deviceType
  }
}