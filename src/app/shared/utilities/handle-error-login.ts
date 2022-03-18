import { HttpErrorResponse } from "@angular/common/http";
import { Error } from "../models/errors";

export function handleErrorLogin(error: HttpErrorResponse) {
  let errorReturn: Error = {
    StatusCode: 0,
    Message: ""
  };

  if (error.status === 400) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Dados incorretos';
    return errorReturn;
  } else if (error.status === 404) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Usuário não encontrado';
    return errorReturn;
  } else if (error.status === 500) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Erro no servidor';
    return errorReturn;
  } else if (error.status === 0) {
    errorReturn.StatusCode = error.status;
    errorReturn.Message = 'Offline';
    return errorReturn;
  }

  return null;
};
