// src/types/index.ts

export interface Widget{
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
    children?: never[];
    noradius?:boolean;
}


// types.ts
export interface PlatformData {
    Initial: number;
    Google: number;
    Instagram: number;
    Facebook: number;
    TikTok: number;
  }
  
  export interface CampaignData {
    name: string;
    color: string;
    value: number;
    platforms: PlatformData;
  }
  
  export interface ChartData extends Widget{
    timeframe: string;
    data: CampaignData[];
  }
  
  export interface LineChartProps {
    chartData: ChartData;
    xLabelPresent: boolean;
  }
  
  export interface LineWidgetProps extends LineChartProps {
    bgcolor: string;
  }

  export interface LineWidgetFlexibleDimensionProps extends LineWidgetProps{
    height: string,
    width: string
  }


  