import { makeAutoObservable, observable } from 'mobx';
import { computedFn } from 'mobx-utils';
import { FetcherStoreInt } from './model';

class FetcherStore implements FetcherStoreInt {
  loading = observable.array<string>([]);

  constructor() {
    makeAutoObservable(this);
  }

  loaderStart(val: string): void {
    this.loading.push(val);
  }

  loaderSuccess(val: string): void {
    this.loading = this.loading.filter((el) => el !== val);
  }

  getLoaders = computedFn((val: string) => {
    return Array.from(this.loading).includes(val);
  });
}

export const Fetcher: FetcherStoreInt = new FetcherStore();
