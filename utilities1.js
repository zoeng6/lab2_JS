export const checkBalance = (Name) => {

    switch (Name) {
        case "Zoe":
            return 100
        case "Andres":
            return 200
        case "Jose":
            return 300
        default:
            return 500
    } 
};

export const welcomeUser = (Name) => {
    console.log(`Welcome back, ${Name} ! How can I help you today?`);
    
}

export const deposit = (Amount,User) => {
    var balance = checkBalance(User);
    return balance + Amount ; 

}

export const withdraw = (Amount,User) => {
    var balance = checkBalance(User);
    return balance - Amount; 
}

