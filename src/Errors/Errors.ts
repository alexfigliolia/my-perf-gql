import type { Response } from "express";
import type { GraphQLError } from "graphql";

export class Errors {
  public static readonly NOT_FOUND = {
    status: 404,
    code: "NOT_FOUND",
  };
  public static readonly BAD_REQUEST = {
    status: 400,
    code: "BAD_REQUEST",
  };

  public static handler(response: Response) {
    return (error: GraphQLError) => {
      const status = error.extensions?.status as number;
      response.status(status || 500);
      return error;
    };
  }
}
