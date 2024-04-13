export class ApiResponse {
  message: String = '';
  files?: {
    name: String;
    location: String;
    size: number;
  }[];
}
