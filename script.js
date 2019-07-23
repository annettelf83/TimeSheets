var userName = '';
var userRole = '';
var userStartDate = '';
var userMonthlyRate = '';
var today = new Date();



// FUNCTION write employee
function writeEmployee(name, role, startDate, monthlyRate)
{
    console.log(name, role, startDate, monthlyRate)
    // database.ref().push({
    //     name: name,
    //     role: role,
    //     startDate: startDate,
    //     monthlyRate: monthlyRate
    // })
}

function calculateMonthsWorked(startDate)
{
    var months = today - startDate;
    var dd = String(today.getDate()).padStart(2, '0')
    
    console.log(months);

    return months
}


function calculateTotalBilled(userMonthlyRate)
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

console.log("Executed last" + String(today.getDate()).padStart(2, '0'))


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