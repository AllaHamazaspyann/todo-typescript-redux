export interface SingleTodo {
    text: string,
    complete: boolean,
    date: any,
    section: string
  }
  
export enum SectionStatus {
    active = 'active',
    expired = 'expired',
    completed = 'completed',
  }

export type ToggleTodos = () => void;