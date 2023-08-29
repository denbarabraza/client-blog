import { IOffice } from '@/types';

export interface IMarkerControl {
  currentOffices: IOffice[];
  selectedOffice: IOffice | null;
  setSelectedOffice: (office: IOffice | null) => void;
}
