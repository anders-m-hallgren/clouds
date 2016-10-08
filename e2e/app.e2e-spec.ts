import { CloudsPage } from './app.po';

describe('clouds App', function() {
  let page: CloudsPage;

  beforeEach(() => {
    page = new CloudsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
