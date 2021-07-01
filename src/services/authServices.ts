/* eslint-disable @typescript-eslint/no-unused-vars */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    username: string;
    name: string;
  };
}

export const loginRequest = (
  email: string,
  password: string
): Promise<LoginResponse> => {
  return new Promise(async (resolve, reject) => {
    await setTimeout(() => {
      const response: LoginResponse = {
        accessToken: "",
        refreshToken: "",
        user: {
          username: "nghiadg",
          name: "Duong Trong Nghia",
        },
      };
      resolve(response);
    }, 3000);
  });
};
