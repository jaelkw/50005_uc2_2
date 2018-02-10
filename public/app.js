const CreateVisitor = document.querySelector('.CreateVisitor')
CreateVisitor.addEventListener('submit', (e) => {
  e.preventDefault()
  const fullname = CreateVisitor.querySelector('.fullname').value
  const mobilenum = CreateVisitor.querySelector('.mobilenum').value
  const nricnum = CreateVisitor.querySelector('.nricnum').value
  post('/createVisitor', { fullname, mobilenum, nricnum })
})
function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
