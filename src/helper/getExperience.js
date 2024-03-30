export default function () {
    const startDate = new Date('2023-01-01');
    const currentDate = Date.now();
    
    const secondsPassed = (currentDate - startDate)/1000;
    const secondsInYear  = 60*60*24*30*12;
    
    const experience = secondsPassed/secondsInYear;

    return experience.toFixed(1);

}