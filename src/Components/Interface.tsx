export interface loginField {
  email?: string | null;
  password?: number | string;
}

export interface signupField {
  _id ?: string ;
  name?: string;
  email?: string;
  password?: number | string;
  cpassword?: number | string;
  phone?: number |null;
  gender?: string;
  address?: string;
  age?: number |null;
}

export interface PostField {
  name : string;
  age : string ;
  city : string;
  salary :string ;
  domain : string;
  image : any;
  _id ?: any
}
export type IMapType = PostField[];

export interface interReducer {
  user: any;
  error: any;
  posts: any;
  status ?: string | undefined;
  adminPost ?:string;
  adminUser ?:string;
  createPost ?: any;
  updatePost ?: any;
  adminDeletePost ?:any;
}


export interface dataField {
  _id ?: any ;
  name?: string;
  image?: any;
  city ?: string;
  date ?: number;
  salary?: number |null;
  domain?: string;
  age?: number |null;
  postedby ?:any;
}

