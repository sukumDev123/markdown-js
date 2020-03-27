function CustomElementMarkDown(tag) {
  const content = document.querySelector(tag);
  const { hElement, pElement, liElement, imageElement } = eachOfTypeElement();
  function customTextFunc(text) {
    const splitText = text.split("\n");
    let repText = [];
    const splitTextLengthMoreThen0 = () => {
      splitText.forEach(text_ => {
        const regex = /######|#####|####|###|##|#|-|img|size|\w/;
        const textNow = text_.replace(regex, function(x, val2, val3) {
          const splitX = val3.replace(regex, "");
          const textT = splitX.trim();
          const elementFunc = mapFWithTag(textT);
          return elementFunc[x] ? elementFunc[x] : pElement(`${x}${textT}`);
        });
        const split_ = textNow.split("[-CUT-]");
        repText += split_[0];
      });
    };
    splitText.length && splitTextLengthMoreThen0();
    content.innerHTML = repText;
  }

  function mapFWithTag(textT) {
    return {
      "#": hElement(textT, 1),
      "##": hElement(textT, 2),
      "###": hElement(textT, 3),
      "####": hElement(textT, 4),
      "#####": hElement(textT, 5),
      "######": hElement(textT, 6),
      "-": liElement(textT),
      img: imageElement(textT)
    };
  }
  return {
    text: customTextFunc
  };
}

function eachOfTypeElement() {
  function hElement(text, sizeH) {
    return `<h${sizeH}>${text}</h${sizeH}>[-CUT-]`;
  }
  function pElement(text) {
    return "<p>" + text + "</p>" + "[-CUT-]";
  }
  function liElement(text) {
    return "<li>" + text + "</li>" + "[-CUT-]";
  }
  function imageElement(src) {
    return `<img src="${src}"  />[-CUT-]`;
  }
  return {
    hElement,
    pElement,
    liElement,
    imageElement
  };
}
