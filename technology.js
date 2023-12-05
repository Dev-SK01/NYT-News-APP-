//  ------------------ global Declarations ------------- 

const techKey = '0f4pphG1TGjdlqwc6eqZIVDXaqFOApGh';
const technology = document.querySelector('.technology-news-section');




// ---------------- Functions --------------- 

async function  FetchTechnology(apiKey){
    const home = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/technology.json?api-key=${techKey}`) ;

    const homeResponse = await home.json();
    console.log(homeResponse);
    constructTechnologyResponseData(homeResponse);
   
}


function constructTechnologyResponseData(response){
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

      technologyDataIntoBody(returnData);
    
    }

    catch (err){
        console.log(err)
    }
    });
     

}

function technologyDataIntoBody(returnData){
// getting whole Constructed news Data 
const p = document.createElement('p');
p.textContent= returnData[2]; 
 technology.append(p);

}


FetchTechnology(techKey);



