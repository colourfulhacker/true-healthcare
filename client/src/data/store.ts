import { type Territory, type FranchiseInquiry, type InsertFranchiseInquiry, insertFranchiseInquirySchema, type ProductInquiry, type InsertProductInquiry, insertProductInquirySchema } from "../schema";

// Initial territory data
const initialTerritories: Territory[] = [
  {
    id: "1",
    state: "Rajasthan",
    district: "Jaipur",
    tehsil: "Pachkodiya",
    panchayat: "Village A",
    isAvailable: "true",
    slotsRemaining: "2"
  },
  {
    id: "2",
    state: "Rajasthan",
    district: "Jaipur",
    tehsil: "Phulera",
    panchayat: "Village B",
    isAvailable: "true",
    slotsRemaining: "3"
  },
  {
    id: "3",
    state: "Maharashtra",
    district: "Mumbai",
    tehsil: "Andheri",
    panchayat: "Ward 1",
    isAvailable: "false",
    slotsRemaining: "0"
  },
  {
    id: "4",
    state: "Gujarat",
    district: "Ahmedabad",
    tehsil: "Bopal",
    panchayat: "Area 1",
    isAvailable: "true",
    slotsRemaining: "1"
  }
];

// Generate unique ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Territory functions
export function getTerritoryOptions(level: string, parent?: string): string[] {
  switch (level) {
    case "states":
      return Array.from(new Set(initialTerritories.map(t => t.state)));
    case "districts":
      return Array.from(new Set(initialTerritories.filter(t => t.state === parent).map(t => t.district)));
    case "tehsils":
      const [state, district] = parent?.split(",") || [];
      return Array.from(new Set(initialTerritories.filter(t => t.state === state && t.district === district).map(t => t.tehsil)));
    case "panchayats":
      const [s, d, t] = parent?.split(",") || [];
      return Array.from(new Set(initialTerritories.filter(territory => territory.state === s && territory.district === d && territory.tehsil === t).map(territory => territory.panchayat)));
    default:
      return [];
  }
}

export function checkTerritoryAvailability(state: string, district: string, tehsil: string, panchayat: string): {
  available: boolean;
  slotsRemaining?: number;
  message: string;
} {
  const territory = initialTerritories.find(t => 
    t.state === state && 
    t.district === district && 
    t.tehsil === tehsil && 
    t.panchayat === panchayat
  );
  
  if (!territory) {
    return { 
      available: false, 
      message: "Territory information not found. Please contact us for availability." 
    };
  }

  if (territory.isAvailable === "true") {
    return {
      available: true,
      slotsRemaining: parseInt(territory.slotsRemaining),
      message: `Congratulations! Only ${territory.slotsRemaining} slots left in this area! Apply now to claim yours.`
    };
  } else {
    return {
      available: false,
      message: "We're sorry, this area is currently fully allocated. Please check a nearby location or contact us for future openings."
    };
  }
}

// Franchise inquiry functions with localStorage persistence
const INQUIRIES_KEY = 'franchise_inquiries';

function getStoredInquiries(): FranchiseInquiry[] {
  try {
    const stored = localStorage.getItem(INQUIRIES_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    // Convert createdAt strings back to Date objects
    return parsed.map((inquiry: any) => ({
      ...inquiry,
      createdAt: new Date(inquiry.createdAt)
    }));
  } catch (error) {
    console.warn('Failed to load stored inquiries:', error);
    return [];
  }
}

function saveInquiries(inquiries: FranchiseInquiry[]): void {
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
  } catch (error) {
    console.warn('Failed to save inquiries:', error);
  }
}

export function createFranchiseInquiry(data: InsertFranchiseInquiry): FranchiseInquiry {
  // Validate input data
  const validatedData = insertFranchiseInquirySchema.parse(data);
  
  const inquiry: FranchiseInquiry = {
    ...validatedData,
    id: generateId(),
    createdAt: new Date()
  };
  
  const inquiries = getStoredInquiries();
  inquiries.push(inquiry);
  saveInquiries(inquiries);
  
  return inquiry;
}

export function getFranchiseInquiries(): FranchiseInquiry[] {
  return getStoredInquiries();
}

export function clearFranchiseInquiries(): void {
  localStorage.removeItem(INQUIRIES_KEY);
}

// Product inquiry functions with localStorage persistence
const PRODUCT_INQUIRIES_KEY = 'product_inquiries';

function getStoredProductInquiries(): ProductInquiry[] {
  try {
    const stored = localStorage.getItem(PRODUCT_INQUIRIES_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    // Convert createdAt strings back to Date objects
    return parsed.map((inquiry: any) => ({
      ...inquiry,
      createdAt: new Date(inquiry.createdAt)
    }));
  } catch (error) {
    console.warn('Failed to load stored product inquiries:', error);
    return [];
  }
}

function saveProductInquiries(inquiries: ProductInquiry[]): void {
  try {
    localStorage.setItem(PRODUCT_INQUIRIES_KEY, JSON.stringify(inquiries));
  } catch (error) {
    console.warn('Failed to save product inquiries:', error);
  }
}

export function createProductInquiry(data: InsertProductInquiry): ProductInquiry {
  // Validate input data
  const validatedData = insertProductInquirySchema.parse(data);
  
  const inquiry: ProductInquiry = {
    ...validatedData,
    id: generateId(),
    createdAt: new Date()
  };
  
  const inquiries = getStoredProductInquiries();
  inquiries.push(inquiry);
  saveProductInquiries(inquiries);
  
  return inquiry;
}

export function getProductInquiries(): ProductInquiry[] {
  return getStoredProductInquiries();
}

export function clearProductInquiries(): void {
  localStorage.removeItem(PRODUCT_INQUIRIES_KEY);
}