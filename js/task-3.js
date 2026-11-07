const profile = {
  username: "Jacob",
  playTime: 300,

  // Изменяет имя пользователя
  changeUsername(newName) {
    this.username = newName;
  },

  // Добавляет часы к текущему игровому времени
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Возвращает информацию о профиле
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Проверяем исходные данные
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// Изменяем имя
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

// Добавляем 20 часов
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"