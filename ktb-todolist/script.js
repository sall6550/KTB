function addItem() {
  var input = document.querySelector('input[type="text"]');
  var ul = document.getElementById("todoList");
  var li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
}
