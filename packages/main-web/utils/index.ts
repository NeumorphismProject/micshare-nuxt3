
/**
 * 【已放弃使用】保留参考而已
 * 这种获取 headers 的方式只能在客户端渲染时使用，SSR中不适用
 * @returns 
 */
export function getRouteHeaders(){
  const req = new XMLHttpRequest();
  req.open('GET', document.location.href, false);
  req.send(null);
  const headerArr = req.getAllResponseHeaders().split('\n');
  const headers:{[key:string]:string} = {};
  headerArr.forEach(item=>{
      if(item!==''){
        const index = item.indexOf(':');
        const key = item.slice(0,index);
        const value = item.slice(index+1).trim();
        headers[key] = value
    }
    
  })
  return headers
}

export function getRouteHeader(headerKey:string){
  return getRouteHeaders()[headerKey]
}