import { it, expect, describe } from '@angular/core/testing';
import {
  InsufficientStorageException,
  ServiceUnavailableException,
  NotImplementedException,
  InternalServerErrorException,
  UnavailableForLegalReasonsException,
  TooManyRequestsException,
  UnprocessableEntityException,
  ExpectationFailedException,
  RangeNotSatisfiableException,
  UnsupportedMediaTypeException,
  URITooLongException,
  PayloadTooLargeException,
  PreconditionFailedException,
  LengthRequiredException,
  GoneException,
  ConflictException,
  RequestTimeoutException,
  ProxyAuthenticationRequiredException,
  NotAcceptableException,
  MethodNotAllowedException,
  NotFoundException,
  ForbiddenException,
  PaymentRequiredException,
  UnauthorizedException,
  BadRequestException,
  HttpException
} from './exceptions';

describe('Exceptions', () => {

  const exceptions = [
    {exception: BadRequestException, code: 400},
    {exception: UnauthorizedException, code: 401},
    {exception: PaymentRequiredException, code: 402},
    {exception: ForbiddenException, code: 403},
    {exception: NotFoundException, code: 404},
    {exception: MethodNotAllowedException, code: 405},
    {exception: NotAcceptableException, code: 406},
    {exception: ProxyAuthenticationRequiredException, code: 407},
    {exception: RequestTimeoutException, code: 408},
    {exception: ConflictException, code: 409},
    {exception: GoneException, code: 410},
    {exception: LengthRequiredException, code: 411},
    {exception: PreconditionFailedException, code: 412},
    {exception: PayloadTooLargeException, code: 413},
    {exception: URITooLongException, code: 414},
    {exception: UnsupportedMediaTypeException, code: 415},
    {exception: RangeNotSatisfiableException, code: 416},
    {exception: ExpectationFailedException, code: 417},
    {exception: UnprocessableEntityException, code: 422},
    {exception: TooManyRequestsException, code: 429},
    {exception: UnavailableForLegalReasonsException, code: 451},
    {exception: InternalServerErrorException, code: 500},
    {exception: NotImplementedException, code: 501},
    {exception: ServiceUnavailableException, code: 503},
    {exception: InsufficientStorageException, code: 507},
  ];

  exceptions.forEach((check) => {

    it(`creates instance of ${check.exception.prototype.constructor.name} with status code ${check.code}`, () => {

      const exceptionInstance = new check.exception;

      expect(exceptionInstance instanceof Error).toBe(true);
      expect(exceptionInstance instanceof HttpException).toBe(true);
      expect(exceptionInstance.getStatusCode()).toEqual(check.code);
      expect(exceptionInstance.name).toEqual(exceptionInstance.constructor.name);

    });

  });



});
