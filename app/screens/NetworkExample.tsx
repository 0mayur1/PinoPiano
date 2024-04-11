import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {useTheme} from '../theme/useTheme';
import Layout from '../components/Layout';
import NetwokExampleCard from '../components/NetwokExampleCard';

import {RootState, AppDispatch} from '../store/store';
import {fetchUser, createUser} from '../store/dummyNetwork';
import PianoTiles from '../../src/PianoTiles';

const dummyData = {
  name: 'Harry',
  email: 'harry@hogwarts.com',
};

export default function NetworkExample() {
  const {theme} = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.dummyNetwork.data);
  const newUser = useSelector((state: RootState) => state.dummyNetwork.newUser);

  const dataStatus = useSelector(
    (state: RootState) => state.dummyNetwork.data.status,
  );
  const newUserStatus = useSelector(
    (state: RootState) => state.dummyNetwork.newUser.status,
  );

  const fetchData = () => {
    dispatch(fetchUser());
  };

  const postData = () => {
    dispatch(createUser(dummyData));
  };

  return (
    <Layout>
       <PianoTiles speed={80}/>
    </Layout>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  url: {
    fontSize: 12,
    marginBottom: 10,
  },
  code: {
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
  },
  grid: {
    flex: 0.5,
  },
});
