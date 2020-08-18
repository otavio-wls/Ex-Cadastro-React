export  const Auth = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token){
      console.log('tem token');
      return true;
    }else{
      console.log('não tem token');
      return false;
    }
    
  };
  
  // if(!localStorage.getItem('token')?.length){
  //   return true;
  // }else{
  //   return false;
  // }


// export default function isAuthenticated() {
//   if(localStorage.getItem('token')?.length === 0){
//     return false;
//   } else{
//     return true;
//   }
// }
   


