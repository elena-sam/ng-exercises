import { browser, element, by } from 'protractor';

export class NgExercisesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSuccess() {
    return element(by.css('app-root app-success-alert p'));
  }
  getWarning() {
    return element(by.css('app-root app-warning-alert p'));
  }
}
