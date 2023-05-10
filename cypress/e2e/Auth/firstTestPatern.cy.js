//Принимаем класс для входа в Homepage
import { HomePage } from "./pages/Homepage";
const homePage = new HomePage();
//Принимаем класс для входа в Login
import { Login } from "./pages/Login";
const loginPage = new Login();
//Принимаем массив данных для выпоолнения 3 тестов
import { homePageTests, objectHomePages } from "./pages/date/homePageTests";
describe("Авторизация", {browser: 'chrome'}, () => {
  // Цикл для объектов
  for (let objectHomePage of objectHomePages) {
    // Цикл для тестов объекта
    for (let homePageTest of homePageTests) {
      it(homePageTest.name, () => {
        homePage.manePage(objectHomePage.url);
        homePage.getAuth(
          objectHomePage.selectorEmail,
          homePageTest.email,
          objectHomePage.selectorPassword,
          homePageTest.password
        );
        loginPage.navPage(
          "#open-navigation-menu-mobile",
          ":nth-child(9) > .css-bve2vl"
        );
      });
    }
  }
});
