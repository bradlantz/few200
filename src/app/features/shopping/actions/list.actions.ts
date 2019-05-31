import { Action } from '@ngrx/store';
import { ShoppingItemEntity } from '../reducers/list.reducer';

let currentFakeId = 1;

export const REMOVE_ITEM = '[shopping] removed item';
export class ItemRemoved implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: ShoppingItemEntity) { }
}


export const ADD_ITEM = '[shopping] add item';
export class ItemAdded implements Action {
  readonly type = ADD_ITEM;
  payload: ShoppingItemEntity;
  constructor(public what: string) {
    this.payload = {
      id: 'TEMP' + (currentFakeId++).toString(),
      description: what
    };
  }
}

export type All =
  ItemAdded
  | ItemRemoved;
