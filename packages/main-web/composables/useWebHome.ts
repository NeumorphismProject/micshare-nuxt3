export default function useWebHome() {
  const deviceType = ref<string>('')
  // TODO: will do it when render on server (here is must be client because XMLHttpRequest getRouteHeader() is by document.xxx)
  onMounted(()=>{
    deviceType.value = getRouteHeader('device-type') || ''
  })
  return {
    deviceType
  }
}