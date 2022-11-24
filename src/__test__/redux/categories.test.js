import categoriesReducer, {
  retrieveCat,
} from '../../redux/categories/categories';

// Fake data
const fakeCats = [{ id: 'aave_tokens', name: 'Aave Tokens' }];
// fetch categories action
const fetchCategories = {
  type: retrieveCat.fulfilled,
  payload: fakeCats,
};

describe('Dispatch the categories thunk', () => {
  test('Should return an array of objects of categories', () => {
    const cats = categoriesReducer([], fetchCategories);
    expect(cats).toHaveLength(1);
  });
});
