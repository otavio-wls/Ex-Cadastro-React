const  Auth  =  localStorage.getItem('token') ;


function isLogin() {
  console.log(Auth)  ;
  if(Auth) {
        return  true ;        
    }else 
    return  false ;
}
export default isLogin;

// export  const Auth = () => {
//     const token = localStorage.getItem('token');
//     console.log(token);
//     if(token){
//       console.log('tem token');
//       return true;
//     }else{
//       console.log('não tem token');
//       return false;
//     }    
//   };
   


