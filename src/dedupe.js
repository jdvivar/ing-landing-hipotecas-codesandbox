let _define = customElements.define;
let registered = [];
customElements.define = function() {
  const componentName = arguments[0];

  if (registered.includes(componentName)) {
    return;
  }

  registered.push(componentName);
  return _define.apply(this, arguments);
};
