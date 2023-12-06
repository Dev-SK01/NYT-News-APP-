//  ------------------ global Declarations ------------- 

const smarterkey = 'QvTUnguAYJjQdJnSZmMk2oisuEWHibjU';
const SmarterLiving = document.querySelector('.smarter-news-section .news-overflow');




// ---------------- Functions --------------- 

async function  FetchSmarterLiving(apiKey){
  try{
    const home = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/smarter living.json?api-key=${apiKey}`) ;

    const homeResponse = await home.json();
    console.log(homeResponse);
    constructSmarterLivingResponseData(homeResponse);
  }

  catch(err){
    SmarterLiving.innerHTML =`
    <div class="error">
    <p>
    ${err}
    </p>
    </div>
    `
  }
    
   
}


function constructSmarterLivingResponseData(response){
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
    const location = article.des_facet[0];
    const image =  article.multimedia[0];
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

      SmarterLivingDataIntoBody(returnData);
    
    }

    catch (err){
        console.log(err)
    }
    });
     

}

function SmarterLivingDataIntoBody(returnData){
 // getting whole Constructed news Data
  // const p = document.createElement('p');
  // p.textContent= returnData[2];
  //  timesWireDiv.append(p);

  if (returnData[4] == "") {
    SmarterLiving.innerHTML += `
<!-- news container  -->
        <div
          class="news-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <div class="extra-details">
            <p class="location">${returnData[5]}</p>
            <p class="date">${returnData[3].slice(11, 19)}</p>
          </div>
          <!-- News-Image Div -->
          <div
            class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 news-details"
          >
            <!-- news-details div -->
            <div class="news-data">
              <img
                src="${returnData[6]}"
                alt="${returnData[7]}"
                class="img-thumbnail news-img"
              />
              <p class="title">
              ${returnData[2]}
              </p>
            </div>
            <p class="abstract">
            ${returnData[2]}
            </p>
          </div>
          <div class="btn-more">
            <a
              href="${returnData[1]}"
            >
              <p>Expolre</p>
            </a>
          </div>
        </div>

`;
  } else {
    SmarterLiving.innerHTML += `
<!-- news container  -->
        <div
          class="news-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <div class="extra-details">
            <p class="location">${returnData[5]}</p>
            <p class="date">${returnData[3].slice(11, 19)}</p>
          </div>
          <!-- News-Image Div -->
          <div
            class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 news-details"
          >
            <!-- news-details div -->
            <div class="news-data">
              <img
                src="${returnData[6]}"
                alt="${returnData[7]}"
                class="img-thumbnail news-img"
              />
              <p class="title">
              ${returnData[2]}
              </p>
            </div>
            <p class="abstract">
            ${returnData[4]}
            </p>
          </div>
          <div class="btn-more">
            <a
              href="${returnData[1]}"
            >
              <p>Expolre</p>
            </a>
          </div>
        </div>

`;
  }

}


FetchSmarterLiving(smarterkey);




// ---------------- Health News Javascript --------------------- 

//  ------------------ global Declarations ------------- 

const jobMarketKey = 'QvTUnguAYJjQdJnSZmMk2oisuEWHibjU';
const JobMarket = document.querySelector('.job-news-section .news-overflow');




// ---------------- Functions --------------- 

async function  FetchJobMarket(apiKey){
  try{
    const home = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/job market.json?api-key=${apiKey}`) ;

    const homeResponse = await home.json();
    console.log(homeResponse);
    constructJobMarketResponseData(homeResponse);
  }

  catch(err){
    JobMarket.innerHTML =`
    <div class="error">
    <p>
    ${err}
    </p>
    </div>
    `
  }
    
   
}


function constructJobMarketResponseData(response){
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
    const location = article.des_facet[0];
    const image =  article.multimedia[0];
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

      JobMarketDataIntoBody(returnData);
    
    }

    catch (err){
        console.log(err)
    }
    });
     

}

