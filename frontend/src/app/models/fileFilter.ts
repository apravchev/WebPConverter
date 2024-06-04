export class FileFilter {
  format?: 'webp' | 'jpeg' | 'jpg' | 'png' | false = false;
  search?: string = '';
  date?:
    | {
        from?: Date;
        to?: Date;
      }
    | false = false;
  size?:
    | {
        min?: number | false;
        max?: number | false;
      }
    | false;
}
