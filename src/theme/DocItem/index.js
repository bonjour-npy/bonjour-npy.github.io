import React from 'react';
import DocItem from '@theme-original/DocItem';
import GiscusComponent from '../../components/GiscusComponent';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <GiscusComponent />
    </>
  );
}