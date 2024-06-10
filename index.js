let form1 = document.querySelector('form');

let arr=JSON.parse(localStorage.getItem('main')) || [];
form1.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission default behavior
    getData();
});

function getData() {
    event.preventDefault();
    let input1 = document.getElementById('input1').value;
    let option1 = document.getElementById('options').value;

    if (!input1) {
        alert("Todo cannot be empty!");
        return;
    }

    let obj = {
        name: input1,
        priorty: option1,
    };

    arr.push(obj); // Add the new object to arr
    // todoData.push(obj); // Add the new object to todoData
    // localStorage.setItem('todo-data', JSON.stringify(todoData)); // Update local storage
localStorage.setItem("main",JSON.stringify(arr))
    displayData(arr);
}

function displayData(arr) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear the existing table rows

    arr.forEach((ele, i) => {
        let tr1 = document.createElement("tr"); 

        let tdName = document.createElement('td');
        tdName.innerText = ele.name;

        let tdPriorty = document.createElement('td');
        tdPriorty.innerText = ele.priorty;

        let status = document.createElement('td');

        if (ele.priorty === 'Medium') {
            tdPriorty.style.backgroundColor = 'rgb(255, 255, 0)';
            ele.status = 'Pending🔃';
            status.innerText = ele.status;
            status.style.backgroundColor = 'white';
            status.style.borderRadius = '5px';
        } else if (ele.priorty === 'High') {
            tdPriorty.style.backgroundColor = 'rgb(255, 0, 0)';
            ele.status = 'Pending🔃';
            status.innerText = ele.status;
            status.style.backgroundColor = 'white';
            status.style.borderRadius = '5px';
        } else if (ele.priorty === 'Low') {
            ele.status = 'Completed✅';
            status.innerText = ele.status;
            status.style.backgroundColor = 'white';
            status.style.borderRadius = '5px';
        }

        let btn = document.createElement('button');
        btn.innerText = "Archive";
        btn.style.backgroundColor = 'red';
        btn.style.border = 'none';
        btn.style.color = 'white';
        btn.addEventListener('click', function() {
            archiveData(ele,i);
        });

        tr1.append(tdName, tdPriorty, status, btn);
        tbody.append(tr1);
    });
}
let a=JSON.parse(localStorage.getItem('todo-data')) || [];
function archiveData(ele,i) {
    arr.splice(i, 1); // Remove the element from arr
    a.push(ele)
    // todoData.splice(i, 1); // Remove the element from todoData
    localStorage.setItem('main',JSON.stringify(arr))
    localStorage.setItem('todo-data', JSON.stringify(a)); // Update local storage

    displayData(arr);
}

displayData(arr);
