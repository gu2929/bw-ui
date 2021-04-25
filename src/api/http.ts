import axios from 'axios'
import router from '@/router/index'
import authorization from '@/api/author'
import store from '@/store'
import {
  ElMessageBox,
  ElMessage
} from 'element-plus'
axios.defaults.timeout = 20000
axios.defaults.withCredentials = false
axios.defaults.baseURL = process.env.VUE_APP_URL
interface IError {
  response: any
}
interface IData {
  [propName: string]: any;
}
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    const token: string = JSON.parse(authorization())
    store.commit('SETLOADING', true)
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers = {
        'Content-Type': 'application/json',
        Authorization: token
      }
    } else {
      config.headers = {
        'Content-Type': 'application/json'
      }
    }
    config.data = JSON.stringify(config.data)
    return config
  }
)
function codeStatus (error: IError): void {
  const code = error.response.data.code
  switch (code) {
    case 400:
      ElMessage.error(error.response.data.messageInfo)
      break
    case 4001:
      if (error.response.data.messageInfo) {
        ElMessage.error(error.response.data.messageInfo)
      } else if (error.response.data.messageKey) {
        ElMessage.error(error.response.data.messageKey)
      } else {
        ElMessage.error('接口返回值不规范')
      }
      break
    case 4002:
      ElMessage.error(error.response.data.messageInfo)
      break
    default:
      ElMessageBox({
        type: 'warning',
        title: '提示',
        message: '系统异常，请稍后再试'
      })
  }
}
axios.interceptors.response.use(
  response => {
    store.commit('SETLOADING', false)
    return response
  },
  error => {
    store.commit('SETLOADING', false)
    const arr = ['key_user_no_have_merchant_error', 'key_ps_and_user_name_error']
    if (error.response) {
      switch (error.response.status) {
        case 400:
          codeStatus(error)
          // return error.response
          break
        case 403:
          ElMessageBox({
            type: 'warning',
            title: '提示',
            message: '权限未通过校验'
          })
          break
        case 404:
          ElMessageBox({
            type: 'warning',
            title: '提示',
            message: '链接出错，请检查网络状况'
          })
          break
        case 401:
          if (arr.includes(error.response.data.messageKey)) {
            ElMessage.error(error.response.data.messageInfo)
          } else {
            ElMessageBox({
              type: 'warning',
              title: '提示',
              message: '登录过期, 请先登录'
            })
            router.push({
              path: '/login'
            })
          }
          break
        case 500:
          ElMessageBox({
            type: 'warning',
            title: '提示',
            message: '系统异常，请稍后再试'
          })
          break
        default:
          ElMessageBox({
            type: 'warning',
            title: '提示',
            message: '链接出错，请检查网络状况'
          })
      }
    } else {
      ElMessage.error('请检查您的网络')
    }
    return Promise.reject(error)
  })
export function fetch (url: string, params: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        if (response && response.data) {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装get Download方法
 * @param url
 * @param blob
 * @returns {Promise}
 */
export function getDownload (url: string, params: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      responseType: 'blob'
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装get File方法
 * @param url
 * @param blob
 * @returns {Promise}
 */
export function getFile (url: string, params: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.get(url + '/' + params, {
      responseType: 'blob'
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post Download方法
 * @param url
 * @param blob
 * @returns {Promise}
 */

export function postDownload (url: string, data: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      responseType: 'blob'
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装get方法
 * @param url
 * @single data
 * @returns {Promise}
 */

export function singlefetch (url: string, params: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.get(url + '/' + params)
      .then(response => {
        if (response && response.data) {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url: string, data: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url: string, data: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url: string, data: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function Delete (url: string, params: IData): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      data: params
    })
      .then(response => {
        if (response) {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装delete方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function singleDelete (url: string, params: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.delete(url + '/' + params)
      .then(response => {
        if (response) {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装上传头像方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function upload (Url: string, data: IData): Promise<any> {
  const instance = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return new Promise((resolve, reject) => {
    instance.post(Url, data).then(response => {
      if (response) {
        resolve(response.data)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
