export enum PrefixSuffixEnum {
  String = 'string',
  Icon = 'icon',
}

export interface PrefixSuffix {
  type: 'string' | 'icon';
  value: string;
  method?: (param?: any) => any;
}
