// import { AxiosError } from "axios";

// export const onRequestError = (error: AxiosError) => {
//   console.error("Request Error:", error.message);
//   return Promise.reject(error);
// };

// export const onResponseError = (error: AxiosError) => {
//   const data = error.response?.data as { message?: string } | undefined;
//   const message = data?.message || error.message || "Something went wrong";
//   console.error("API Error:", message);
//   return Promise.reject({
//     message,
//     status: error.response?.status,
//   });
// };