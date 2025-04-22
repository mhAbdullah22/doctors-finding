const getStoreddr=()=>{
  const storeddrSTR=localStorage.getItem("readlist");
  if(storeddrSTR)
  {
   const storeddrData=JSON.parse(storeddrSTR);
   return storeddrData;
  }
  else{
   return [];
  }

}
const addToStoredDB=(id)=>{
   const storeddrData=getStoreddr();
   if(storeddrData.includes(id))
   {
     alert("id is existed");
   }
   else{
     storeddrData.push(id);
    const data=JSON.stringify(storeddrData);
    localStorage.setItem("readlist",data);
   }
  
}
export {addToStoredDB,getStoreddr};