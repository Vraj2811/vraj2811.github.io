let i = 1;

document.querySelector('#add').onclick = function () {
  const idsContainer = document.querySelector('.ids');
  const newDiv = document.createElement('div');
  const checkboxId = `checkbox-${i}`;
  const contentId = `content-${i}`;
  const taskId = `task-${i}`;

  newDiv.className = 'content';
  newDiv.id = contentId;
  newDiv.innerHTML = `
    <div class="checkbox" id="${checkboxId}">
    &#10003;
    </div>
    <span class="task" id="${taskId}">
      ${document.querySelector('.chotacontainer').innerHTML}
    </span>
  `;
  idsContainer.appendChild(newDiv);

  document.querySelector('.chotacontainer').innerHTML = "Enter the Task";
  document.querySelector('.chotacontainer').style.color = "rgba(255, 255, 255, 0.472)";
  i++;
}

document.querySelector('.chotacontainer').onclick = function () {
  document.querySelector('.chotacontainer').innerHTML = "";
  document.querySelector('.chotacontainer').style.color = "white";
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkbox')) {
    const checkbox = event.target;
    const x = checkbox.id.split('-')[1];
    const element = document.getElementById(`task-${x}`);
    element.classList.toggle('thicker-strikethrough');
    checkbox.style.color = checkbox.style.color==="white" ? "#202124":"white" ;
    element.style.color = checkbox.style.color==="white" ? "#1bff0778":"white" ;
  }

});