
 
 let user = '';

  do {

  user =prompt('Please enter your name');
  
  } while (user === '' || user === null); 


  document.getElementById('user-name').innerHTML = `Salam ${user}`;
