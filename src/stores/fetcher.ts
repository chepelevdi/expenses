import { observable, action } from 'mobx';
import { computedFn } from 'mobx-utils';

export class FetcherStore {
  loading = observable<string>([]);

  @action.bound
  async loaderStart(val: string): Promise<void> {
    this.loading.push(val);
  }

  @action.bound
  async loaderSuccess(val: string): Promise<void> {
    this.loading.remove(val);
  }

  getLoaders = computedFn((val: string) => {
    return Array.from(this.loading).includes(val);
  });
}

export const Fetcher = new FetcherStore();
