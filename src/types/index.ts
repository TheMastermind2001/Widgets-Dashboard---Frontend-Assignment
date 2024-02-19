// src/types/index.ts

export interface Widget {
    id: string;
    type: string;
    title: string;
    description?: string;
    data?: any; 
}
  
export interface DashboardData {
    widgets: Widget[];
}
  
export interface Table1Props {
    data?: Widget;
    today?: boolean;
    bgcolor?: string;
    children?: never[]
}

  