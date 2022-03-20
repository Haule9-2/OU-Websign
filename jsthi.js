function Sign1(){
    const toggle = document.querySelector('.index1');
    const move = document.querySelector('.border1');
    toggle.onclick= function(){
            toggle.classList.remove('active');
            move.classList.remove('move2');
    }
    
}
function Sign2(){
    const toggle = document.querySelector('.index2');
    const move = document.querySelector('.border1');
    toggle.onclick= function(){
            toggle.classList.add('active');
            move.classList.add('move2');
    }
    
}
function SignUp(){
    const user = document.getElementById('user').value;
    const pass= document.getElementById('pass').value;
    const conf = document.getElementById('conf').value;
    
   
    if(user == ""){
        alert('Username not exists');
        return false;
    }
    if(pass == "")
    {
        alert('Please enter all fields!');
        return false;
    }
    if(conf == "")
    {
        alert('Please enter all fields!');
    }
    if(conf != pass)
    {
        alert('Confirm password not match!');
    }
}
function SignIn(){
    const user = document.getElementById('user').value;
    const pass= document.getElementById('pass').value;    
   
    if(user == ""){
        alert('Please enter all fields!');
        return false;
    }
    if(pass == "")
    {
        alert('Please enter all fields!');
        return false;
    }
    if (pass != "" && user != "")
    {
       
    }
}
function save() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conf = document.getElementById('conf').value;
    var data = {
        "tendangnhap" : user,
        "matkhau" : pass,
        "xacnhan" : conf
    }
    var json1 = JSON.stringify(data)
    console.log(json1)
    localStorage.setItem('datajson',json1)

}