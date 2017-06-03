import { Ng4MasterDetailPage } from './app.po';

describe('ng4-master-detail App', function() {
  let page: Ng4MasterDetailPage;

  beforeEach(() => {
    page = new Ng4MasterDetailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
