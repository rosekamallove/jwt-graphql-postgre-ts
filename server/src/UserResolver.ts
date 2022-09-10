import { Resolver, Query } from "type-graphql";

@Resolver()
export class UserResolvers {
  @Query(() => String)
  hello() {
    return "hi!";
  }
}
