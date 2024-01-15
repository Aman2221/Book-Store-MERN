type book_fields = {
  type: string | number;
  required: boolean;
};
export interface book_interface {
  [key: string]: book_fields;
  //   title: book_fields;
  //   author: book_fields;
  //   publishYear: book_fields;
}

export interface param_interface {
  [key: string]: any;
}

export type bool_state = (a: boolean) => void;
