import { Mat3rPage } from './app.po';

describe('mat3r App', () => {
  let page: Mat3rPage;

  beforeEach(() => {
    page = new Mat3rPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
