var userName = '';
var userRole = '';
var userStartDate = '';
var userMonthlyRate = '';
var today = new Date();



// FUNCTION write employee
function writeEmployee(name, role, startDate, monthlyRate)
{
    console.log(name, role, startDate, monthlyRate)

    $('#table-body').append(
        '<tr><td>' + name + '</td>'
        + '<td>' + role + '</td>'
        + '<td>' + startDate + '</td>'
        + '<td>' + 1 + '</td>'
        + '<td>' + monthlyRate + '</td>'
        + '<td>' + 1 + '</td></tr>'
    )



    // database.ref().push({
    //     name: name,
    //     role: role,
    //     startDate: startDate,
    //     monthlyRate: monthlyRate
    // })

    calculateMonthsWorked(String(startDate));
}

function calculateMonthsWorked(startDate)
{
    var months = 1
    
    // var months = today - startDate;
    var dd = String(today.getDate()).padStart(2, '0')
    // console.log(today)
    console.log(months);

    return months
}


function calculateTotalBilled(rate, months)
{   
    console.log(userMonthlyRate);
}


$('#submit-employee').on('click', function(e)
{
    e.preventDefault();
    userName = $('#employeeName').val();
    userRole = $('#role').val();
    userStartDate = $('#date').val();
    userMonthlyRate = $('#rate').val();

    writeEmployee(userName, userRole, userStartDate, userMonthlyRate);
    
    $('#employeeName').empty();
    $('#role').empty();
    $('#date').empty();
    $('#rate').empty();

});

var firebaseConfig = {
    apiKey: "AIzaSyA0m089wIXO9AD0TYfXilrFDhNj3SOxWi0",
    authDomain: "third-project-912fe.firebaseapp.com",
    databaseURL: "https://third-project-912fe.firebaseio.com",
    projectId: "third-project-912fe",
    storageBucket: "third-project-912fe.appspot.com",
    messagingSenderId: "330870989085",
    appId: "1:330870989085:web:74be5b4c01db4281"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


database = firebase.database()