export interface ILogin {
  name: string
}
export interface ILoginData {
  outerIpAddress: null | string,
  password: string,
  username: string
}
export interface IDownLoadData {
  attendanceCycleId?: string,
  companyId?: string,
  cycleDetailId?: string,
  selectedYear?: string,
  topCompanyId: string
}
export interface ILoginState {
  List: ILogin[],
  Loading: boolean
}

export interface IPageLoginFrom {
  name: string
}

export interface IPageLoginFormRule {
  required?: boolean,
  type?: string,
  validator?: any,
  trigger: string | string[],
  message?: string
}

export interface IPageLoginFormRules {
  name: IPageLoginFormRule[]
}
