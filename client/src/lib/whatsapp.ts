// WhatsApp utility functions for generating prefilled message links

const WHATSAPP_NUMBER = "919660393455"; // +91 96603 93455

export interface ProductInquiryData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  address: string;
  productName: string;
  quantity: string;
  message?: string | null;
}

export interface FranchiseInquiryData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  territory: string;
  investmentLevel: string;
}

export function generateProductInquiryMessage(data: ProductInquiryData): string {
  const message = `🌿 *TRUE Healthcare™ Product Inquiry*

*Product:* ${data.productName}
*Quantity:* ${data.quantity}

*Customer Details:*
📝 Name: ${data.fullName}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
📍 Location: ${data.city}, ${data.state}
🏠 Address: ${data.address}

${data.message ? `*Additional Message:*\n${data.message}\n\n` : ''}*Request:* Please provide product availability, pricing, and delivery details for the above inquiry.

Thank you! 🙏`;

  return message;
}

export function generateFranchiseInquiryMessage(data: FranchiseInquiryData): string {
  const message = `🤝 *TRUE Healthcare™ Franchise Inquiry*

*Franchise Details:*
💰 Investment Level: ${data.investmentLevel}
🗺️ Desired Territory: ${data.territory}

*Applicant Details:*
📝 Name: ${data.fullName}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
📍 Location: ${data.city}, ${data.state}

*Request:* I am interested in becoming a TRUE Healthcare™ franchise partner. Please share detailed information about:
- Territory availability
- Investment requirements
- Training and support
- Expected ROI and business model

Looking forward to hearing from you! 🙏`;

  return message;
}

export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string): void {
  const link = generateWhatsAppLink(message);
  window.open(link, '_blank');
}

// Specific WhatsApp handlers
export function sendProductInquiryToWhatsApp(data: ProductInquiryData): void {
  const message = generateProductInquiryMessage(data);
  openWhatsApp(message);
}

export function sendFranchiseInquiryToWhatsApp(data: FranchiseInquiryData): void {
  const message = generateFranchiseInquiryMessage(data);
  openWhatsApp(message);
}