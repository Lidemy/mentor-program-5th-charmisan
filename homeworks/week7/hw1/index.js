const element = document.querySelector('.wrapper')
element.addEventListener('submit', (e) => {
  e.preventDefault()
  let hasError = false
  const values = {}
  const elements = document.querySelectorAll('.question__check')
  for (const element of elements) {
    const input = element.querySelector('input[type=text')
    const radios = element.querySelectorAll('input[type=radio]')
    let isValid = true
    if (input) {
      values[input.name] = input.value
      if (!input.value) {
        isValid = false
      }
    } else if (radios.length) {
      isValid = [...radios].some((radio) => radio.checked)
      if (isValid) {
        const radioCheck = element.querySelector('input[type=radio]:checked')
        values[radioCheck.name] = radioCheck.value
      }
    } else {
      continue
    }
    if (isValid) {
      element.classList.add('hidden')
    } else {
      element.classList.remove('hidden')
      hasError = true
    }
  }
  if (!hasError) {
    alert(JSON.stringify(values))
  }
})
