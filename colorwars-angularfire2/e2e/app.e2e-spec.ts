import { ColorwarsAngularfire2Page } from './app.po';

describe('colorwars-angularfire2 App', function() {
  let page: ColorwarsAngularfire2Page;

  beforeEach(() => {
    page = new ColorwarsAngularfire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
