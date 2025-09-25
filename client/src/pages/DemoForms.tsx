import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Package, UserPlus, Search, CheckCircle } from "lucide-react";

// Form Schemas for Demo
const territoryInterestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
});

const productDemoSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  productCategory: z.string().min(1, "Please select a product category"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  notes: z.string().optional(),
});

const distributorOnboardingSchema = z.object({
  distributorName: z.string().min(2, "Distributor name is required"),
  businessLicense: z.string().min(5, "Business license number is required"),
  gstNumber: z.string().min(15, "Valid GST number is required"),
  bankAccount: z.string().min(10, "Bank account number is required"),
  territoryCode: z.string().min(1, "Please select territory"),
  initialOrder: z.string().min(1, "Please select initial order value"),
});

const territoryCheckSchema = z.object({
  pincode: z.string().min(6, "Please enter a valid pincode"),
  district: z.string().min(2, "District is required"),
  state: z.string().min(2, "State is required"),
});

export default function DemoForms() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("territory-interest");

  // Territory Interest Form
  const territoryForm = useForm({
    resolver: zodResolver(territoryInterestSchema),
    defaultValues: { name: "", phone: "", city: "", state: "" },
  });

  // Product Demo Form
  const productForm = useForm({
    resolver: zodResolver(productDemoSchema),
    defaultValues: {
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      productCategory: "",
      preferredDate: "",
      notes: "",
    },
  });

  // Distributor Onboarding Form
  const distributorForm = useForm({
    resolver: zodResolver(distributorOnboardingSchema),
    defaultValues: {
      distributorName: "",
      businessLicense: "",
      gstNumber: "",
      bankAccount: "",
      territoryCode: "",
      initialOrder: "",
    },
  });

  // Territory Check Form
  const territoryCheckForm = useForm({
    resolver: zodResolver(territoryCheckSchema),
    defaultValues: { pincode: "", district: "", state: "" },
  });

  const handleDemoSubmit = (formType: string, data: any) => {
    toast({
      title: "Demo Form Submitted Successfully!",
      description: `${formType} form submitted for demonstration. In a real application, this would be processed by our backend system.`,
    });
    console.log(`${formType} Demo Data:`, data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4" data-testid="heading-demo-forms">
              Franchise Application Forms Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive digital application system designed to streamline the franchise onboarding process. These forms demonstrate the various touchpoints in our partner journey.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8" data-testid="tabs-demo-forms">
              <TabsTrigger value="territory-interest" className="text-sm">
                <MapPin className="mr-2" size={16} />
                Territory Interest
              </TabsTrigger>
              <TabsTrigger value="product-demo" className="text-sm">
                <Package className="mr-2" size={16} />
                Product Demo
              </TabsTrigger>
              <TabsTrigger value="distributor-onboarding" className="text-sm">
                <UserPlus className="mr-2" size={16} />
                Distributor Setup
              </TabsTrigger>
              <TabsTrigger value="territory-check" className="text-sm">
                <Search className="mr-2" size={16} />
                Territory Check
              </TabsTrigger>
            </TabsList>

            {/* Territory Interest Form */}
            <TabsContent value="territory-interest">
              <Card className="premium-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <MapPin className="mr-2" size={24} />
                    Territory Interest Form
                  </CardTitle>
                  <CardDescription>
                    Quick registration for potential partners interested in specific territories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...territoryForm}>
                    <form 
                      onSubmit={territoryForm.handleSubmit((data) => handleDemoSubmit("Territory Interest", data))}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={territoryForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} data-testid="input-territory-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={territoryForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your phone number" {...field} data-testid="input-territory-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={territoryForm.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred City *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your preferred city" {...field} data-testid="input-territory-city" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={territoryForm.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-territory-state">
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select State" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                  <SelectItem value="gujarat">Gujarat</SelectItem>
                                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                  <SelectItem value="karnataka">Karnataka</SelectItem>
                                  <SelectItem value="telangana">Telangana</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="gradient-premium text-white hover:opacity-90 px-8 py-3 premium-shadow"
                        data-testid="button-submit-territory-interest"
                      >
                        <CheckCircle className="mr-2" size={18} />
                        Submit Interest
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Product Demo Request Form */}
            <TabsContent value="product-demo">
              <Card className="premium-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Package className="mr-2" size={24} />
                    Product Demo Request
                  </CardTitle>
                  <CardDescription>
                    Schedule a personalized product demonstration for your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...productForm}>
                    <form 
                      onSubmit={productForm.handleSubmit((data) => handleDemoSubmit("Product Demo", data))}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={productForm.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your business name" {...field} data-testid="input-business-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={productForm.control}
                          name="contactPerson"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Person *</FormLabel>
                              <FormControl>
                                <Input placeholder="Contact person name" {...field} data-testid="input-contact-person" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={productForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="business@example.com" {...field} data-testid="input-demo-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={productForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Business phone number" {...field} data-testid="input-demo-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={productForm.control}
                          name="productCategory"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product Category *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-product-category">
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="detox">Detox Products</SelectItem>
                                  <SelectItem value="women">Women's Health</SelectItem>
                                  <SelectItem value="men">Men's Health</SelectItem>
                                  <SelectItem value="kids">Kids Nutrition</SelectItem>
                                  <SelectItem value="oral-care">Oral Care</SelectItem>
                                  <SelectItem value="all">All Products</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={productForm.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Demo Date *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} data-testid="input-demo-date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={productForm.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific requirements or questions..." 
                                {...field} 
                                data-testid="textarea-demo-notes"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="gradient-premium text-white hover:opacity-90 px-8 py-3 premium-shadow"
                        data-testid="button-submit-product-demo"
                      >
                        <Package className="mr-2" size={18} />
                        Request Demo
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Distributor Onboarding Form */}
            <TabsContent value="distributor-onboarding">
              <Card className="premium-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <UserPlus className="mr-2" size={24} />
                    Distributor Onboarding
                  </CardTitle>
                  <CardDescription>
                    Complete your distributor profile and business verification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...distributorForm}>
                    <form 
                      onSubmit={distributorForm.handleSubmit((data) => handleDemoSubmit("Distributor Onboarding", data))}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={distributorForm.control}
                          name="distributorName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Distributor/Business Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your business name" {...field} data-testid="input-distributor-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={distributorForm.control}
                          name="businessLicense"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business License Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter license number" {...field} data-testid="input-business-license" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={distributorForm.control}
                          name="gstNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>GST Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="15-digit GST number" {...field} data-testid="input-gst-number" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={distributorForm.control}
                          name="bankAccount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bank Account Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Bank account number" {...field} data-testid="input-bank-account" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={distributorForm.control}
                          name="territoryCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Territory Code *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-territory-code">
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Territory" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="MH-MU-001">MH-MU-001 (Mumbai Central)</SelectItem>
                                  <SelectItem value="MH-PU-002">MH-PU-002 (Pune East)</SelectItem>
                                  <SelectItem value="GJ-AH-003">GJ-AH-003 (Ahmedabad North)</SelectItem>
                                  <SelectItem value="KA-BL-004">KA-BL-004 (Bangalore South)</SelectItem>
                                  <SelectItem value="TN-CH-005">TN-CH-005 (Chennai West)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={distributorForm.control}
                          name="initialOrder"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Initial Order Value *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-initial-order">
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Order Value" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="50k-1l">₹50,000 – ₹1 Lakh</SelectItem>
                                  <SelectItem value="1l-3l">₹1 Lakh – ₹3 Lakh</SelectItem>
                                  <SelectItem value="3l-5l">₹3 Lakh – ₹5 Lakh</SelectItem>
                                  <SelectItem value="5l-plus">₹5 Lakh+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="gradient-premium text-white hover:opacity-90 px-8 py-3 premium-shadow"
                        data-testid="button-submit-distributor-onboarding"
                      >
                        <UserPlus className="mr-2" size={18} />
                        Complete Onboarding
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Territory Availability Check */}
            <TabsContent value="territory-check">
              <Card className="premium-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Search className="mr-2" size={24} />
                    Territory Availability Check
                  </CardTitle>
                  <CardDescription>
                    Check real-time availability of franchise territories in your area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...territoryCheckForm}>
                    <form 
                      onSubmit={territoryCheckForm.handleSubmit((data) => handleDemoSubmit("Territory Check", data))}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <FormField
                          control={territoryCheckForm.control}
                          name="pincode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pincode *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter 6-digit pincode" {...field} data-testid="input-territory-pincode" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={territoryCheckForm.control}
                          name="district"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>District *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter district name" {...field} data-testid="input-territory-district" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={territoryCheckForm.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} data-testid="select-territory-check-state">
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select State" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                  <SelectItem value="gujarat">Gujarat</SelectItem>
                                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                  <SelectItem value="karnataka">Karnataka</SelectItem>
                                  <SelectItem value="telangana">Telangana</SelectItem>
                                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Demo Result:</strong> Based on your search criteria, we found:
                        </p>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center text-trust">
                            <CheckCircle className="mr-2" size={16} />
                            3 Premium territories available
                          </li>
                          <li className="flex items-center text-trust">
                            <CheckCircle className="mr-2" size={16} />
                            High potential market area
                          </li>
                          <li className="flex items-center text-accent">
                            <MapPin className="mr-2" size={16} />
                            Estimated market size: 50,000+ households
                          </li>
                        </ul>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="gradient-premium text-white hover:opacity-90 px-8 py-3 premium-shadow"
                        data-testid="button-submit-territory-check"
                      >
                        <Search className="mr-2" size={18} />
                        Check Availability
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}