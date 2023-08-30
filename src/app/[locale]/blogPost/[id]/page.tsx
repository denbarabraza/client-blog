'use client';

import React, { FC, Fragment, useMemo } from 'react';

import JoinOurTeam from '@/components/JoinOurTeam';
import LayoutWrapper from '@/components/LayoutWrapper';
import BlogPostItem from '@/components/Posts/BlogPostItem';
import RelatedBlogPosts from '@/components/Posts/RelatedBlogPosts';
import posts from '@/constants/data/posts.json';
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfinityScroll';

import { BlogPostPageProps } from './interface';

const BlogPost: FC<BlogPostPageProps> = ({ params: { id } }) => {
  const currentBlogPost = useMemo(
    () => posts.filter(blogPost => blogPost.id === Number(id))[0],
    [id],
  );

  const componentsBlogPost = [
    <BlogPostItem blogPost={currentBlogPost} key={0} />,
    <RelatedBlogPosts
      key={1}
      category={currentBlogPost.category}
      blogPostId={currentBlogPost.id}
    />,
    <JoinOurTeam key={2} />,
  ];

  const visibleComponents = useCustomInfiniteScroll(componentsBlogPost);

  return (
    <LayoutWrapper>
      {visibleComponents?.map(component => (
        <Fragment key={component.toString()}>{component}</Fragment>
      ))}
    </LayoutWrapper>
  );
};

export default BlogPost;
