const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('clickBtn')
btn.addEventListener('click', () => {
  const content = document.getElementById('content')
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  
  content.style.backgroundColor = randomColor
})
