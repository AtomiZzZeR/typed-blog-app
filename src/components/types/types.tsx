export interface IPost {
  id: string;
  title: string;
  body: string;
  creationDate: number;
  commentList: IComment[];
}

export interface IComment {
  id: string;
  body: string;
  creationDate: number;
}
