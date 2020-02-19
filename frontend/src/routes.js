import React from 'react';
import { Redirect } from 'react-router-dom';
import InfermedicaApi from './utils/infermedica-api';

// Configs
import configs from './configs/api';

// Context
import { ApiContext } from './ApiContext';

// Default Layout
import { DefaultLayout } from './layouts';

// Route views
import Assessment from './views/Assessment';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

const api = new InfermedicaApi(configs['app-id'], configs['app-key']);

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/signin" />
  },
  {
    path: '/start-assessment',
    layout: DefaultLayout,
    component: () => (
      <ApiContext.Provider value={{ api }}>
        <Assessment />
      </ApiContext.Provider>
    )
  },
  {
    path: '/signin',
    layout: DefaultLayout,
    component: () => <SignIn />
  },
  {
    path: '/signup',
    layout: DefaultLayout,
    component: () => <SignUp />
  }
];
