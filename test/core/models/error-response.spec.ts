import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { ErrorResponse } from "../../../src/core/models/error-response";

describe("ErrorResponse", () => {
  it("should correctly set properties in constructor", () => {
    const errors = ["Error 1", "Error 2"];
    const errorResponse = new ErrorResponse(
      StatusCodes.BAD_REQUEST,
      getReasonPhrase(StatusCodes.BAD_REQUEST),
      errors
    );

    expect(errorResponse.responseType).toEqual("error");
    expect(errorResponse.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(errorResponse.message).toEqual(
      getReasonPhrase(StatusCodes.BAD_REQUEST)
    );
    expect(errorResponse.errors).toEqual(errors);
  });

  it("should create error response with factory method", () => {
    const errors = ["Error 1", "Error 2"];
    const errorResponse = ErrorResponse.createError(
      StatusCodes.BAD_REQUEST,
      errors
    );

    expect(errorResponse.responseType).toEqual("error");
    expect(errorResponse.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(errorResponse.message).toEqual(
      getReasonPhrase(StatusCodes.BAD_REQUEST)
    );
    expect(errorResponse.errors).toEqual(errors);
  });
});
