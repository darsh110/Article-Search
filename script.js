const apiKey='2e381d9ab8864c909965842535287a17';
const blockConatiner=document.getElementById('main-cls');

 async function fetchRandomNews(){
   try {
      const apiUrl=`https://newsapi.org/v2/everything?q=apple &pageSize=10&apiKey=${apiKey}`;  
      const response=await fetch(apiUrl)
      const data=await response.json()
      console.log(data);  
   } catch (error) {
    console.error("error fetching random news", error)
    return []
   }
}
(async()=>{
    try {
        await fetchRandomNews()
    } catch (error) {
        console.error("console.log articles"); 
    }
})