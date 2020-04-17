export interface IToken<T = any, O = any> {
  origIndex?: number;
  origLength?: number;
  fragment?: T;
  orig?: O[];
}
