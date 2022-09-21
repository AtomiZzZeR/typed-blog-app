import AddPostPage from '../pages/AddPostPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SelectPage from '../pages/SelectPage';

export interface IRoute {
  path: string;
  element: React.ElementType;
}

export enum ERouteNames {
  home = '',
  addPost = 'addPost',
  profile = 'profile',
  login = 'login',
  select = 'select',
}

export const publicRoutes: IRoute[] = [
  { path: ERouteNames.login, element: LoginPage },
];

export const privateRoutes: IRoute[] = [
  { path: ERouteNames.home, element: HomePage },
  { path: ERouteNames.addPost, element: AddPostPage },
  { path: ERouteNames.profile, element: ProfilePage },
  { path: ERouteNames.select, element: SelectPage },
];
