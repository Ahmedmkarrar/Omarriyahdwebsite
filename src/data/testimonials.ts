export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
  propertyType: string;
  location: string;
  transactionType: "buyer" | "seller" | "investor";
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Thompson",
    title: "Luxury Home Buyers",
    quote:
      "Omar's market knowledge and negotiation skills saved us $200K on our Montecito estate. His discretion and professionalism throughout the process was exceptional. We couldn't have found our dream home without him.",
    rating: 5,
    propertyType: "Montecito Estate",
    location: "Montecito, CA",
    transactionType: "buyer",
  },
  {
    id: "2",
    name: "Dr. Richard Hartley",
    title: "Real Estate Investor",
    quote:
      "I've worked with many agents over my 20+ years of investing, and Omar stands out for his market intelligence and deal-making ability. He identified an off-market opportunity that has been my best investment to date.",
    rating: 5,
    propertyType: "Commercial Investment",
    location: "Santa Barbara, CA",
    transactionType: "investor",
  },
  {
    id: "3",
    name: "Jennifer & David Chen",
    title: "Beverly Hills Sellers",
    quote:
      "Omar sold our Beverly Hills home for $1.2M over asking in just 9 days. His marketing strategy and network of high-net-worth buyers delivered results beyond our expectations. Truly world-class service.",
    rating: 5,
    propertyType: "Beverly Hills Modern",
    location: "Beverly Hills, CA",
    transactionType: "seller",
  },
  {
    id: "4",
    name: "Alexandra Reynolds",
    title: "CEO & Entrepreneur",
    quote:
      "As a busy executive, I needed an agent who could handle everything seamlessly. Omar's attention to detail and responsiveness made purchasing my second home completely stress-free. He's now my go-to for all real estate.",
    rating: 5,
    propertyType: "Waterfront Villa",
    location: "Malibu, CA",
    transactionType: "buyer",
  },
  {
    id: "5",
    name: "The Morrison Family",
    title: "Repeat Clients",
    quote:
      "We've bought and sold three properties with Omar over the past five years. His integrity, expertise, and genuine care for his clients set him apart. He's not just our agent—he's a trusted advisor and friend.",
    rating: 5,
    propertyType: "Multiple Properties",
    location: "Central Coast, CA",
    transactionType: "buyer",
  },
  {
    id: "6",
    name: "Robert & Maria Santos",
    title: "International Buyers",
    quote:
      "Relocating from overseas was daunting, but Omar made it effortless. He understood our needs perfectly and found us the ideal home in Montecito. His knowledge of the local market is unparalleled.",
    rating: 5,
    propertyType: "Spanish Estate",
    location: "Montecito, CA",
    transactionType: "buyer",
  },
];

export const stats = [
  {
    value: "$100M+",
    label: "in Sales",
    description: "Total transaction volume",
  },
  {
    value: "150+",
    label: "Properties Sold",
    description: "Successful transactions",
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "In luxury real estate",
  },
  {
    value: "5-Star",
    label: "Client Reviews",
    description: "Consistent excellence",
  },
];
