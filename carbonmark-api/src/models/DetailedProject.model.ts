import { Static, Type } from "@sinclair/typebox";
import { ActivityModel } from "./Activity.model";
import { ListingModel } from "./Listing.model";
import { MethodologyModel } from "./Methodology.model";
import { GeoJSONPointModel, ImageModel, Nullable } from "./Utility.model";

const PriceModel = Type.Object({
  poolName: Type.String(),
  supply: Type.String(),
  poolAddress: Type.String(),
  isPoolDefault: Type.Boolean(),
  projectTokenAddress: Type.String(),
  singleUnitPrice: Type.String(),
});

export const DetailedProjectModel = Type.Object({
  key: Type.String(),
  projectID: Nullable(Type.String()),
  name: Nullable(Type.String()),
  registry: Nullable(Type.String()),
  country: Nullable(Type.String()),
  description: Nullable(Type.String()),
  location: Nullable(GeoJSONPointModel),
  methodologies: Nullable(Type.Array(Nullable(MethodologyModel))),
  images: Type.Array(ImageModel),
  long_description: Nullable(Type.String()),
  url: Nullable(Type.String()),
  stats: Type.Object({
    totalBridged: Type.Number(),
    totalRetired: Type.Number(),
    totalSupply: Type.Number(),
  }),
  prices: Type.Array(PriceModel),
  listings: Type.Array(ListingModel),
  activities: Type.Array(ActivityModel),
  price: Type.String(),
  isPoolProject: Type.Boolean(),
  vintage: Type.String(),
});

export type DetailedProjectT = Static<typeof DetailedProjectModel>;