export interface IPost {
  userId: number;
  id: string;
  title: string;
  description: string;
  creationDate: number;
  likeList?: number[];
  commentList?: IComment[];
}

export interface IComment {
  userId: number;
  id: string;
  description: string;
  creationDate: number;
  likeList?: number[];
}
