import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Users, 
  TrendingUp, 
  Award, 
  Heart, 
  MapPin, 
  Clock, 
  MessageCircle,
  Briefcase,
  GraduationCap,
  Building2,
  Target,
  Handshake
} from "lucide-react";

const jobOpportunities = [
  {
    id: 1,
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Pan India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹5-8 LPA + Incentives",
    description: "Lead business expansion initiatives, develop strategic partnerships, and drive franchise acquisition across multiple territories.",
    responsibilities: [
      "Identify and develop new franchise opportunities",
      "Build relationships with potential partners and distributors",
      "Conduct market research and competitor analysis",
      "Achieve monthly and quarterly targets for franchise acquisitions",
      "Train and support new franchise partners"
    ],
    requirements: [
      "MBA/PGDM in Sales & Marketing or related field",
      "Proven track record in franchise/distributorship sales",
      "Excellent communication and negotiation skills",
      "Willingness to travel extensively",
      "Experience in FMCG/Healthcare industry preferred"
    ],
    email: "careers@truehealthcare.co.in"
  },
  {
    id: 2,
    title: "Regional Sales Manager",
    department: "Sales",
    location: "North India",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹4-6 LPA + Incentives",
    description: "Drive sales growth in assigned regions, manage distributor networks, and ensure market penetration for TRUE Healthcare products.",
    responsibilities: [
      "Manage and grow distributor network in assigned territory",
      "Achieve sales targets and KPIs",
      "Monitor market trends and competition",
      "Provide training and support to distributors",
      "Develop and implement regional sales strategies"
    ],
    requirements: [
      "Bachelor's degree in any field",
      "2+ years experience in sales, preferably FMCG",
      "Strong relationship building skills",
      "Own vehicle and valid driving license",
      "Local language proficiency"
    ],
    email: "sales@truehealthcare.co.in"
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Jaipur/Remote",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-5 LPA",
    description: "Develop and execute digital marketing campaigns to enhance brand presence and support franchise partner acquisition.",
    responsibilities: [
      "Manage social media platforms and content creation",
      "Execute digital advertising campaigns (Google Ads, Facebook, Instagram)",
      "Create engaging content for digital channels",
      "Monitor and analyze campaign performance",
      "Support franchise partners with marketing materials"
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "Proficiency in Google Ads, Facebook Ads Manager",
      "Experience with content creation tools (Canva, Adobe Suite)",
      "Strong analytical and communication skills",
      "Knowledge of healthcare/wellness industry is a plus"
    ],
    email: "marketing@truehealthcare.co.in"
  },
  {
    id: 4,
    title: "Territory Development Manager",
    department: "Business Development",
    location: "Multiple Cities",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹4-7 LPA + Travel Allowances",
    description: "Expand TRUE Healthcare's presence in new territories by identifying, recruiting, and onboarding franchise partners.",
    responsibilities: [
      "Identify high-potential territories for expansion",
      "Recruit and onboard new franchise partners",
      "Conduct territory mapping and market analysis",
      "Support new partners during initial setup phase",
      "Maintain relationships with existing franchise network"
    ],
    requirements: [
      "Graduate in any discipline",
      "Experience in franchise development or channel partnerships",
      "Excellent presentation and interpersonal skills",
      "Ability to work independently with minimal supervision",
      "Willingness to travel extensively across assigned territories"
    ],
    email: "expansion@truehealthcare.co.in"
  },
  {
    id: 5,
    title: "Product Marketing Specialist",
    department: "Marketing",
    location: "Jaipur",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3.5-6 LPA",
    description: "Develop product positioning strategies, create marketing materials, and support product launches for TRUE Healthcare's wellness product range.",
    responsibilities: [
      "Develop product marketing strategies and positioning",
      "Create marketing collaterals and product documentation",
      "Support product launches and promotional campaigns",
      "Conduct market research and competitive analysis",
      "Collaborate with sales team to develop sales tools"
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business, or Life Sciences",
      "Experience in product marketing, preferably in healthcare/FMCG",
      "Strong writing and presentation skills",
      "Knowledge of regulatory requirements for healthcare products",
      "Creative thinking and problem-solving abilities"
    ],
    email: "marketing@truehealthcare.co.in"
  }
];

const internshipOpportunities = [
  {
    id: 1,
    title: "Sales & Marketing Intern",
    duration: "3-6 months",
    stipend: "₹15,000-25,000/month",
    description: "Gain hands-on experience in franchise business development and digital marketing campaigns.",
    skills: ["Market Research", "Lead Generation", "Social Media Marketing", "Sales Support"],
    email: "internships@truehealthcare.co.in"
  },
  {
    id: 2,
    title: "Business Development Intern",
    duration: "4-6 months",
    stipend: "₹12,000-20,000/month",
    description: "Support expansion activities, territory mapping, and franchise partner onboarding processes.",
    skills: ["Business Analysis", "Territory Mapping", "Partner Support", "Data Analysis"],
    email: "internships@truehealthcare.co.in"
  },
  {
    id: 3,
    title: "Digital Marketing Intern",
    duration: "3-4 months",
    stipend: "₹10,000-18,000/month",
    description: "Create digital content, manage social media campaigns, and support online marketing initiatives.",
    skills: ["Content Creation", "Social Media Management", "Google Analytics", "Graphic Design"],
    email: "internships@truehealthcare.co.in"
  }
];

const companyBenefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Fast-track career advancement in India's growing wellness industry"
  },
  {
    icon: Award,
    title: "Performance Incentives",
    description: "Attractive incentive structure based on performance and achievements"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness product benefits"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous training programs and skill development opportunities"
  },
  {
    icon: Building2,
    title: "Work Environment",
    description: "Collaborative culture with flexible working arrangements"
  },
  {
    icon: Target,
    title: "Clear Goals",
    description: "Well-defined KPIs and transparent performance evaluation process"
  }
];

