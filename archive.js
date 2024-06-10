let arr = JSON.parse(localStorage.getItem('todo-data')) || [];

function displayData(arr) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = "";

    arr.forEach((ele, i) => {
        let tr1 = document.createElement("tr");

        let tdName = document.createElement('td');
        tdName.innerText = ele.name;

        let tdPriorty = document.createElement('td');
        tdPriorty.innerText = ele.priorty;

        let status = document.createElement('td');

        if (ele.priorty === 'Medium') {
            tdPriorty.style.backgroundColor = 'rgb(255, 255, 0)';
            ele.status = 'Pending🔃'; // Add status to the element
            status.innerText = ele.status;
            status.style.backgroundColor = 'white';
            status.style.borderRadius = '5px';
        } else if (ele.priorty === 'High') {
            tdPriorty.style.backgroundColor = 'rgb(255, 0, 0)';
            ele.status = 'Pending🔃'; // Add status to the element
            status.innerText = ele.status;
            status.style.backgroundColor = 'white';
            status.style.borderRadius = '5px';
        } else if (ele.priorty === 'Low') {
            ele.status = 'Completed✅'; // Add status to the element
            status.innerText = ele.status;
            status.style.backgroundColor = 'white';
            status.style.borderRadius = '5px';
        }

        // Create separate td elements for each button
        let tdRestore = document.createElement('td');
        let restore = document.createElement('button');
        restore.innerText = 'Restore';
        restore.style.backgroundColor = 'white';
        restore.style.border = 'none';
        tdRestore.append(restore); // Append the button to the tdRestore

        let tdDelete = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerText = "Delete";
        btn.style.backgroundColor = 'red';
        btn.style.border = 'none';
        tdDelete.append(btn); // Append the button to the tdDelete

        // Append all td elements to the tr
        tr1.append(tdName, tdPriorty, status, tdRestore, tdDelete);
        tbody.append(tr1);
    });

    // localStorage.setItem('todo-data', JSON.stringify(arr));
    // console.log(arr);
}

displayData(arr);
function avi(v){
    let b=arr.filter((c)=>{
        return c.priorty==v;
    })
    console.log(b)
    displayData(b);
}

let fil=document.getElementById('select1');
fil.addEventListener('change',function(e){
let x = document.getElementById('select1').value
// console.log(arr)
avi(x)
})

