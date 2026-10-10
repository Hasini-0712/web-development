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