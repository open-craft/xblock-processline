import type {
  ProcessLineConfiguration as ProcessLineConfigurationSchema,
  ProcessLineItem as ProcessLineItemSchema,
  ProcessLineStyling as ProcessLineStylingSchema,
} from './types';

export type ProcessLineItem = Required<ProcessLineItemSchema>;

export type ProcessLineStyling = Required<ProcessLineStylingSchema>;

export interface ProcessLineConfiguration
  extends Required<Omit<ProcessLineConfigurationSchema, 'styling' | 'items'>> {
  styling: ProcessLineStyling;
  items: ProcessLineItem[];
}
