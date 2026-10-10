var uzers=[
    {
        "name":"John doe",
        "gender":"male",
        "image":"john.png"
    },
    {
        "name":"Jane doe",
        "gender":"female",
        "image":"jane.png"
    },
]
var index=0;
function toggle(){
    if(index==0)
        index=1;
    else
        index=0;
    document.getElementById("username").innerHTML=uzers[index].name;
    document.getElementById("user-gender").innerHTML=uzers[index].gender;
    document.getElementById("user-image").src=uzers[index].image;
}
function randomUser(){
    fetch("https://randomuser.me/api")
    .then(function(rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var user = jsonData.results[0];
        document.getElementById("username").innerHTML = user.name.first + " " + user.name.last;
        document.getElementById("user-gender").innerHTML = user.gender;
        document.getElementById("user-image").src = user.picture.large;
    });
} 