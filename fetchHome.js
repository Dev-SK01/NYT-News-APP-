//  ------------------ global Declarations ------------- 

const homeApiKey = '0f4pphG1TGjdlqwc6eqZIVDXaqFOApGh';
const HomeDiv = document.querySelector('.home-news-section');




// ---------------- Functions --------------- 

async function  FetchHome(apiKey){
    const home = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${homeApiKey}`) ;

    const homeResponse = await home.json();
    console.log(homeResponse);
    constructHomeResponseData(homeResponse);
   
}


function constructHomeResponseData(response){
     const result = response.results;
    //  console.log(result);

    // getting element one by one 
    result.forEach(article => {

    // ----------------- Try Catch Block IF Error Occurs ----------------
    try{
    // console.log(article.section);
    const section = article.section;
    const title = article.title;
    const link = article.url;
    const published_date = article.published_date;
    const abstract = article.abstract;
    const location = article.geo_facet;
    const image =  article.multimedia[1];
    const imageUrl = image.url;
    const caption = image.caption;
    const height = image.height;
    const width =image.width;
    const format= image.format;
    // printing to console 
    // console.table(section,link,title,published_date,abstract,location,image,imageUrl,caption,height,width,format);

    // sending one By one Data 
    returnData = [ section,link,title,published_date,abstract,location,imageUrl,caption,height,width,format] ;

    // calling the constructed data function

      homeDataIntoBody(returnData);
    
    }

    catch (err){
        console.log(err)
    }
    });
     

}

function homeDataIntoBody(returnData){
// getting whole Constructed news Data 
const p = document.createElement('p');
p.textContent= returnData[2]; 
 HomeDiv.append(p);

}


FetchHome(homeApiKey);



