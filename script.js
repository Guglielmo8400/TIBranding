function mainpage(){
    setInvisible();
    document.getElementById('main').style.display = 'block';
}

function derdeBOOL(){
    setInvisible();
    document.getElementById('3BOOL').style.display = 'block';
}

function vierdeBOOL(){
    setInvisible();
    document.getElementById('4BOOL').style.display = 'block';
}

function setInvisible(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('3BOOL').style.display = 'none';
    document.getElementById('4BOOL').style.display = 'none';
}