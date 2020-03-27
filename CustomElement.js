function CustomElementMarkDown(tag) {
  function h1Element(text) {
    return "<h1>" + text + "</h1>" + "[CUT]";
  }
  function h2Element(text) {
    return "<h2>" + text + "</h2>" + "[CUT]";
  }
  function h3Element(text) {
    return "<h3>" + text + "</h3>" + "[CUT]";
  }
  function h4Element(text) {
    return "<h4>" + text + "</h4>" + "[CUT]";
  }
  function h5Element(text) {
    return "<h5>" + text + "</h5>" + "[CUT]";
  }
  function h6Element(text) {
    return "<h6>" + text + "</h6>" + "[CUT]";
  }
  function pElement(text) {
    return "<p>" + text + "</p>" + "[CUT]";
  }
  function liElement(text) {
    return "<li>" + text + "</li>" + "[CUT]";
  }

  const content = document.querySelector(tag);
  function customTextFunc(text) {
    const splitText = text.split("\n");
    let repText = [];
    if (splitText.length) {
      splitText.forEach(text_ => {
        const regex = /######|#####|####|###|##|#|-|\w/;
        const textNow = text_.replace(regex, function(x, val2, val3) {
          const splitX = val3.replace(regex, "");
          const textT = splitX.trim();
          const elementFunc = {
            "#": h1Element(textT),
            "##": h2Element(textT),
            "###": h3Element(textT),
            "####": h4Element(textT),
            "#####": h5Element(textT),
            "######": h6Element(textT),
            "-": liElement(textT)
          };
          console.log({ x, elementFunc: elementFunc[x] });

          if (elementFunc[x]) {
            return elementFunc[x];
          } else {
            return x + pElement(textT);
          }
        });
        const split_ = textNow.split("[CUT]");
        console.log({ split_: split_[0] });
        repText += split_[0];
      });
    }
    content.innerHTML = repText;
  }
  return {
    text: customTextFunc
  };
}
