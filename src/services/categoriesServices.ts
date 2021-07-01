export type Category = {
  id: string;
  name: string;
  thumbnail: string;
};

interface CategoriesResponse {
  categories: Array<Category>;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const getCategories = (): Promise<CategoriesResponse> => {
  return new Promise((resolve, reject) => {
    resolve({
      categories: [
        {
          id: "category-man",
          name: "Man",
          thumbnail:
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        },
        {
          id: "category-woman",
          name: "Woman",
          thumbnail:
            "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: "category-kids",
          name: "Kids",
          thumbnail:
            "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
      ],
    });
  });
};
