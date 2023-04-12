let stud = [];


function userFetcher(){
    fetch('./scripts/data.json')
    .then((response) => response.json())
    .then((response) =>{
       stud = JSON.parse(JSON.stringify(response)).studentPersonal
       signIn();
      
    })
}


function signIn() {
    let loginErrorDisplay =  document.getElementById('login-error-display');

    
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let validUser = false;
    
    for(let i = 0; i < stud.length; i++){
        if(userName ==  stud[i].userName && password == stud[i].password){
            sessionStorage.setItem('studentId' , stud[i].id)
            sessionStorage.setItem('userName', stud[i].userName)
            validUser = true;
            break;
        }
    } 
    if(validUser){
        window.location.href = 'welcome.html'
        
        
    }else if(userName ==  '' || password == ''){
        loginErrorDisplay.style.display = 'block';
        loginErrorDisplay.innerHTML = "Please Fill Out All Fields"

    }else{
        loginErrorDisplay.style.display = "block";
        loginErrorDisplay.innerHTML = "Your Username or Password is incorrect"
    }

}

function examRecord(){
    fetch('./scripts/data.json')
    .then((response) =>response.json())
    .then((response) =>{
        stud = JSON.parse(JSON.stringify(response)).studentPersonal
        displayMarkGrade()
    })
    
}


function displayMarkGrade(){
    let currentObject = {}
    validUserObject = false
    let subject = document.getElementById('subject').value;
    let marks = document.getElementById('mark');
    let grades = document.getElementById('grade');

    for(let i = 0; i < stud.length; i++){
        if(stud[i].id === parseInt(sessionStorage.getItem('studentId'))){
            currentObject = stud[i]
            break;
        }
    }
    
    switch(subject){
        case 'maths':
            marks.value = currentObject.subjects[0].maths.marks;
            grades.value = currentObject.subjects[0].maths.grade
            break;

        case 'biology':
            marks.value = currentObject.subjects[0].biology.marks;
            grades.value = currentObject.subjects[0].biology.grade
            break;

        case 'chemistry':
            marks.value = currentObject.subjects[0].chemistry.marks;
            grades.value = currentObject.subjects[0].chemistry.grade  
            break;
        
        case 'tech101':
            marks.value = currentObject.subjects[0].tech101.marks;
            grades.value = currentObject.subjects[0].tech101.grade   
            break;
        case 'physics':
            marks.value = currentObject.subjects[0].physics.marks;
            grades.value = currentObject.subjects[0].physics.grade 
            break 
            
        default:
            marks.value =''
            grades.value = ''


    }
}


function profileData(){
    fetch('./scripts/data.json')
    .then((response) => response.json())
    .then((response) =>{
       stud = JSON.parse(JSON.stringify(response)).studentPersonal
       profileLoader();
      
    })
}


function profileLoader(){
    let ourObject ={}
    
    
    for(let i = 0; i < stud.length; i++){
        if(stud[i].id === parseInt(sessionStorage.getItem('studentId'))){
            ourObject = stud[i]
            
            break;
        }
    }
    
    
    if(ourObject){
        document.getElementById('student-image').src = ourObject.imageSrc;
        document.getElementById('student-name').innerHTML = ourObject.name;
        document.getElementById('student-class').innerHTML = ourObject.studClass;
        document.getElementById('student-email').innerHTML = ourObject.email;
        
        for(let i=0; i < ourObject.projects.length; i++){
            let para = document.createElement('p')
            para.innerHTML = ourObject.projects[i]
            document.getElementById("project-container").appendChild(para)
        }

    }

    
}



function hideLoginError(){

    document.getElementById('login-error-display').style.display = "none";
}
