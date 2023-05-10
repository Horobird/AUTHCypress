//Вводим данные для тестов
export const homePageTests = [
  {
    name: "Тест: валидный email и валидный password",
    email: "user888@gmail.com",
    password: "1234567890",
  },
  {
    name: "Тест: валидный email и невалидный password",
    email: "testowyqa@qa.team",
    password: "1QA!automation-1",
  },
  {
    name: "Тест: невалидный  email и  валидный password",
    email: "user8889879@gmail.com",
    password: "1234567890",
  },
];
// Вводим данные объекта
export const objectHomePages = [
  {
    url: "https://www.edu.goit.global/account/login",
    selectorEmail: "#user_email",
    selectorPassword: "#user_password",
  },
  {
    url: "https://msfashion.com.ua/ua/login",
    selectorEmail: 'input[name="email"]',
    selectorPassword: 'input[name="password"]',
  },
];
