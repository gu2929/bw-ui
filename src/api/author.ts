import Cookies from 'js-cookie'

function authorization (): string {
  return JSON.stringify(Cookies.get('JGRZTOKEN')) || 'eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6IjEyMTY5MDc1Mjk3MTA4MTcyODAiLCJjbGFzc05hbWUiOiJjb20uYmV5b25kc29mdC5yZGMuY2xvdWQuYnBvLmVzYm1wLmxvZ2luLm1vZGVsLkJtcFVzZXJBY2NvdW50Iiwib2JqZWN0Ijoie1wiaXNFeGlzdE11bFRvcENvbXBhbnlcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ6ZTA5MTFAMTYzLmNvbVwiLFwidXNlcklkXCI6XCIxMjE2OTA3NTI5MDUyMzExNTUyXCIsXCJ0ZW5hbnRJZFwiOlwiMTIxNjkwNzUyODY5NTc5NTcxMlwiLFwidGltZW91dFwiOjAsXCJpc0RvdWJsZUZhY3RvckF1dGhlbnRpY2F0aW9uXCI6ZmFsc2UsXCJpc09wZW5DYXB0Y2hhXCI6ZmFsc2UsXCJtb2JpbGVcIjpcIjE1Njc3ODg5MDk5XCIsXCJsb2dpblN0YXR1c1wiOnRydWUsXCJpc0V4cGlyZWRcIjpmYWxzZSxcImlzTG9ja2VkXCI6ZmFsc2UsXCJhdXRob3JpdGllc1wiOlt7XCJyb2xlXCI6XCIxMjE2OTA3NTI5NzEwODE3MjgwXCJ9XX0iLCJzdWIiOiJ6ZTA5MTFAMTYzLmNvbSIsImV4cCI6MTYxOTc2NTQ5NH0.FsPUxeXpj-8mvC2eKk_cn91aXUvCjWCi3vGZBFds8qUp9_jp8U_f7ZBJK-AvouRbLRKeXrN63y2zgvqKQg0o8Q'
}
export default authorization