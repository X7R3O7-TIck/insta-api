export interface AccountRepositoryLoginErrorResponse {
  message: string;
  status: string;
  error_type?: string;
  two_factor_required?: boolean;
  two_factor_info?: any;
  challenge?: any;
}
