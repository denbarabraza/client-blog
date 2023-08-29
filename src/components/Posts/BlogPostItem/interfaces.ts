export interface IBlogPost {
  id: number;
  title: string;
  authorId: number;
  category: string;
  preview: string;
  image: string;
  createdAt: string;
  text: string;
}

export interface IBlogPostItem {
  blogPost: IBlogPost;
}
