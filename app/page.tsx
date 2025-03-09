/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck good
import Hero from "@/components/hero";
import { ListingSection } from "@/components/properties/listing";
import { propertyData } from "@/lib/property-data";

export default function Home() {
  return (
    <div>
      <Hero />

      <main className="container mx-auto px-4 py-8">
        <ListingSection title="Homes around Rs. 5,459,900" viewAllLink="#" properties={propertyData.homesAround59900} />

        <ListingSection title="Newest Listings" viewAllLink="#" properties={propertyData.newestListings} />

        <ListingSection title="Upcoming Open Houses" viewAllLink="#" properties={propertyData.upcomingOpenHouses} />

        <ListingSection title="Affordable Homes" viewAllLink="#" properties={propertyData.affordableHomes} />

        <ListingSection title="Luxury Homes" viewAllLink="#" properties={propertyData.luxuryHomes} />
      </main>
    </div>
  );
}