export default function Careers() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "TRUE Healthcare™",
      "sameAs": "https://truehealthcare.co.in",
      "logo": "https://truehealthcare.co.in/logo.jpg"
    },
    "jobLocation": {
      "@type": "Place",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "industry": "Healthcare and Wellness",
    "description": "Join TRUE Healthcare™ team and build your career in India's fastest-growing wellness franchise network."
  };
  const handleWhatsAppApplication = (jobTitle: string, email: string) => {
    const message = `🌿 *TRUE Healthcare™ Job Application*

*Position:* ${jobTitle}

*Personal Information:*
Full Name: 
Phone Number: 
Email: ${email}
Current Location: 
Experience: 

*Application Details:*
📧 Please email your detailed resume to: ${email}

*Why TRUE Healthcare™?*
I'm interested in joining TRUE Healthcare™ because:
[Please share your motivation]

*Availability:*
When can you start: 
Notice Period (if applicable): 

*Additional Information:*
[Any additional details you'd like to share]

Thank you for considering my application! 🙏

I will send my resume to ${email} as requested.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919660393455?text=${encodedMessage}`, '_blank');
  };

  const handleInternshipApplication = (internshipTitle: string) => {
    const message = `🎓 *TRUE Healthcare™ Internship Application*

*Position:* ${internshipTitle}

*Student Information:*
Full Name: 
Phone Number: 
Email: 
College/University: 
Course & Year: 
Location: 

*Internship Details:*
Available Duration: 
Preferred Start Date: 
Expected Stipend: 

*Skills & Experience:*
Relevant Skills: 
Previous Internship Experience: 
Portfolio/Projects (if any): 

*Why TRUE Healthcare™?*
I want to intern with TRUE Healthcare™ because:
[Please share your motivation]

*Additional Information:*
[Any additional details you'd like to share]

📧 I will also email my resume to internships@truehealthcare.co.in

Thank you for considering my application! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919660393455?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Careers at TRUE Healthcare™ | Join India's Leading Wellness Franchise Network"
        description="Join TRUE Healthcare™ team! We're hiring Business Development Managers, Sales Executives, Marketing Specialists and offering internships. Build your career in India's fastest-growing wellness franchise industry."
        keywords="TRUE Healthcare careers, jobs in wellness industry, franchise business development jobs, sales jobs India, marketing jobs Jaipur, healthcare jobs, internships"
        canonicalUrl="https://truehealthcare.co.in/careers"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6" data-testid="heading-careers">
            Join TRUE Healthcare™ Team
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of India's fastest-growing wellness franchise network. Build your career while helping entrepreneurs succeed in the healthcare industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="mr-2" size={16} />
              Growing Team
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TrendingUp className="mr-2" size={16} />
              Career Growth
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Heart className="mr-2" size={16} />
              Wellness Focus
            </Badge>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground">
              Discover the benefits of joining TRUE Healthcare™ family
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="mx-auto mb-4 text-accent" size={48} />
                  <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">
              Join our mission to revolutionize healthcare franchise business in India
            </p>
          </div>
          
          <div className="grid gap-8">
            {jobOpportunities.map((job) => (
              <Card key={job.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2" data-testid={`job-title-${job.id}`}>
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{job.description}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Job Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="mr-2 text-muted-foreground" size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 text-muted-foreground" size={16} />
                          <span>{job.experience} experience</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="mr-2 text-muted-foreground" size={16} />
                          <span className="font-medium text-green-600">{job.salary}</span>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <h4 className="font-semibold text-primary mb-2">Key Responsibilities</h4>
                      <ul className="text-sm space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Requirements</h4>
                      <ul className="text-sm space-y-1 mb-4">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          className="flex-1"
                          onClick={() => handleWhatsAppApplication(job.title, job.email)}
                          data-testid={`button-apply-${job.id}`}
                        >
                          <MessageCircle className="mr-2" size={16} />
                          Apply via WhatsApp
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(`mailto:${job.email}?subject=Application for ${job.title}`, '_blank')}
                          data-testid={`button-email-${job.id}`}
                        >
                          Email Resume
                        </Button>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        📧 Send your resume to: {job.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Internship Opportunities</h2>
            <p className="text-xl text-muted-foreground">
              Start your career journey with hands-on experience in the wellness industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {internshipOpportunities.map((internship) => (
              <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary" data-testid={`internship-title-${internship.id}`}>
                    {internship.title}
                  </CardTitle>
                  <CardDescription>{internship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Duration:</span>
                        <span className="text-sm">{internship.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Stipend:</span>
                        <span className="text-sm font-semibold text-green-600">{internship.stipend}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {internship.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      className="w-full"
                      onClick={() => handleInternshipApplication(internship.title)}
                      data-testid={`button-apply-internship-${internship.id}`}
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Apply via WhatsApp
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      📧 Also email your resume to: {internship.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take the first step towards an exciting career in India's growing wellness industry
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">HR Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">General Inquiries</h4>
                <p className="text-muted-foreground">📧 careers@truehealthcare.co.in</p>
                <p className="text-muted-foreground">📱 +91 96603 93455</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Internships</h4>
                <p className="text-muted-foreground">📧 internships@truehealthcare.co.in</p>
                <p className="text-muted-foreground">📱 WhatsApp: +91 96603 93455</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Application Process:</strong> Apply via WhatsApp for quick response, and email your detailed resume to the respective department email for formal application processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}