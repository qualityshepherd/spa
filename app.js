import home from './views/home.js'
import about from './views/about.js'
import error from './views/error.js'

const routes = {
  '#home': home,
  '#about': about,
  '#error': error
}

const router = async () => {
  const path = await getHash()
  document.getElementById('app').innerHTML = await routes[path].render()
}

const getHash = async () => {
  let hash = await location.hash
  await (hash === '' || hash === '/') ? hash = '#home' : hash // default page
  await (!routes[hash]) ? hash = '#error' : hash // handle 404s
  return hash
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
