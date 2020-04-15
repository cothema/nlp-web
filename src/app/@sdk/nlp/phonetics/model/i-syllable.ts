export interface ISyllable {
  origIndex: number;
  origLength: number;
  fragment: {
    type: 'syllable';
    string: string;
  };
}
