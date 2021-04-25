interface IResponse {
  status: number,
  config: any,
  data: any,
  headers: any,
  statusText: string,
  request: any
}
export default {
  DownloadFileFn (Response: IResponse, blobType: string): void {
    let fileName = Response.headers['content-disposition'].split(';')[1].split('filename=')[1]
    const fileNameUnicode = Response.headers['content-disposition'].split('filename*=')[1]
    if (fileNameUnicode) { // 当存在 filename* 时，取filename* 并进行解码（为了解决中文乱码问题）
      fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
    }
    const blob = new Blob([Response.data], {
      type: blobType // 将会被放入到blob中的数组内容的MIME类型
    })
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // ie兼容性
      navigator.msSaveBlob(blob, fileName)
    } else {
      const objectUrl = URL.createObjectURL(blob) // 生成一个url
      const downloadElement = document.createElement('a')
      downloadElement.href = objectUrl
      downloadElement.download = fileName
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)
      window.URL.revokeObjectURL(objectUrl)
    }
  }
}
