import React, {Fragment} from 'react';
import {Main} from './containers/index'
import {CtxProvider} from './context/main/index'

const App = () => {
  return (
    <Fragment>
      <CtxProvider>

      <Main />

      </CtxProvider>

    </Fragment>



  );
}

export default App;
