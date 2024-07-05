document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default behavior of form submission
const input = document.querySelector('#new-task-description ')
    console.log (input.value) // handle form submission logic here

    const newli = document.createElement('li')
    newli.textContent = input.value
    const ul = document.querySelector('#tasks')
    ul.append(newli)

    const DeleteButton = document.createElement('button')
    DeleteButton.textContent = 'x'
    newli.append(DeleteButton)
    DeleteButton.addEventListener('click',Delete)
    function Delete(){
      newli.remove()
    }
 