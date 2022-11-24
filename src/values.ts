export type Values = {
  label1: string
  label2: string
  placeholder: string
  actionUrl: string
}

export type Product = {
  name: string
  properties: Record<any, any>
}

export const valuesDefault: Readonly<Values> = Object.freeze({
  label1: "Email",
  label2: "Message",
  placeholder: "Write your message here",
  actionUrl: "https://httpbin.org/post",
})
