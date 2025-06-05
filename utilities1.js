export const checkBalance = (fName) => {

    switch (fName) {
        case "Zoe":
            return 1000
        case "Andres":
            return 2000
        case "Jose":
            return 3000
        default:
            return 5000
    } 
};

export const welcomeUser = (fName,lName) => {
    console.log(`Welcome back, ${fName} ${lName}! How can I help you today?`);
}

export const currencyConverter = (CAD) => {
    return CAD*0.73 
} 

export const gicDeposit = (principal,rate,time) => {
    return (principal*rate*time)+principal; 
}

