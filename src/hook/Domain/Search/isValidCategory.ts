import { validCategories } from '../../../components/constants/CategoryConstant';
import CategoryType from '../../../components/types/Search/category';

const isValidCategory = (category: CategoryType) => {
  const categoryVal = validCategories.get(category);
  if (typeof categoryVal === 'undefined') {
    return false;
  }
  return category;
};

export default isValidCategory;
