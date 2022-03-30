import { action, makeAutoObservable, observable } from 'mobx';

import { getPrice } from './../../apis/economy.api';

export default class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }
  @observable records: any[] = [];

  @action buildRecords = async () => {
    const { data } = await getPrice();
    this.records = Object.values(data);
  }

}
const home = new HomeStore();
export { home };
