import { NgExercisesPage } from './app.po';

describe('ng-exercises App', () => {
  let page: NgExercisesPage;

  beforeEach(() => {
    page = new NgExercisesPage();
  });

  it('should display message saying app works', async () => {
    page.navigateTo();
    const subject = await page.getParagraphText();
    const result = 'app works!';
    expect(subject).toEqual(result);
  });

  // .getCssValue('background-color');

  it('should display success alert in green', async () => {
    page.navigateTo();
    expect(page.getSuccess().isPresent()).toEqual(true);
    const subject = await page.getSuccess().getText();
    const result = 'success-alert works!';
    expect(subject).toEqual(result);
    expect(page.getSuccess().getCssValue('background-color')).toEqual('rgba(0, 255, 0, 1)');
  });

  it('should display warning alert in red', async () => {
    page.navigateTo();
    expect(page.getWarning().isPresent()).toEqual(true);
    const subject = await page.getWarning().getText();
    const result = 'warning-alert works!';
    expect(subject).toEqual(result);
    expect(page.getWarning().getCssValue('background-color')).toEqual('rgba(255, 0, 0, 1)');
  });

});
