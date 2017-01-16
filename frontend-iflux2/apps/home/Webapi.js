/**
 * @flow
 */

/**
 * 获取所有App信息
 */
const fetchApps = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      fetch('http://localhost:3000/__mock__/apps.json')
        .then(res => res.json())
        .then((res) => {
          console.log('res...', res)
          resolve({err: null, res: res})
        })
    }, 1000)
  })
}

export {
  fetchApps
}