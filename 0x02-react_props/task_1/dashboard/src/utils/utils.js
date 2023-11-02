//get full year
const getFullYear = () => new Date().getFullYear()
  
//getFooterCopy function
const getFooterCopy = (isIndex) => isIndex ? "Holberton School" : "Holberton School main dashboard"

// return an urgency string
function getLatestNotification (){
    return "<strong>Urgent requirement</strong> - complete by EOD"
}

//export functions
module.exports = {
    getFooterCopy,
    getFullYear,
    getLatestNotification,
};