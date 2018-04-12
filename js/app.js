document.addEventListener("DOMContentLoaded", function() {
    //console.log("aa");
    var taskInput = document.getElementById('taskInput');
    //  console.log(taskInput);
    var addTaskButton = document.getElementById('addTaskButton');
    //  console.log(addTaskButton);
    var taskList = document.getElementById('taskList');
    var buttonRemoveFinishedTasks = document.getElementById('removeFinishedTasksButton');
    var body = document.querySelector('body');

    var addTaskButtonClick = 0;
    var p = document.createElement("p");
    var counter = document.createElement("span");
    body.insertBefore(counter, taskInput);

    body.insertBefore(p, counter);



    addTaskButton.addEventListener('click', function() {
      if(taskInput.value.length <= 5 || taskInput.value.length > 100){
          taskInput.placeholder ="Пожалуйста введите от 5 до 100 символов"
      }else{
          taskInput.placeholder ="Введите свою задачу"
      }

        if (taskInput.value != "" && taskInput.value.length >= 5 && taskInput.value.length < 100) {

            addTaskButtonClick++;
            counter.innerHTML = addTaskButtonClick;
            //console.log(taskInput.value);
            var newListli = document.createElement("li");
            var h1List = document.createElement("h1");
            var buttonDelete = document.createElement("button");
            var buttonComplete = document.createElement("button");

            h1List.innerHTML = taskInput.value;
            buttonDelete.innerHTML = "Удалить";
            buttonComplete.innerHTML = "Выполнено";

            this.nextElementSibling.appendChild(newListli);
            newListli.appendChild(h1List);
            newListli.appendChild(buttonDelete);
            newListli.appendChild(buttonComplete);

            buttonComplete.addEventListener('click', function(event) {
                this.parentElement.classList.toggle('done');
            });

            buttonDelete.addEventListener('click', function() {
                this.parentElement.parentElement.removeChild(newListli);
                addTaskButtonClick--;
                counter.innerHTML = addTaskButtonClick;
            });
        }
        taskInput.value = "";
        p.innerHTML = "сделано:";

    });

    buttonRemoveFinishedTasks.addEventListener('click', function() {
        for (var i = this.previousElementSibling.children.length - 1; i >= 0; i--) {
            //console.log(this.previousElementSibling.children.length);
            //console.log(this.previousElementSibling.children[i].className);
            if (this.previousElementSibling.children[i].className == 'done') {
                this.previousElementSibling.removeChild(this.previousElementSibling.children[i]);
                addTaskButtonClick--;
                counter.innerHTML = addTaskButtonClick;
            }
        }

    });



});

<!--by Valerii Halatenko-->