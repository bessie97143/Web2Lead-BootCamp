
function beforesubmit(){
    let outputdate = document.querySelector(".outputleaddate");
    let inputdate = document.querySelector(".inputleaddate");
    console.log("inputdate: ", inputdate.value);

    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatteddate;
    console.log("formatteddate: ", formatteddate);
}