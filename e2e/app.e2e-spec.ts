import { Angular2FirebaseDemoPage } from './app.po';

describe('angular2-firebase-demo App', function() {
  let page: Angular2FirebaseDemoPage;

  beforeEach(() => {
    page = new Angular2FirebaseDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
