// 账号
const codeReg = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/

// 电话
// let phoneReg: RegExp = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

// // 必须为数字
// let numberReg: RegExp = /^\d+$|^\d+[.]?\d+$/

// // 不带小数点的纯数字
// let number: RegExp = /^\d+$/

// // ID
// let regId: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// // email
// let emailReg: RegExp = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/

// // 邮件服务器端口
// let port: RegExp = /^\d{2,4}$/

// // 邮箱密码
// let pwd: RegExp = /[^\u4e00-\u9fa5]+$/

// // 管理员账号密码
// let Account: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*.])[\da-zA-Z~!@#$%^&*.]{4,20}$/

// // 税号
// let dutyNumber: RegExp = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{10})$/

// // 座机号
// let landline: RegExp = /^([0-9]{3,4}-)?[0-9]{7,8}$/ // 0571-86295197

// // 座机1
// let landline1: RegExp = /^\d{3,4}-\d{3,4}-\d{3,4}$/ // 4001-550-520

// // 营业执照注册号一起兼容验证就是
// let registrationReg: RegExp = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/
interface IRule {
  required?: boolean
  type: string
  [key: string]: unknown
}
type callBack = (value?: any) => any;

export default {
  // 账号的验证规则
  validateCode (rule: IRule, value: string, callback: callBack): void {
    if (!value) {
      callback(new Error('请输入账号'))
    }
    if (!codeReg.test(value)) {
      callback(new Error('账号必须为6-20位字母和数字组合'))
    } else {
      callback()
    }
  }
}
