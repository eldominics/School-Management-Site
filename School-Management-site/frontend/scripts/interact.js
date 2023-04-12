
function submitActivity(){
    let activityTitle = document.getElementById('activity-title').value;
    let activityDescription = document.getElementById('activity-description').value;
    

    if(activityTitle != '' && activityDescription != ''){
        sessionStorage.setItem(activityTitle, activityDescription)  
    }
    
}

function displayActivity(){
    
    if (sessionStorage.length < 3){

        document.getElementById('activity-section1').style.display = 'none';

    }else{
        document.getElementById('activity-section1').style.display = 'block';
        

        for(let i = 0; i < sessionStorage.length; i++){
            let key = sessionStorage.key(i)
            if (key != 'userName' && key != 'IsThisFirstTime_Log_From_LiveServer' && key != 'studentId'){
                let dynamicBox = document.createElement('div')
                dynamicBox.id = 'activity-box' + i;
                dynamicBox.classList.add('activity-class-box')
                let titles = document.createElement('h3');
                titles.innerHTML = key;
                dynamicBox.appendChild(titles)
                


                let description = document.createElement('p');
                description.innerHTML = sessionStorage.getItem(key)
                dynamicBox.appendChild(description)

                document.getElementById('activity-id-container').appendChild(dynamicBox)
                
            }
        }

    }
}



    
