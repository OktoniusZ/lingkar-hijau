import Relawan from '../views/pages/form';
import Edit from '../views/pages/edit';
import Main from '../views/pages/main';

const routes = {
  '/relawan': Relawan,
  '/edit/:id': Edit,
  '/main': Main,
};

export default routes;
