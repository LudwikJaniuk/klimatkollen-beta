export interface IndustryGics {
  name: string;
  sector: {
    code: string;
    name: string;
  };
  group: {
    code: string;
    name: string;
  };
  industry: {
    code: string;
    name: string;
  };
  subIndustry: {
    code: string;
    name: string;
  };
}

export interface IndustryNace {
  section: {
    code: string;
    name: string;
  };
  division: {
    code: string;
    name: string;
  };
}

export interface EmissionsScope {
  emissions: number | null;
  unit: string;
  biogenic?: number;
  mb?: number;
  lb?: number;
  categories?: {
    "1_purchasedGoods": number | null,
    "2_capitalGoods": number | null,
    "3_fuelAndEnergyRelatedActivities": number | null,
    "4_upstreamTransportationAndDistribution": number | null,
    "5_wasteGeneratedInOperations": number | null,
    "6_businessTravel": number | null,
    "7_employeeCommuting": number | null,
    "8_upstreamLeasedAssets": number | null,
    "9_downstreamTransportationAndDistribution": number | null,
    "10_processingOfSoldProducts": number | null,
    "11_useOfSoldProducts": number | null,
    "12_endOfLifeTreatmentOfSoldProducts": number | null,
    "13_downstreamLeasedAssets": number | null,
    "14_franchises": number | null,
    "15_investments": number | null,
    "16_other": number | null
  };
}

export interface Emissions {
  [year: string]: {
    year: string;
    scope1: EmissionsScope;
    scope2: EmissionsScope;
    scope3: EmissionsScope;
  }
}

export interface BaseFacts {
  [year: string]: {
    turnover: number;
    employees: number;
    unit: string;
  };
}

export interface Factors {
  product: string;
  description: string;
  value: number;
  unit: string;
}

export interface Contact {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface Goal {
  description: string;
  year: number;
  reductionPercent: number;
  baseYear: string;
}

export interface Initiative {
  title: string;
  description: string;
  year: number;
  reductionPercent: number;
  scope: string;
}

export interface CompanyData {
  companyName: string;
  description: string;
  industryGics: IndustryGics;
  industryNace: IndustryNace;
  baseYear: string;
  url: string;
  emissions: Emissions;
  baseFacts: BaseFacts;
  factors: Factors[];
  contacts: Contact[];
  goals: Goal[];
  initiatives: Initiative[];
  reliability: string;
  needsReview: boolean;
  reviewComment: string;
}

export const isCompany = (value: CompanyData): value is CompanyData => {
  console.log('isCompany', !!value.companyName , !!value.description , !!value.industryGics , !!value.industryNace , !!value.url , !!value.emissions , !!value.baseFacts)
  if (value.companyName && value.industryGics && value.industryNace && value.url && value.emissions && value.baseFacts)
    return true
  else
    return false;
}