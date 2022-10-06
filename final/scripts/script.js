 let user=document.querySelector('#myform');
 let todo=document.querySelector('.todo');
 let number=(0);
 user.addEventListener('submit',function(){
 	if(todo.value == ''){
 alert('pls typing...');	}else{
 	let myli=document.createElement('li');
  myli.innerHTML=todo.value;
  let myul=document.querySelector('#tasks ul');
  myul.appendChild(myli);
  todo.value='';
  number++;
  document.querySelector('.total-number').innerHTML=number;
  }
});
/* Instagram:Amirrezakrym; */
 