function JobMarketDataIntoBody(returnData){
 // getting whole Constructed news Data
  // const p = document.createElement('p');
  // p.textContent= returnData[2];
  //  timesWireDiv.append(p);

  if (returnData[4] == "") {
    JobMarket.innerHTML += `
<!-- news container  -->
        <div
          class="news-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <div class="extra-details">
            <p class="location">${returnData[5]}</p>
            <p class="date">${returnData[3].slice(11, 19)}</p>
          </div>
          <!-- News-Image Div -->
          <div
            class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 news-details"
          >
            <!-- news-details div -->
            <div class="news-data">
              <img
                src="${returnData[6]}"
                alt="${returnData[7]}"
                class="img-thumbnail news-img"
              />
              <p class="title">
              ${returnData[2]}
              </p>
            </div>
            <p class="abstract">
            ${returnData[2]}
            </p>
          </div>
          <div class="btn-more">
            <a
              href="${returnData[1]}"
            >
              <p>Expolre</p>
            </a>
          </div>
        </div>

`;
  } else {
    JobMarket.innerHTML += `
<!-- news container  -->
        <div
          class="news-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <div class="extra-details">
            <p class="location">${returnData[5]}</p>
            <p class="date">${returnData[3].slice(11, 19)}</p>
          </div>
          <!-- News-Image Div -->
          <div
            class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 news-details"
          >
            <!-- news-details div -->
            <div class="news-data">
              <img
                src="${returnData[6]}"
                alt="${returnData[7]}"
                class="img-thumbnail news-img"
              />
              <p class="title">
              ${returnData[2]}
              </p>
            </div>
            <p class="abstract">
            ${returnData[4]}
            </p>
          </div>
          <div class="btn-more">
            <a
              href="${returnData[1]}"
            >
              <p>Expolre</p>
            </a>
          </div>
        </div>

`;
  }

}


FetchJobMarket(jobMarketKey);



// ---------------------------------------------------------------






// ---------------------------------------------------------





//  ------------------ global Declarations ------------- 

const travelKey = 'QvTUnguAYJjQdJnSZmMk2oisuEWHibjU';
const Travel = document.querySelector('.travel-news-section .news-overflow');




// ---------------- Functions --------------- 

async function  FetchTravel(apiKey){
  try{
    const home = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/travel.json?api-key=${apiKey}`) ;

    const homeResponse = await home.json();
    console.log(homeResponse);
    constructTravelResponseData(homeResponse);
  }

  catch(err){
    Travel.innerHTML =`
    <div class="error">
    <p>
    ${err}
    </p>
    </div>
    `
  }
    
   
}


function constructTravelResponseData(response){
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
    const location = article.geo_facet[0];
    const image =  article.multimedia[0];
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

      TravelDataIntoBody(returnData);
    
    }

    catch (err){
        console.log(err)
    }
    });
     

}

function TravelDataIntoBody(returnData){
 // getting whole Constructed news Data
  // const p = document.createElement('p');
  // p.textContent= returnData[2];
  //  timesWireDiv.append(p);

  if (returnData[4] == "") {
    Travel.innerHTML += `
<!-- news container  -->
        <div
          class="news-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <div class="extra-details">
            <p class="location">${returnData[5]}</p>
            <p class="date">${returnData[3].slice(11, 19)}</p>
          </div>
          <!-- News-Image Div -->
          <div
            class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 news-details"
          >
            <!-- news-details div -->
            <div class="news-data">
              <img
                src="${returnData[6]}"
                alt="${returnData[7]}"
                class="img-thumbnail news-img"
              />
              <p class="title">
              ${returnData[2]}
              </p>
            </div>
            <p class="abstract">
            ${returnData[2]}
            </p>
          </div>
          <div class="btn-more">
            <a
              href="${returnData[1]}"
            >
              <p>Expolre</p>
            </a>
          </div>
        </div>

`;
  } else {
    Travel.innerHTML += `
<!-- news container  -->
        <div
          class="news-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
        >
          <div class="extra-details">
            <p class="location">${returnData[5]}</p>
            <p class="date">${returnData[3].slice(11, 19)}</p>
          </div>
          <!-- News-Image Div -->
          <div
            class=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 news-details"
          >
            <!-- news-details div -->
            <div class="news-data">
              <img
                src="${returnData[6]}"
                alt="${returnData[7]}"
                class="img-thumbnail news-img"
              />
              <p class="title">
              ${returnData[2]}
              </p>
            </div>
            <p class="abstract">
            ${returnData[4]}
            </p>
          </div>
          <div class="btn-more">
            <a
              href="${returnData[1]}"
            >
              <p>Expolre</p>
            </a>
          </div>
        </div>

`;
  }

}


FetchTravel(travelKey);



// 





