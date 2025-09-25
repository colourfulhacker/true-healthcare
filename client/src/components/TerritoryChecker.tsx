import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle, Info } from "lucide-react";

interface TerritoryAvailability {
  available: boolean;
  slotsRemaining?: number;
  message: string;
}

export default function TerritoryChecker() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedPanchayat, setSelectedPanchayat] = useState("");
  const [checkAvailability, setCheckAvailability] = useState(false);

  const { data: states } = useQuery({
    queryKey: ["/api/territories/states"],
    enabled: true,
  });

  const { data: districts } = useQuery({
    queryKey: ["/api/territories/districts"],
    queryFn: () => fetch(`/api/territories/districts?parent=${selectedState}`).then(res => res.json()),
    enabled: !!selectedState,
  });

  const { data: tehsils } = useQuery({
    queryKey: ["/api/territories/tehsils"],
    queryFn: () => fetch(`/api/territories/tehsils?parent=${selectedState},${selectedDistrict}`).then(res => res.json()),
    enabled: !!selectedState && !!selectedDistrict,
  });

  const { data: panchayats } = useQuery({
    queryKey: ["/api/territories/panchayats"],
    queryFn: () => fetch(`/api/territories/panchayats?parent=${selectedState},${selectedDistrict},${selectedTehsil}`).then(res => res.json()),
    enabled: !!selectedState && !!selectedDistrict && !!selectedTehsil,
  });

  const { data: availability } = useQuery<TerritoryAvailability>({
    queryKey: ["/api/territories/check"],
    queryFn: () => 
      fetch("/api/territories/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          state: selectedState,
          district: selectedDistrict,
          tehsil: selectedTehsil,
          panchayat: selectedPanchayat,
        }),
      }).then(res => res.json()),
    enabled: checkAvailability && !!selectedState && !!selectedDistrict && !!selectedTehsil && !!selectedPanchayat,
  });

  const handleSelectionChange = () => {
    if (selectedState && selectedDistrict && selectedTehsil && selectedPanchayat) {
      setCheckAvailability(true);
    } else {
      setCheckAvailability(false);
    }
  };

  const renderStatusBox = () => {
    if (!selectedState || !selectedDistrict || !selectedTehsil || !selectedPanchayat) {
      return (
        <div className="bg-muted text-muted-foreground rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Info className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Select Your Location</span>
          </div>
          <p className="text-lg">Please select your desired location to check for open slots.</p>
        </div>
      );
    }

    if (!availability) {
      return (
        <div className="bg-muted text-muted-foreground rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Info className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Checking Availability...</span>
          </div>
          <p className="text-lg">Please wait while we check slot availability.</p>
        </div>
      );
    }

    if (availability.available) {
      return (
        <div className="bg-trust text-white rounded-lg p-6 text-center" data-testid="status-available">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Congratulations!</span>
          </div>
          <p className="text-lg">{availability.message}</p>
        </div>
      );
    } else {
      return (
        <div className="bg-destructive text-white rounded-lg p-6 text-center" data-testid="status-unavailable">
          <div className="flex items-center justify-center mb-2">
            <XCircle className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Sorry!</span>
          </div>
          <p className="text-lg">{availability.message}</p>
        </div>
      );
    }
  };

  return (
    <div className="bg-secondary/30 rounded-xl p-8 mb-12">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center" data-testid="heading-territory-checker">
        Check Real-Time Slot Availability in Your Area
      </h3>
      
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Select 
          value={selectedState} 
          onValueChange={(value) => {
            setSelectedState(value);
            setSelectedDistrict("");
            setSelectedTehsil("");
            setSelectedPanchayat("");
            setCheckAvailability(false);
          }}
          data-testid="select-state"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent>
            {Array.isArray(states) && states.map((state: string) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={selectedDistrict} 
          onValueChange={(value) => {
            setSelectedDistrict(value);
            setSelectedTehsil("");
            setSelectedPanchayat("");
            setCheckAvailability(false);
          }}
          disabled={!selectedState}
          data-testid="select-district"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent>
            {districts?.map((district: string) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={selectedTehsil} 
          onValueChange={(value) => {
            setSelectedTehsil(value);
            setSelectedPanchayat("");
            setCheckAvailability(false);
          }}
          disabled={!selectedDistrict}
          data-testid="select-tehsil"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Tehsil" />
          </SelectTrigger>
          <SelectContent>
            {tehsils?.map((tehsil: string) => (
              <SelectItem key={tehsil} value={tehsil}>
                {tehsil}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={selectedPanchayat} 
          onValueChange={(value) => {
            setSelectedPanchayat(value);
            handleSelectionChange();
          }}
          disabled={!selectedTehsil}
          data-testid="select-panchayat"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Panchayat" />
          </SelectTrigger>
          <SelectContent>
            {panchayats?.map((panchayat: string) => (
              <SelectItem key={panchayat} value={panchayat}>
                {panchayat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {renderStatusBox()}
    </div>
  );
}
