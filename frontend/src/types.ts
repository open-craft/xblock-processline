/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

/**
 * Top-level process line configuration payload.
 */
export interface ProcessLineConfiguration {
  displayName?: string;
  introductionText?: string;
  styling?: ProcessLineStyling;
  items?: ProcessLineItem[];
}
/**
 * Styling configuration for the process line.
 */
export interface ProcessLineStyling {
  lineItemTitleColor?: string;
  lineItemTitleFontSize?: number;
  lineItemLabelColor?: string;
  lineItemLabelFontSize?: number;
  highlightColor?: string;
  cardBackgroundColor?: string;
  cardTitleColor?: string;
  cardTitleFontSize?: number;
  cardDescriptionColor?: string;
  cardDescriptionFontSize?: number;
}
/**
 * One item on the process line.
 */
export interface ProcessLineItem {
  title?: string;
  label?: string;
  description?: string;
  displayAboveLine?: boolean;
  position?: number;
}
