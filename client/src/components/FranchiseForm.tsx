import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertFranchiseInquirySchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Send } from "lucide-react";

const formSchema = insertFranchiseInquirySchema.extend({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function FranchiseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      territory: "",
      investmentLevel: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/franchise-inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted Successfully!",
        description: "Our team will contact you within 24 hours to discuss your franchise opportunity.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/franchise-inquiries"] });
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    createInquiryMutation.mutate(data);
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center" data-testid="heading-franchise-form">
        Distributor / Franchise Enquiry Form
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      {...field} 
                      data-testid="input-full-name"
                    />
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
                    <Input 
                      placeholder="+91 XXXXX XXXXX" 
                      {...field} 
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      {...field} 
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your city" 
                      {...field} 
                      data-testid="input-city"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-form-state">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="territory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specific Tehsil/Panchayat *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter desired territory" 
                      {...field} 
                      data-testid="input-territory"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="investmentLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proposed Investment Level *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-investment">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Investment Range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="50k-1l">₹50,000 – ₹1 Lakh</SelectItem>
                    <SelectItem value="1l-3l">₹1 Lakh – ₹3 Lakh</SelectItem>
                    <SelectItem value="3l-plus">₹3 Lakh+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="text-center">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-submit-application"
            >
              <Send className="mr-2" size={20} />
              {isSubmitting ? "Submitting..." : "Submit My Application"}
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center mt-4">
            By submitting this form, you agree to our terms and conditions. Our team will contact you within 24 hours.
          </p>
        </form>
      </Form>
    </div>
  );
}
