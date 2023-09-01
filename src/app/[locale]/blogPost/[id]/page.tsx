'use client';

import React, { FC, useMemo } from 'react';

import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import BlogPostItem from '@/components/Posts/BlogPostItem';
import RelatedBlogPosts from '@/components/Posts/RelatedBlogPosts';
import VirtualizedList from '@/components/VirtualizedList';
import posts from '@/constants/data/posts.json';
import { VirtualizedListItem } from '@/types';
import { renderVirtualizedList } from '@/utils/renderVirtualizedList';

import { BlogPostPageProps } from './interface';

const BlogPost: FC<BlogPostPageProps> = ({ params: { id } }) => {
  const currentBlogPost = useMemo(
    () => posts.filter(blogPost => blogPost.id === Number(id))[0],
    [id],
  );

  const dataBlogPostPage: VirtualizedListItem[] = [
    { id: 'blogPostItem', render: () => <BlogPostItem blogPost={currentBlogPost} /> },
    {
      id: 'relatedBlogPosts',
      render: () => (
        <RelatedBlogPosts
          category={currentBlogPost.category}
          blogPostId={currentBlogPost.id}
        />
      ),
    },
    { id: 'joinOurTeam', render: () => <JoinOurTeam /> },
  ];

  return (
    <LayoutWrapper>
      <VirtualizedList
        data={dataBlogPostPage}
        renderItem={renderVirtualizedList}
        defaultItemHeight={250}
      />
    </LayoutWrapper>
  );
};

export default BlogPost;
