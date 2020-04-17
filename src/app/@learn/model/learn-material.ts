import { ExternalLink } from '../../@shared/model/external-link';

export interface LearnMaterial {
  class: number;
  title: string;
  description?: string;
  routerLink?: string;
  authors?: string[];
  license?: string;
  learnSteps?: string[];
  externalLinks?: ExternalLink[];
}
