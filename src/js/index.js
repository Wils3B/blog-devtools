window.addEventListener('scroll', () => {
  const wH = window.innerHeight
  const scrollY = window.scrollY

  let t = 0

  if (scrollY < wH) t = 0
  else if (scrollY > 3 * wH) t = 1
  else t = (scrollY - wH) / (2 * wH)

  const [r, g, b] = interpolateColor([173, 216, 230], [240, 128, 128], t)

  document.querySelector('.mixed').style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

function interpolateColor(startColor, endColor, t) {
  const [startR, startG, startB] = startColor
  const [endR, endG, endB] = endColor

  const r = (1 - t) * startR + t * endR
  const g = (1 - t) * startG + t * endG
  const b = (1 - t) * startB + t * endB

  return [Math.floor(r), Math.floor(g), Math.floor(b)]
}
