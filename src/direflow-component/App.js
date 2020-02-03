import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import database from '../firebase'

import styles from './App.css';

const buildUrl = ({ location }) => {
  const { host, pathname } = location;
  console.log(location)
  const url = `${host}${pathname}`
  return url.replace('//', '-').replace('/', '-');
}

const loadLikes = async (url, setLikes) => {
  database.collection("likes").where("url", "==", url).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        setLikes(data.count);
    });
  });
}

const addLike = async (url, likes) => {
  database.collection("likes").doc(url).set({ url, count: 1 }).then(function() {
    console.log("Document successfully written!");
  });
}

const App = (props) => {
  const dispatch = useContext(EventContext);
  const url = buildUrl(window);

  const [likes, setLikes] = useState(0);

  useEffect( () => {
    loadLikes(url, setLikes);
    // console.log(likes)
  }, [likes, url]);

  // console.log(url);
  // console.log(likes);

  const handleLike = url => {
    addLike(url);
    const event = new Event('my-event');
    dispatch(event);
  };

  return (
    <Styled styles={styles}>
      <div className="like" onClick={() => handleLike(url, likes)}>
        <span className="number">{ likes }</span>
        <span role="img" aria-label="claps" className="claps">👏</span>
      </div>
    </Styled>
  );
};

App.propTypes = {
  sampleList: PropTypes.array,
  componentTitle: PropTypes.string,
};

export default App;
