import {range} from 'lodash';

const INIT_ITEMS_PER_PAGE = 20;
const INIT_PAGES_RANGE = 2;

/**
 * API
 */
interface IPagination {
  itemsNumber;
  itemsPerPage;
  selectedPage;

  setNumberOfItems(value: number): void;

  setNumberOfItemsPerPage(value: number): void;

  selectPage(pageNumber: number): void;

  getTotalNumberOfPages(): number;

  getSiblingPages(): number[];

  isPreviousButtonActive(): boolean;

  isNextButtonActive(): boolean;
}

/**
 * Class
 */

export class Pagination implements IPagination {
  private _itemsPerPage: number = INIT_ITEMS_PER_PAGE;
  private _itemsNumber: number = 0;
  private _lastPage: number;
  private _selectedPage: number = 1;
  private _siblingRange = INIT_PAGES_RANGE;
  private _siblingPages: number[] = [];

  constructor(itemsPerPage: number = INIT_ITEMS_PER_PAGE, numberOfItems: number = 0) {
    this.setNumberOfItemsPerPage(itemsPerPage);
    this.setNumberOfItems(numberOfItems);
  }

  /**
   * Public Methods
   */

  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  get itemsNumber(): number {
    return this._itemsNumber;
  }

  get selectedPage() {
    return this._selectedPage;
  }

  setNumberOfItemsPerPage(value: number) {
    this._itemsPerPage = value;
    this.selectPage(1);
    this.calculateLastPage();
  }

  setNumberOfItems(itemsNumber: number) {
    this._itemsNumber = itemsNumber;
    this.calculateLastPage();
  }

  selectPage(page: number) {
    if (page < 1 || page > this._lastPage) {
      throw new Error('Page not exists');
    }

    this._selectedPage = page;
    this._siblingPages = this.calculateRangePages();
  }

  getTotalNumberOfPages() {
    return this._lastPage;
  }

  getSiblingPages(): number[] {
    return this._siblingPages;
  }

  isPreviousButtonActive(): boolean {
    return this._selectedPage > 1;
  }

  isNextButtonActive(): boolean {
    return this._selectedPage < this._lastPage;
  }

  /**
   * Private Methods
   */

  private calculateRangePages(): number[] {
    let min = this._selectedPage - this._siblingRange;
    min = min > 1 ? min : 1;

    let max = this._selectedPage + this._siblingRange;
    max = max < this._lastPage ? max : this._lastPage;

    return range(min, max + 1);
  }

  private calculateLastPage() {
    this._lastPage = Math.ceil(this._itemsNumber / this._itemsPerPage);
  }
}
