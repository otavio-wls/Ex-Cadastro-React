export default function isAuthenticated() {
  if(localStorage.getItem('token')?.length === 0){
    return false;
  } else{
    return true;
  }
}
   


