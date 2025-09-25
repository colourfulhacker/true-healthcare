import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertProductInquirySchema, type InsertProductInquiry } from "../../../shared/schema";
import { Package } from "lucide-react";

interface ProductInquiryFormProps {
  productName: string;
  children: React.ReactNode;
}

export default function ProductInquiryForm({ productName, children }: ProductInquiryFormProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertProductInquiry>({
    resolver: zodResolver(insertProductInquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      address: "",
      productName: productName,
      quantity: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertProductInquiry) => {
    try {
      const response = await fetch("/api/product-inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest. We will contact you within 24-48 hours with product availability and delivery details.",
      });

      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-primary">
            <Package className="mr-2" size={20} />
            Product Inquiry - {productName}
          </DialogTitle>
          <DialogDescription>
            Fill out this form to inquire about direct delivery of this product to your location. We'll contact you with availability, pricing, and delivery options.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} data-testid="input-product-inquiry-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} data-testid="input-product-inquiry-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" type="email" {...field} data-testid="input-product-inquiry-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your city" {...field} data-testid="input-product-inquiry-city" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your state" {...field} data-testid="input-product-inquiry-state" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complete Address *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter your complete address for delivery" 
                      {...field} 
                      data-testid="input-product-inquiry-address"
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity Required *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 1 bottle, 2 bottles, 1 month supply" {...field} data-testid="input-product-inquiry-quantity" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific requirements or questions about the product..." 
                      {...field}
                      value={field.value || ""}
                      data-testid="input-product-inquiry-message"
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                data-testid="button-product-inquiry-cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="gradient-premium text-white"
                data-testid="button-product-inquiry-submit"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}