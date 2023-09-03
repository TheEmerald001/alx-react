//get full year
const getFullYear = () => new Date().getFullYear()
  
//getFooterCopy function
const getFooterCopy = (isIndex) => isIndex ? "Holberton School" : "Holberton School main dashboard"

//export functions
module.exports = {
    getFooterCopy,
    getFullYear,
};