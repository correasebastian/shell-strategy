import { ShellStrategyPage } from './app.po';

describe('shell-strategy App', () => {
  let page: ShellStrategyPage;

  beforeEach(() => {
    page = new ShellStrategyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
