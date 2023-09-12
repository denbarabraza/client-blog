import { TextInAboutTeamEnum } from 'constants/enum';

export interface IAboutTeam {
  variant: TextInAboutTeamEnum;
  label: string;
  title: string;
  text: string;
  src: string;
  shape: string;
  alt: string;
}
