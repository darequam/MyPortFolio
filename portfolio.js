// let press = (event)=>{
//     event.target.style.color = 'red';
// };

// document.getElementById('myName').onclick = press;


let afpress = document.getElementById('my-image');

let above = ()=>{
    afpress.src = './agba2.jpg';
}
let away = ()=>{
    afpress.src = './agba.jpg';
}

afpress.addEventListener('mouseover', above);
afpress.addEventListener('mouseout', away);

afpress.addEventListener('touchstart', above);
afpress.addEventListener('touchend', away);

