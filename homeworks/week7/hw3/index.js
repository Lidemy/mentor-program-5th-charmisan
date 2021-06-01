document.querySelector('.btn-new').addEventListener('click', () => {
  addTodos()
})

function addTodos() {
  const input = document.querySelector('.todo__input').value

  if (input.trim().length === 0) return

  const newList = document.createElement('li')
  newList.classList.add('todo')
  newList.innerHTML = `
    <label class="todo__title">
      <input class="todo__check" type="checkbox">
      <p>${input}</p>
    </label>
    <button class="btn-delete">X</button>
  `
  document.querySelector('.todo__list').appendChild(newList)
  document.querySelector('.todo__input').value = ''
}

document.querySelector('.todo__list').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-delete')) {
    e.target.parentNode.remove()
  }
})
