import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseMailProviderDTO from '../dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseMailProviderDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
