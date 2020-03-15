const USER_TOKEN = 'heima-toutiao-mobile-94'

export function setUser (user) {
  window.localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}

export function getUser () {
  JSON.parse(window.localStorage.getItem(USER_TOKEN) || '{}')
}
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
