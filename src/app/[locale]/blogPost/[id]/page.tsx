'use client';

import React, { FC, useMemo } from 'react';

import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import BlogPostItem from '@/components/Posts/BlogPostItem';
import RelatedBlogPosts from '@/components/Posts/RelatedBlogPosts';
import posts from '@/constants/data/posts.json';

import { BlogPostPageProps } from './types';

const BlogPost: FC<BlogPostPageProps> = ({ params: { id } }) => {
  const currentBlogPost = useMemo(
    () => posts.filter(blogPost => blogPost.id === Number(id))[0],
    [id],
  );

  return (
    <div>
      <LayoutWrapper>
        <BlogPostItem blogPost={currentBlogPost} />
        <RelatedBlogPosts
          category={currentBlogPost.category}
          blogPostId={currentBlogPost.id}
        />
      </LayoutWrapper>
      <JoinOurTeam />
    </div>
  );
};

export default BlogPost;
