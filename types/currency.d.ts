declare interface IMeta {
  last_updated_at: string
}

declare interface IData {
  CAD: ICad
  EUR: IEur
  USD: IUsd
}

declare interface ICad {
  code: string
  value: number
}

declare interface IEur {
  code: string
  value: number
}

declare interface IUsd {
  code: string
  value: number
}

declare interface IApiCurrency {
  meta: IMeta
  data: IData
}
