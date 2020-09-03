import { SectionStatus } from './Components/mainTypes';
import { differenceInDays } from 'date-fns';

export const statusUpdate = (todoDate: string) => {
    const difference = differenceInDays(new Date(todoDate), new Date()) >= 0;
    if(difference){
      return SectionStatus.active;
    }
    return SectionStatus.expired;
  }