
var student1 = {
    firstName: "dayo",
    lastName: "abbege",
    age: 21,
    location: "niger"
};
var student2 = {
    firstName: "abeggo",
    lastName: "adamu",
    age: "24",
    location: "sudan"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "pink";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
