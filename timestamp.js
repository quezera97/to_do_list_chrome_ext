const getTimeStamp = () => {
    
    const currentDate = new Date();
    
    const currentTime = currentDate.toLocaleString('en-BD', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    
    const formattedDate = currentDate.toLocaleDateString('en-BD', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
  
    const formattedTimeStamp = `${formattedDate} | ${currentTime}`;
  
    return formattedTimeStamp;
};