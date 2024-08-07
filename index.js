document.querySelectorAll('a').forEach((el)=>{
    el.addEventListener('click', function(e) {
        const change_style=this.getAttribute('id')
      
        document.querySelectorAll('.nav-right a').forEach((el)=>{
            el.style.color ="";
        })
        document.querySelector(`#${change_style}`).style.color='orange';
    })
})
function getInfo() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    if(name === "" || number === "") {
        alert('Please enter name and number');
    }
    else {
        alert(`Name : ${name} \nNumber : ${number}`);
    }
}