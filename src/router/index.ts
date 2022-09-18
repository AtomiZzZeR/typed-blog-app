import AddPostPage from '../pages/AddPostPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

export interface IRoute {
  path: string;
  element: React.ElementType;
}

export enum ERouteNames {
  home = '',
  addPost = 'addPost',
  profile = 'profile',
  login = 'login',
}

export const publicRoutes: IRoute[] = [
  { path: ERouteNames.login, element: LoginPage },
];

export const privateRoutes: IRoute[] = [
  { path: ERouteNames.home, element: HomePage },
  { path: ERouteNames.addPost, element: AddPostPage },
  { path: ERouteNames.profile, element: ProfilePage },
];
