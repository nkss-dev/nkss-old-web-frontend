export type Course = {
  code: string;
  title: string;
  prereq: string[];
  kind: string;
  objectives: [string];
  outcomes: [string];
  specifics: [
    {
      branch: string,
      semester: number,
      credits: number[],
    }
  ]
}