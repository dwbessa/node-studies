const mockData = [
  {id: '1', name: 'Café', rrp: '10', info: 'Café pilão do bom.'},
  {id: '2', name: "Açaí", rrp: '13', info: 'Açaí delicioso.'},
  {id: '3', name: "Caderno", rrp: '5', info: 'Caderno espiral capa dura universitário 1 matéria'}
]

const populateProducts = async () => {
  const products = document.querySelector("#products")
  products.innerHTML = ''

  for (const product of mockData)
  {
    const item = document.createElement('div')
    item.classList.add("product")

    for (const key of ['name', 'rrp', 'info']) {
      const span = document.createElement('span')

      span.slot = key;
      span.textContent = product[key]
      item.appendChild(span)
    }

    products.appendChild(item)
  }
}

document.querySelector('#fetch').addEventListener('click', async () => {
  await populateProducts()
})