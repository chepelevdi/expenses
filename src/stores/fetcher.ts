import { observable, action } from 'mobx';
import { computedFn } from 'mobx-utils';
import { FetcherStoreInt } from './model';

class FetcherStore implements FetcherStoreInt {
  loading = observable<string>([]);

  @action.bound
  loaderStart(val: string): void {
    this.loading.push(val);
  }

  @action.bound
  loaderSuccess(val: string): void {
    this.loading.remove(val);
  }

  getLoaders = computedFn((val: string) => {
    return Array.from(this.loading).includes(val);
  });
}

export const Fetcher: FetcherStoreInt = new FetcherStore();
