import { SanfyNgPage } from './app.po';

describe('sanfy-ng App', () => {
  let page: SanfyNgPage;

  beforeEach(() => {
    page = new SanfyNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
