export interface User {
  lastName: string;
  firstName: string;
  age?: number;
  address?: {
    street?: string,
    city?: string,
    state?: string
  };
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
}
