import React, {useEffect, useState} from 'react';
import {gistsService} from './src/services/GistsService';
import {GistsList} from './src/components/GistsList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const getUsers = () => {
    gistsService
      .getGists(page)
      .then(res => setUsers(users.concat(res.data)))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getUsers(page);
  }, []);

  const handleNextPage = () => {
    setPage(page + 1);
    getUsers();
  };

  return <GistsList items={users} onEndReached={handleNextPage} />;
};

export default App;
