/* 
generateRandomColor() is main function to accomplish the task 
Feature : generate randomcolor to apply to the css root variables 

i) colorarr has the set of colors 
ii) bg array has the colors respective bgcolor 
iii) newcolor has the generated color value from the array.

--secondary-bg: bgarray ;
--secandary-color : newcolor;

! adding object as the root element . using object.entries() for each method to done the task.
! using style.setProperty(property,value) setting the value for the root CSS:


Author: DevSK 
Version: V1.0 
*/



function generateRandomColor() {
  const colorsArr = ["#400fc8", "#a15e8f", "#ea5b15", "#2a3560", "#206a32"]; // 1.blue 2.rose 3.orange 4.darkblue 5.green

  const bgArr = ["#f7c0a5", "#d6dbed", "#e0c9da", "#d2f1da"]; // 1.orange  2.darkblue 3.rose 4.green
  //   generating random number
  let randomNumber = Math.floor(Math.random() * colorsArr.length + 1);
  //   getting the root element
  const root = document.querySelector(":root");
  //   storing the geerated color tovariable
  const newColor = colorsArr[randomNumber - 1];
  console.log(newColor)

  const setVariablesToRoot = (variableObj) =>
    Object.entries(variableObj).forEach((property) => root.style.setProperty(property[0], property[1]));
// using condition statement to apply proper colors 

if(newColor ==='#400fc8'){
    myvariables = {
        "--bg-color": "rgb(242, 237, 241)",
        "--primary-color": "#fff",
        "--secandary-color": newColor,
        "--call-to-action": "#fa741d",
        "--secandary-bg": bgArr[1],
        "--padding-inline": ".6rem",
        "--font-primary-color": "black",
        "--font-secondary-color": "#313131",
        "--font-600": "600",
        "--font-300": "300",
        "--font-400": "400",
        "--margin-block": "1.5rem",
        "--font-primary": "Dhurjati",
        "--font-secandary": "Noto+Serif",
        "--font-logo": "Rubik Bubbles",
      };
    
    setVariablesToRoot(myvariables);
}

else if(newColor === '#a15e8f'){
    myvariables = {
        "--bg-color": "rgb(242, 237, 241)",
        "--primary-color": "#fff",
        "--secandary-color": newColor,
        "--call-to-action": "#fa741d",
        "--secandary-bg": bgArr[2],
        "--padding-inline": ".6rem",
        "--font-primary-color": "black",
        "--font-secondary-color": "#313131",
        "--font-600": "600",
        "--font-300": "300",
        "--font-400": "400",
        "--margin-block": "1.5rem",
        "--font-primary": "Dhurjati",
        "--font-secandary": "Noto+Serif",
        "--font-logo": "Rubik Bubbles",
      };
    
    setVariablesToRoot(myvariables);
}

else if(newColor === '#ea5b15'){
    myvariables = {
        "--bg-color": "rgb(242, 237, 241)",
        "--primary-color": "#fff",
        "--secandary-color": newColor,
        "--call-to-action": "#fa741d",
        "--secandary-bg": bgArr[0],
        "--padding-inline": ".6rem",
        "--font-primary-color": "black",
        "--font-secondary-color": "#313131",
        "--font-600": "600",
        "--font-300": "300",
        "--font-400": "400",
        "--margin-block": "1.5rem",
        "--font-primary": "Dhurjati",
        "--font-secandary": "Noto+Serif",
        "--font-logo": "Rubik Bubbles",
      };
    
    setVariablesToRoot(myvariables);
}
else if(newColor === '#2a3560'){
    myvariables = {
        "--bg-color": "rgb(242, 237, 241)",
        "--primary-color": "#fff",
        "--secandary-color": newColor,
        "--call-to-action": "#fa741d",
        "--secandary-bg": bgArr[1],
        "--padding-inline": ".6rem",
        "--font-primary-color": "black",
        "--font-secondary-color": "#313131",
        "--font-600": "600",
        "--font-300": "300",
        "--font-400": "400",
        "--margin-block": "1.5rem",
        "--font-primary": "Dhurjati",
        "--font-secandary": "Noto+Serif",
        "--font-logo": "Rubik Bubbles",
      };
    
    setVariablesToRoot(myvariables);
}

else if(newColor === '#206a32'){
    myvariables = {
        "--bg-color": "rgb(242, 237, 241)",
        "--primary-color": "#fff",
        "--secandary-color": newColor,
        "--call-to-action": "#fa741d",
        "--secandary-bg": bgArr[3],
        "--padding-inline": ".6rem",
        "--font-primary-color": "black",
        "--font-secondary-color": "#313131",
        "--font-600": "600",
        "--font-300": "300",
        "--font-400": "400",
        "--margin-block": "1.5rem",
        "--font-primary": "Dhurjati",
        "--font-secandary": "Noto+Serif",
        "--font-logo": "Rubik Bubbles",
      };
    
    setVariablesToRoot(myvariables);
}

else {
    console.log('cant Apply');
}

}

generateRandomColor();
