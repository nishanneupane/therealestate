export interface Property {
  id: string;
  imageUrl: string;
  price: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  acres?: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  propertyType: "Single-Family Home" | "Land" | "Condo" | "Townhouse";
  isNew?: boolean;
  newHoursAgo?: number;
}
