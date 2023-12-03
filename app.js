console.log('News Da Mapla');
const newsApiKey = '0f4pphG1TGjdlqwc6eqZIVDXaqFOApGh';
const body = document.querySelector('body');
console.log(body);

async function  FetchTimesWireData(apiKey){
    const timesWireApi = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${newsApiKey}`) ;

    const timeWireResponse = await timesWireApi.json();
 
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
    

    });
     

}

function addElementIntoBody(returnData){
// getting whole Constructed news Data 
const p = document.createElement('p');
p.textContent= returnData[2]; 
 body.append(p);

}
FetchTimesWireData(newsApiKey);



