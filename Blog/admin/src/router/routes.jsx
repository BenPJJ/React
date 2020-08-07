import Login from '../Login';
import AdminIndex from '../AdminIndex';

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/index',
    component: AdminIndex,
  }
];

export default routes;