export type ApiFieldError<T extends object> = {
  field: keyof T;
  message: string;
};
