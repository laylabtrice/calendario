function colorirData(){
    let day          = document.getElementById('day').value;
    let color        = document.getElementById('color').value;
    let calendar     = document.getElementById('calendar');
//solução 1
    let putColor     =  cale.getElementsByTagName('td')[parseInt(day)+5];
    putColor.style.backgroundColor = color;
}