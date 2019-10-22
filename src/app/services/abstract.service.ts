import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';

export interface ObjetoParametro {
  dados?: any;
  exibirLoading?: boolean;
  dispararMensagemError?: boolean;
  enviarComoQueryString?: boolean;

}

export abstract class AbstractService {

  abstract getBaseURL(): string;

  abstract getResources(): string;

  abstract getHttpClient(): HttpClient;

  abstract dispararLoading();

  abstract removerLoading();

  abstract disparaMensagemErro(mensagemErro);

  url(servico) {
    return `${this.getBaseURL()}${this.getResources()}${servico}`;
  }

  get<T>(servico: string, param: ObjetoParametro = {}): Observable<T> {

    if (param.exibirLoading) {
      this.dispararLoading();
    }

    return this.getHttpClient().get<T>(this.url(servico), { params: param.dados })
      .pipe(
        take(1),
        finalize(() => param.exibirLoading ? this.removerLoading() : null),
        catchError(error => this.tratarErro(error, param.dispararMensagemError))
      );
  }

  post<T>(servico: string, param: ObjetoParametro = {}): Observable<T> {

    if (param.exibirLoading) {
      this.dispararLoading();
    }

    const corpo = param.enviarComoQueryString ? {} : param.dados;
    const params = param.enviarComoQueryString ? param.dados : {};

    return this.getHttpClient().post<T>(this.url(servico), corpo, { params })
      .pipe(
        take(1),
        finalize(() => param.exibirLoading ? this.removerLoading() : null),
        catchError(error => this.tratarErro(error, param.dispararMensagemError))
      );
  }

  put<T>(servico: string, param: ObjetoParametro = {}): Observable<T> {
    if (param.exibirLoading) {
      this.dispararLoading();
    }

    const corpo = param.enviarComoQueryString ? {} : param.dados;
    const params = param.enviarComoQueryString ? param.dados : {};

    return this.getHttpClient().put<T>(this.url(servico), corpo, { params })
      .pipe(
        take(1),
        finalize(() => param.exibirLoading ? this.removerLoading() : null),
        catchError(error => this.tratarErro(error, param.dispararMensagemError))
      );
  }

  protected tratarErro(resposta: Response | any, dispararMensagemError: boolean) {
    if (dispararMensagemError === undefined || dispararMensagemError) {

      let mensagemDeErro: string;
      const bodyError = resposta ? resposta.error : null;

      if (bodyError && bodyError.hasOwnProperty('statusCode')) {
        const responseError: any = bodyError;
        if (responseError.erros && responseError.erros.length === 1) {
          const error = responseError.erros[0];
          mensagemDeErro = error.message;
        }
      } else {
        const body: any = resposta.error || '';
        const err = body.error || JSON.stringify(body);
        mensagemDeErro = `${err}`;
        // mensagemDeErro = `${resposta.status} - ${resposta.statusText || ''} ${err}`;
      }

      this.disparaMensagemErro(mensagemDeErro);
    }

    return throwError(resposta);
  }


}

