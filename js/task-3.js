// Обʼєкт,який описує профіль користувача імʼя і кількість годин

const profile = {
    username: "Jacob",
    playTime: 300,

 // Приймає рядок (нове ім’я) в параметр newName та змінює значення властивості username на нове. 
    
    changeUsername(newName) {
        this.username = newName;
    },

// Приймає число (кількість годин) у параметр hours та збільшує на нього значення властивості playTime
    
    updatePlayTime(hours) {
        this.playTime += hours;
},
    // Повертає рядок з новими властивостями
    
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
   }
};
 






console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

