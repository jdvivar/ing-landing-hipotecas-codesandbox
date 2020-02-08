const _define = window.customElements.define
const registered = []
window.customElements.define = function () {
  const componentName = arguments[0]

  if (registered.includes(componentName)) {
    return
  }

  registered.push(componentName)
  return _define.apply(this, arguments)
}
