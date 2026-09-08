// Rotation pool for the home page mentor section, shown four at a time.
//
// Two rules when editing this list:
//  1. Keep the length a multiple of 4, so no group is short.
//  2. Only use mentors whose headshot is at least 600px wide. At four across
//     the cards render ~286px, and most of the 250 headshots are under 250px,
//     which visibly softens at that size.
export const FEATURED_MENTOR_SLUGS = [
  // group 1
  "nidal-babar", // SVP and CIO, Global Servicing, American Express
  "dana-deasy", // Chief Information Digital Officer, Boeing
  "ash-banerjee", // Global Chief Information Officer, Dentons
  "asli-de-munnink", // Global Director of Digital Products, Gartner
  // group 2
  "likhit-wagle", // Managing Partner, Financial Services, IBM Consulting
  "michael-golz", // Managing Director & CTO, SAP Advisory, KPMG US
  "david-wong", // Managing Director, Alvarez & Marsal
  "maya-leibman", // Senior Advisor, American Airlines
  // group 3
  "tiago-azevedo", // Chief Information Officer, OutSystems
  "tim-conway", // Chief Information Officer, Amwell
  "regina-salazar", // Chief Digital & Information Officer, THG Advisors
  "robert-duncan", // Group Chief Information Security Officer, Ardagh Group
  // group 4
  "jane-aboyoun", // Fractional / Interim CIO, CTO, Fortium Partners
  "david-moradi", // CEO & Board Member, AudioEye
  "joel-molinoff", // Global Head, Third-Party Risk, BlueVoyant
  "thomas-burke", // President, Tax Services, Broadridge
];

// How many mentors are on screen at once.
export const FEATURED_GROUP_SIZE = 4;
