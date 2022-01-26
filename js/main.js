document.addEventListener('DOMContentLoaded', () => {
  const anchors = Array.from(document.querySelectorAll('a[href="#"]'))
  if (anchors.length > 0) {
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault())
    })
  }
})
