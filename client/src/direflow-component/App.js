import React, { useState, useEffect } from 'react';
import { Styled } from 'direflow-component';
import database from '../firebase'

import styles from './App.css';

const buildUrl = ({ location }) => {
  const { host, pathname } = location;
  const url = `${host}${pathname}`
  return url.replace(/\//g, "");
}

const loadLikes = async (url, setLikes) => {
  database.collection("likes").where("url", "==", url).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        setLikes(data.count);
    });
  });
}

const addLike = async (url, count) => {
  return database.collection("likes").doc(url).set({ url, count });
}

const App = () => {
  const [likes, setLikes] = useState(0);
  const url = buildUrl(window);

  useEffect( () => {
    loadLikes(url, setLikes);
  }, []);

  const handleLike = (url, likes) => {
    const count = likes + 1;
    addLike(url, count);
    setLikes(count);
  };

  return (
    <Styled styles={styles}>
      <div className="simple-like">
        <div className="like" onClick={() => handleLike(url, likes)}>
          <span className="number">{ likes }</span>
          <span role="img" aria-label="claps" className="claps">👏</span>
        </div>
      </div>
    </Styled>
  );
};

export default App;
