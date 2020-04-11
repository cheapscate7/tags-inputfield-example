let tags = [];
const tagContainer = document.getElementById("input-container--tag-container");
const inputElement = document.getElementById("input");

class Tag {
  constructor(text = "") {
    let new_element = document.createElement("div");
    new_element.appendChild(document.createTextNode(text));
    new_element.classList.add("input-container--tag");
    this.element = new_element
  }
  get node() {
    return this.element;
  }
}

const deleteLastTag = () => {
  tagContainer.removeChild(tagContainer.childNodes[tags.length]);
  tags.pop();
}

inputElement.onkeypress = (e) => {
	const value = inputElement.value;
  //if keypress is enter, add the tag to the tags list and render as a tag
  if (e.key === "Enter" && value.length > 0) {
    const tag = new Tag(value);
    tags.push(tag);
    tagContainer.appendChild(tag.node);
    inputElement.value = "";
  }
}

inputElement.onkeydown = (e) => {
  const value = inputElement.value;
  //if there is no text in the input field, delete the last tag
  if (e.key === "Backspace" && value === "" && tags.length > 0) {
    deleteLastTag();
  }
}
