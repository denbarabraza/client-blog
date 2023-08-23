export interface ILanguage {
  local: { [key: string]: string };
}

export interface IPageProps {
  params: ILanguage;
}

export interface IAuthor {
  id: number;
  image: string;
  name: string;
  post: string;
  company: string;
  from: string;
  info: string;
  review: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}
