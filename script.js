const apiKey='2e381d9ab8864c909965842535287a17';
const blockConatiner=document.getElementById('main-cls');
const searchField=document.getElementById('search-input');
const searchButn=document.getElementById('search-btn');


 async function fetchRandomNews(){
   try {
      const apiUrl=`https://newsapi.org/v2/top-headlines?sources=techcrunch &pageSize=15&apiKey=${apiKey}`;  
      const response=await fetch(apiUrl)
      const data=await response.json()
      return data.articles;  
   } catch (error) {
    console.error("error fetching random news", error)
    return []
   }
}
 function displayBlogs(articles){
    blockConatiner.innerHTML=""
    articles.forEach((article) => {
        const blogCard=document.createElement("div");
        blogCard.classList.add("bolck-card");
        const img=document.createElement("img");
        img.src=article.urlToImage
        img.alt=article.title
        const title=document.createElement("h2");
        const truncateTitle=article.title.length>30?article.title.slice(0,30) + "...." : article.title;
        title.textContent=truncateTitle;
        const description=document.createElement("p");
        const truncateDesc=article.title.length>50?article.description.slice(0,75) + "...." : article.description;
        description.textContent=truncateDesc;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener("click",()=>{
            window.open(article.url,"_blank");
        });
        blockConatiner.appendChild(blogCard);
 });
}

searchField.addEventListener("click",async()=>{
    const query= searchField.value.trim()
    if (query!== ""){
        try {
            const articles= await fetchNewsQuery(query);
            displayBlogs(articles);
            
        } catch (error) {
           console.log("error fetching by news query", error); 
        }
    }
    })


searchButn.addEventListener("click",async()=>{
const query= searchField.value.trim()
if (query!== ""){
    try {
        const articles= await fetchNewsQuery(query);
        displayBlogs(articles);
        
    } catch (error) {
       console.log("error fetching by news query", error); 
    }
}
})
 async function fetchNewsQuery(query){
    try {
        const apiUrl=`https://newsapi.org/v2/everything?q=${query} &pageSize=15&apiKey=${apiKey}`;  
        const response=await fetch(apiUrl);
        const data=await response.json();
        return data.articles;  
     } catch (error) {
      console.error("error fetching random news", error)
      return []
     }
}

(async()=>{
    try {
        const articles=await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("console.log articles"); 
    }
})();