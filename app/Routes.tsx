/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
// import HomePage from './containers/HomePage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);
const LazyTodoPage = React.lazy(() => import('./containers/TodoListPage'));
const LazyLoginPage = React.lazy(() => import('./containers/LoginPage'));

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

const TodoListPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyTodoPage {...props} />
  </React.Suspense>
);

const LoginPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyLoginPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.TODOLIST} component={TodoListPage} />
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.LOGIN} component={LoginPage} />
      </Switch>
    </App>
  );
}
