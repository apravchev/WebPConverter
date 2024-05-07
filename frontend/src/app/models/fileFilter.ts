export class FileFilter {
  format: 'webp' | 'jpeg' | 'jpg' | 'png' | false = false;
  search: string | false = false;
  date?:
    | {
        from: Date;
        to: Date;
      }
    | false = false;
  size?:
    | {
        min: number;
        max: number;
      }
    | false;
}
