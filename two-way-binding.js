{
  window.proxy = new Proxy({}, {
    set: (target, property, value, receiver) => {
      // console.log(`${property} : ${value}`);
      let elementsToChange = document.querySelectorAll('[bind]');
      elementsToChange.forEach((element) => {
        element.innerText = value;
      });
      target[property] = value;
      return true;
    },
  });

  let elements = document.querySelectorAll('[model]');
  elements.forEach((element) => {
    element.oninput = () => {
      let bindVariable = element.getAttribute('model');
      proxy[bindVariable] = element.value;
    };
  });
}