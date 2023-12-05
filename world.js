//  ------------------ global Declarations ------------- 

const timesWireKey = '0f4pphG1TGjdlqwc6eqZIVDXaqFOApGh';
const timesWireDiv = document.querySelector('.world-news-section');




// ---------------- Functions --------------- 

async function  FetchTimesWireData(apiKey){
    const timesWireApi = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/world.json?api-key=${timesWireKey}`) ;

    const timeWireResponse = await timesWireApi.json();
    console.log(timeWireResponse)
    constructResponseData(timeWireResponse);
    // console.log(timeWireResponse.results);
    // timeWireResponse.results.forEach(news => {
    //     console.log(news);
    // });
}


function constructResponseData(response){
     const result = response.results;
    //  console.log(result);

    // getting element one by one 
    result.forEach(article => {
    // console.log(article.section);

    // ----------- Try Catch Block For If Error Occurs ------------
    try{
    const section = article.section;
    const title = article.title;
    const link = article.url;
    const published_date = article.published_date;
    const abstract = article.abstract;
    const location = article.geo_facet;
    const image =  article.multimedia[0];
    const imageUrl = image.url;
    const caption = image.caption;
    const height = image.height;
    const width =image.width;
    const format= image.format;
    
    // console.table(section,link,title,published_date,abstract,location,image,imageUrl,caption,height,width,format);

    // sending oneBy one Data 
    returnData = [ section,link,title,published_date,abstract,location,imageUrl,caption,height,width,format] ;

    // calling the constructed data function

    addElementIntoBody(returnData)
    
    } 

    catch(err){
        console.log(err);
    }

    });
     

}

function addElementIntoBody(returnData){
// getting whole Constructed news Data 
const p = document.createElement('p');
p.textContent= returnData[2]; 
 timesWireDiv.append(p);

}
FetchTimesWireData(timesWireKey);



