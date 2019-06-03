import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';

export default class extends ApiBase {
 /* @normalizeParams
   async getContactPersonList(phone: string, functionName: string) {
    const result = await this.get(
      `customer/findContactPerson?function=${functionName}&phone=${phone}`
    );
    return result.map((x: any) => new ContactPersonListItem().map(x));
  } */

}
