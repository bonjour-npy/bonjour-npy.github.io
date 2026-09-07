import React from 'react';
import DocItem from '@theme-original/DocItem';
import GiscusComponent from '../../components/GiscusComponent';

export default function DocItemWrapper(props) {
  // Existing Giscus threads were created before the blog moved to /blog/ and
  // while the site title was "培洋的主页 🤗". Keep that original document title
  // as a stable key so old comments remain attached after URL/title changes.
  const discussionTerm = `${props.content.metadata.title} - 培洋的主页 🤗`;

  return (
    <>
      <DocItem {...props} />
      <GiscusComponent discussionTerm={discussionTerm} />
    </>
  );
}
