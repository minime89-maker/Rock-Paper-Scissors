const rockPaperScissors = "rPs-v1"
const assets = [
  "./",
  "./rps.html",
  "./rps.css",
  "./rps.js",
  "./images/bg",
  "./images/bg-triangle.svg",
  "./images/icon-close.svg",
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
  "./images/icon-scissors.svg",
  "./images/image-rules.svg",
  "./images/logo.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(rockPaperScissors).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })