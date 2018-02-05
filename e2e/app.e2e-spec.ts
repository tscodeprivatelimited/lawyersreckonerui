import { LawyersreckonerPage } from './app.po';

describe('lawyersreckoner App', () => {
  let page: LawyersreckonerPage;

  beforeEach(() => {
    page = new LawyersreckonerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
