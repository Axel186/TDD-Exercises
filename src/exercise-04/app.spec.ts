import {Pagination} from './app';
import {expect} from 'chai';

describe('Exercise 04 - Pagination', () => {
  const pagination = new Pagination(20, 50);

  it('Get total number of pages.', () => {
    expect(pagination.getTotalNumberOfPages()).to.equals(3);
  });

  it('Select page & get current page.', () => {
    pagination.selectPage(1);
    expect(pagination.selectedPage).to.equals(1);

    pagination.selectPage(2);
    expect(pagination.selectedPage).to.equals(2);
  });

  it('Make sure user can\'t select not existing pages.', () => {
    expect(() => pagination.selectPage(5)).to.throw('Page not exists');
  });

  it('Get pages in range of current page.', () => {
    expect(pagination.getSiblingPages()).to.eql([1, 2, 3]);
  });

  it('Previous button activity.', () => {
    expect(pagination.isPreviousButtonActive()).to.equals(true);

    pagination.selectPage(1);
    expect(pagination.isPreviousButtonActive()).to.equals(false);
  });

  it('Next button activity.', () => {
    expect(pagination.isNextButtonActive()).to.equals(true);

    pagination.selectPage(3);
    expect(pagination.isNextButtonActive()).to.equals(false);
  });

  // Change amount of items per page, page number 1 selected.
  it('Change amount of items per page, page number 1 selected.', () => {
    pagination.setNumberOfItemsPerPage(10);

    expect(pagination.itemsPerPage).to.equals(10);
    expect(pagination.selectedPage).to.equals(1);
  });

  // Get last page after amount of items was changed.
  it('Change amount of items per page, page number 1 selected.', () => {
    expect(pagination.getTotalNumberOfPages()).to.equals(5);
  });

  it('Previous button is disabled on first page.', () => {
    expect(pagination.isPreviousButtonActive()).to.be.false;
  });
});