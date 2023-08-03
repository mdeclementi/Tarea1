import './index.css';
import { Menubar } from 'primereact/menubar';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import 'primeicons/primeicons.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { Fragment } from 'react';
import PostList from './PostList';

function App() {

  return (
    <Fragment>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <PostList></PostList>
    </Fragment>
  )
}

export default App;
