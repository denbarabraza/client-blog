export enum HeaderTypeEnum {
  Header = 'header',
  Footer = 'footer',
}

export interface INavMenu {
  type: HeaderTypeEnum;
  locale: string;
}
