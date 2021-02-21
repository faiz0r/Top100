import { Top200Page } from './app.po';

describe('top200 App', function() {
  let page: Top200Page;

  beforeEach(() => {
    page = new Top200Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
