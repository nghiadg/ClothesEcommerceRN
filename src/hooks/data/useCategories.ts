import { useEffect, useState } from "react";
import { Category, getCategories } from "../../services/categoriesServices";

interface ReturnInterface {
  isLoading: boolean;
  categoryList: Array<Category>;
  errors: Array<string>;
}

export const useCategories = (): ReturnInterface => {
  const [categoryList, setCategoryList] = useState<Array<Category>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<Array<string>>([]);

  async function fetchCategories() {
    try {
      const res = await getCategories();
      setIsLoading(false);
      setCategoryList(res.categories);
    } catch (err) {
      setIsLoading(false);
      setErrors(["Request failed."]);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return { isLoading, categoryList, errors };
};
