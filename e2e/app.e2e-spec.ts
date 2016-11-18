import { Angular2PlaygroundPage } from './app.po';

describe('angular-2-playground App', function() {
  let page: Angular2PlaygroundPage;

  beforeEach(() => {
    page = new Angular2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
