const  Auth  =  localStorage.getItem('token') ;

export  const  isLogin  =  ( )  =>  {
    if  (Auth )  {
        return  true ;
    }
    return  false ;
}

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
   


